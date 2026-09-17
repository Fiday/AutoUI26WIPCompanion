(function () {
  'use strict';
  const palette = ['#702566', '#237d78', '#b65224', '#4767a0'];
  function youtubeId(value) {
    const text = String(value || '').trim();
    if (/^[\w-]{11}$/.test(text)) return text;
    try {
      const url = new URL(text);
      if (!['https:', 'http:'].includes(url.protocol)) return null;
      const host = url.hostname.replace(/^www\./, '');
      let id;
      if (host === 'youtu.be') id = url.pathname.slice(1).split('/')[0];
      else if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
        id = url.pathname === '/watch' ? url.searchParams.get('v') : /^\/(embed|shorts|live)\//.test(url.pathname) ? url.pathname.split('/')[2] : '';
      }
      return /^[\w-]{11}$/.test(id || '') ? id : null;
    } catch (_) { return null; }
  }
  function chartValid(chart) {
    if (!chart || !chart.title) return false;
    if (chart.type === 'image') return Boolean(chart.image && chart.alt);
    return ['line', 'bar'].includes(chart.type) && Array.isArray(chart.labels) && chart.labels.length > 0 &&
      Array.isArray(chart.series) && chart.series.length > 0 && chart.series.every(s => s.name && Array.isArray(s.values) &&
        s.values.length === chart.labels.length && s.values.every(v => v === null || (typeof v === 'number' && Number.isFinite(v)))) &&
      chart.series.some(s => s.values.some(v => v !== null));
  }
  function csvFor(chart) {
    const cell = value => '"' + String(value ?? '').replace(/^[=+@-]/, "'$&").replace(/"/g, '""') + '"';
    return [[chart.xLabel || 'Condition', ...chart.series.map(s => s.name)], ...chart.labels.map((label, i) =>
      [label, ...chart.series.map(s => s.values[i])])].map(row => row.map(v => typeof v === 'number' ? String(v) : cell(v)).join(',')).join('\r\n');
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { youtubeId, chartValid, csvFor };
  if (typeof document === 'undefined') return;
  const $ = id => document.getElementById(id);
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const svgNode = (tag, attrs, text) => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs || {}).forEach(([key, value]) => node.setAttribute(key, value));
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const content = window.RESEARCH_CONTENT || { incidents: [], charts: [] };
  const menu = document.querySelector('.menu-button');
  const nav = $('main-nav');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });

  const audioPlayer = $('incident-audio');
  let stopVideo = () => {};
  if (audioPlayer) {
    audioPlayer.addEventListener('play', () => stopVideo());
    audioPlayer.addEventListener('error', () => {
      $('incident-audio-status').textContent = 'The recording could not be loaded. Try the MP3 download link.';
      $('incident-audio-status').hidden = false;
    });
  }
  function showIncident(incident, index) {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.removeAttribute('src');
      audioPlayer.load();
      $('incident-audio-panel').hidden = !incident.audioUrl;
      $('incident-audio-status').hidden = true;
      if (incident.audioUrl) {
        audioPlayer.src = incident.audioUrl;
        audioPlayer.setAttribute('aria-label', 'Session 1, incident ' + (index + 1) + ': ' + incident.title);
        const download = $('incident-audio-download');
        download.href = incident.audioUrl;
        download.download = 'session-1-incident-' + (index + 1) + '.mp3';
      }
    }
    stopVideo = () => {};
    $('incident-prompt-panel').open = false;
    $('incident-prompt-panel').hidden = !incident.prompt;
    $('incident-prompt-text').textContent = incident.prompt || '';
    $('incident-voice-instructions').textContent = incident.voiceInstructions || '';

    Array.from($('incident-selector').children).forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    $('incident-index').textContent = 'Session 1 / Incident ' + String(index + 1).padStart(2, '0');
    $('incident-title').textContent = incident.title;
    $('incident-event').textContent = incident.event;
    $('incident-response').textContent = incident.response;
    $('incident-explanation').textContent = incident.explanation || '';
    $('incident-explanation').hidden = !incident.explanation;
    $('incident-source').textContent = incident.source || '';
    $('incident-tags').replaceChildren(...(incident.context || []).map(tag => make('span', '', tag)));
    const video = youtubeId(incident.youtubeUrl);
    const media = $('incident-media');
    media.replaceChildren();
    if (incident.image) {
      const img = make('img'); img.src = incident.image; img.alt = incident.imageAlt || incident.title;
      img.width = 1851; img.height = 1041; media.append(img);
    } else {
      const pending = make('div', 'media-pending');
      pending.append(make('span', 'event-mark', String(index + 1).padStart(2, '0')), make('strong', '', incident.title), make('p', '', video ? 'Session 1 · Simulator recording' : 'Session 1 · No video available'));
      media.append(pending);
    }
    const caption = $('media-caption');
    caption.textContent = video ? (incident.videoCaption || 'Simulator recording · ' + incident.title) : incident.caption;
    if (!video) {
      media.append(make('span', 'still-label', incident.image ? 'SIMULATION STILL' : 'NO VIDEO AVAILABLE'));
      return;
    }
    const watch = make('a', '', 'Watch on YouTube ↗');
    watch.href = 'https://www.youtube.com/watch?v=' + video; watch.target = '_blank'; watch.rel = 'noopener';
    caption.append(document.createTextNode(' · '), watch);
    const play = make('button', 'video-load'); play.type = 'button';
    play.setAttribute('aria-label', 'Play ' + incident.title + ' video on YouTube');
    const icon = make('span', 'play-icon', '▶'); icon.setAttribute('aria-hidden', 'true');
    play.append(icon, make('strong', '', 'Play incident video'), make('small', '', 'Loads YouTube when selected'));
    media.append(play);
    play.addEventListener('click', () => {
      if (audioPlayer) audioPlayer.pause();
      const preview = Array.from(media.childNodes);
      stopVideo = () => { media.replaceChildren(...preview); stopVideo = () => {}; };
      const iframe = make('iframe');
      const start = Math.max(0, Math.floor(Number(incident.startSeconds) || 0));
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + video + '?autoplay=1&rel=0&start=' + start;
      iframe.title = incident.title + ' — simulator recording';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true; iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      media.replaceChildren(iframe); iframe.focus();
    });
  }
  (content.incidents || []).forEach((incident, index) => {
    const button = make('button');
    button.append(make('span', 'incident-button-number', String(index + 1).padStart(2, '0')), make('span', 'incident-button-title', incident.title));
    button.setAttribute('aria-controls', 'incident-view');
    button.type = 'button'; button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => showIncident(incident, index));
    $('incident-selector').append(button);
  });
  if (content.incidents && content.incidents.length) showIncident(content.incidents[0], 0);

  function renderChart(chart, index) {
    const card = make('article', 'chart-card');
    const heading = make('h3', '', chart.title); heading.id = 'chart-title-' + index;
    card.setAttribute('aria-labelledby', heading.id); card.append(heading);
    if (chart.description) card.append(make('p', '', chart.description));
    if (chart.type === 'image') {
      const img = make('img', 'graph-image'); img.src = chart.image; img.alt = chart.alt; img.loading = 'lazy';
      card.append(img);
      if (chart.caption) card.append(make('p', '', chart.caption));
    } else {
      const values = chart.series.flatMap(s => s.values.filter(v => v !== null));
      let min = Math.min(0, ...values), max = Math.max(0, ...values);
      if (min === max) max = min + 1;
      const range = max - min; if (max > 0) max += range * 0.1; if (min < 0) min -= range * 0.1;
      const width = Math.max(760, chart.labels.length * 95 + 130), height = 420;
      const left = 80, right = width - 25, top = 30, bottom = 330;
      const x = i => left + (right - left) * (i + 0.5) / chart.labels.length;
      const y = v => bottom - (v - min) / (max - min) * (bottom - top);
      const fmt = n => new Intl.NumberFormat('en', { maximumSignificantDigits: 4 }).format(n);
      const plot = make('div', 'chart-plot');
      plot.tabIndex = 0; plot.setAttribute('aria-label', chart.title + '. Scroll horizontally if needed.');
      const svg = svgNode('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-labelledby': 'plot-title-' + index, style: `min-width:${Math.min(width, 1100)}px` });
      svg.append(svgNode('title', { id: 'plot-title-' + index }, chart.title + '. Exact values are available in the data table below.'));
      for (let tick = 0; tick <= 5; tick++) {
        const value = min + (max - min) * tick / 5;
        svg.append(svgNode('line', { x1: left, x2: right, y1: y(value), y2: y(value), stroke: '#e5dfe5' }));
        svg.append(svgNode('text', { x: left - 12, y: y(value) + 5, 'text-anchor': 'end', fill: '#57515a' }, fmt(value)));
      }
      svg.append(svgNode('line', { x1: left, x2: right, y1: y(0), y2: y(0), stroke: '#8a818b' }));
      chart.labels.forEach((label, i) => svg.append(svgNode('text', { x: x(i), y: bottom + 28, 'text-anchor': 'middle', fill: '#57515a' }, label)));
      if (chart.yLabel) svg.append(svgNode('text', { x: 14, y: 17, fill: '#57515a' }, chart.yLabel));
      if (chart.xLabel) svg.append(svgNode('text', { x: (left + right) / 2, y: height - 15, 'text-anchor': 'middle', fill: '#57515a' }, chart.xLabel));
      const legend = make('div', 'legend');
      chart.series.forEach((series, si) => {
        const color = /^#[0-9a-f]{6}$/i.test(series.color || '') ? series.color : palette[si % palette.length];
        const key = make('span', '', series.name); key.style.setProperty('--series-color', color); legend.append(key);
        if (chart.type === 'line') {
          let path = '', gap = true;
          series.values.forEach((v, i) => { if (v === null) { gap = true; return; } path += (gap ? 'M' : 'L') + x(i) + ',' + y(v) + ' '; gap = false; });
          svg.append(svgNode('path', { d: path, fill: 'none', stroke: color, 'stroke-width': 3, 'stroke-dasharray': si % 2 ? '8 5' : 'none' }));
        }
        series.values.forEach((v, i) => {
          if (v === null) return;
          let mark;
          if (chart.type === 'bar') {
            const groupWidth = (right - left) / chart.labels.length * 0.72, barWidth = groupWidth / chart.series.length;
            mark = svgNode('rect', { x: x(i) - groupWidth / 2 + si * barWidth, y: Math.min(y(0), y(v)), width: Math.max(1, barWidth - 3), height: Math.abs(y(v) - y(0)), fill: color, rx: 2 });
          } else mark = svgNode('circle', { cx: x(i), cy: y(v), r: 5, fill: color, stroke: '#fff', 'stroke-width': 2 });
          mark.append(svgNode('title', {}, `${series.name} · ${chart.labels[i]}: ${v}`)); svg.append(mark);
        });
      });
      plot.append(svg); card.append(plot, legend);
      const details = make('details'); details.append(make('summary', '', 'View data table'));
      const tableWrap = make('div', 'table-scroll'), table = make('table'), thead = make('thead'), row = make('tr');
      [chart.xLabel || 'Condition', ...chart.series.map(s => s.name)].forEach(text => { const th = make('th', '', text); th.scope = 'col'; row.append(th); });
      thead.append(row); table.append(thead);
      const tbody = make('tbody');
      chart.labels.forEach((label, i) => {
        const tr = make('tr'), th = make('th', '', label); th.scope = 'row'; tr.append(th);
        chart.series.forEach(s => tr.append(make('td', '', s.values[i] === null ? 'Not available' : String(s.values[i])))); tbody.append(tr);
      });
      table.append(tbody); tableWrap.append(table); details.append(tableWrap); card.append(details);
      const foot = make('div', 'chart-foot'), download = make('a', '', 'Download data (.csv) ↓');
      download.href = URL.createObjectURL(new Blob([csvFor(chart)], { type: 'text/csv;charset=utf-8' }));
      download.download = (chart.id || 'chart-' + (index + 1)).replace(/[^a-z0-9_-]/gi, '-') + '.csv';
      foot.append(make('span', '', chart.source || ''), download); card.append(foot);
    }
    if (chart.type === 'image' && chart.source) card.append(make('p', 'chart-foot', chart.source));
    return card;
  }
  (content.charts || []).forEach((chart, i) => {
    if (!chartValid(chart)) { $('charts').append(make('p', 'chart-error', 'A figure is unavailable. Please check its configuration.')); return; }
    $('charts').append(renderChart(chart, i));
  });
  // The planned-evaluation note remains visible: adding a figure does not establish study completion.
})();
