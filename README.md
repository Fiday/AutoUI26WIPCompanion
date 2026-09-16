# Adaptive Explanations — AutomotiveUI 2026

A responsive research companion website for *Exploring the Design Space of Adaptive Explanations in Automated Vehicles*. Includes a detailed platform overview, incident gallery, YouTube player support, configurable graphs, full manuscript viewer, A0 poster, and references.

This is a static website: no build step, account keys, package installation, or backend is needed. Relative asset paths work on both a GitHub project site and a custom domain.

## Publish with GitHub Pages

1. Create or choose a GitHub repository. Upload the **contents** of this folder to its root, so `index.html` sits beside `README.md`. Do not put everything inside an extra folder. Include `assets`, `app.js`, `content.js`, and `styles.css`.
2. In the repository, go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, then **main** and **/(root)**, and Save. If your branch has a different name, select that branch.
3. GitHub displays the published address in Settings → Pages after deployment finishes. A project repository normally appears at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

The included `.nojekyll` file keeps the site as plain static content. No paid hosting or external framework is required. The repository must be eligible for Pages under your GitHub plan.

### Optional: publish through GitHub Actions

The included `.github/workflows/pages.yml` is a manual deployment workflow. If you prefer Actions, select **GitHub Actions** as the Pages source, then open **Actions → Deploy research site → Run workflow**. After later edits, run it again. This workflow copies only public website files into the deployment artifact. The branch method above updates automatically after commits and is the simplest option.

Official instructions: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) · [Custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Add incident videos

Open `content.js`. Every incident is an object in `incidents`. Paste your YouTube link into its `youtubeUrl` field:

```js
youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
startSeconds: 0,
videoCaption: 'Blocked-road incident: passenger view and adaptive explanation.'
```

Replace `YOUR_VIDEO_ID` with the actual ID from your upload. Standard watch URLs, `youtu.be` links, Shorts URLs, and raw 11-character video IDs are supported. Set `startSeconds` explicitly to begin partway through a recording; time parameters in pasted URLs are not used.

Use a public or unlisted video with embedding enabled. Private videos cannot play for general visitors. The site loads a privacy-enhanced `youtube-nocookie.com` player only when someone presses Play. A direct YouTube link remains available if the embedded player is blocked. Only the selected incident plays; switching incidents removes the previous player.

You can add more incidents by copying an existing object. Set:

- `id`, `title`, `context`: unique identifier, short label, and actual recording conditions.
- `event`, `response`: what happens and how the vehicle responds.
- `explanation`: the exact explanation, or an empty string if none is supplied.
- `source`: whether this describes a recording, screenshot, or manuscript example.
- `image`, `imageAlt`: a local poster image and its description; an empty image uses a text panel.
- `caption`: the still-image caption while no video is configured.
- `youtubeUrl`, `startSeconds`, `videoCaption`: video configuration.

The blocked-road image is the supplied simulator screenshot. Sudden braking and lane change are manuscript examples, not existing recordings. Update their conditions to match your recordings. The current empty video fields are intentional.

Official embedding guidance: [YouTube embedded players](https://developers.google.com/youtube/player_parameters) · [Privacy-enhanced mode](https://support.google.com/youtube/answer/171780).

## Add graphs

`charts` in `content.js` is currently empty. No empirical results have been invented. Two approaches are supported.

### Publish a finished research figure

Export an SVG, PNG, or WebP figure into `assets/images/` and add:

```js
charts: [
  {
    id: 'study-figure',
    type: 'image',
    title: 'YOUR FIGURE TITLE',
    description: 'Describe the research question and what this figure shows.',
    image: './assets/images/YOUR-FIGURE.svg',
    alt: 'Describe the axes, comparison, and important pattern for readers who cannot see the figure.',
    caption: 'Define measures, units, uncertainty, sample size, and conditions as appropriate.',
    source: 'Identify the study or dataset.'
  }
]
```

Use this approach for publication figures with error bars, scatter plots, distributions, statistical annotations, or more complex layouts.

### Render a line or bar chart from actual data

Add an object with `type: 'line'` or `type: 'bar'`, a `labels` array, and a `series` array. The following is a schema illustration, **not working data**; replace the uppercase tokens with your own measurements before saving:

```js
{
  id: 'your-measure',
  type: 'bar',
  title: 'Your measured outcome',
  description: 'State the study, aggregation, sample size, and relevant limitations.',
  xLabel: 'Explanation condition',
  yLabel: 'Measure (units)',
  labels: ['Condition A', 'Condition B'],
  series: [
    { name: 'Measured outcome', values: [ACTUAL_VALUE_A, ACTUAL_VALUE_B], color: '#702566' }
  ],
  source: 'Your study or dataset, version/date'
}
```

Every series needs one finite number or `null` for each label. `null` means missing data and creates a gap in a line, never an invented zero. Keep category labels short. Graphs include legends, exact data tables, CSV downloads, and horizontal scrolling on narrow screens. Axes include zero. Built-in charts do not calculate confidence intervals or perform statistical analysis.

The research-status text is deliberately independent of graph configuration: when you have completed a study, update the evidence section in `index.html` to accurately describe its status and results. Adding a conceptual figure should not imply an evaluation has been completed.

## Replace the paper or poster

- Full manuscript: `assets/documents/paper.pdf`
- Poster: `assets/documents/poster-a0.pdf`
- Mobile PDF preview: `assets/images/paper-page.png`

The supplied manuscript is the eight-page anonymized submission. Replace it with your preferred public version when ready; also update the manuscript label, page count, and preview in `index.html` if they change. The site lists the authors provided in the poster. The PDF is embedded on desktop and has direct open/download links; mobile visitors get a preview and an Open PDF link for reliable reading.

## Customize the design and content

- `index.html`: research copy, author names, references, contact, and PDF links.
- `content.js`: incidents, YouTube URLs, and graph definitions.
- `styles.css`: university-inspired plum, coral, and teal palette; responsive layout and typography.
- `app.js`: menu, incident selection, embeds, chart rendering, and CSV export.

No external fonts, analytics, or JavaScript libraries are loaded. Images and PDFs are included locally; YouTube is contacted only after a video is selected for playback. Fonts use the visitor’s installed system fonts.

For a local preview, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`. Stop it with Ctrl+C. Do not publish the surrounding workspace or uploaded source folder.
