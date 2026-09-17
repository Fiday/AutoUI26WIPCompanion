# Session 1: eight incidents and explanation audio

## Update the existing GitHub Pages site

1. Extract this ZIP.
2. Open Fiday/AutoUI26WIPCompanion and select Add file → Upload files.
3. Upload index.html, styles.css, app.js, content.js, and the assets folder
   together at the repository root. Commit to main.
4. Wait for your existing Pages deployment, then refresh the site.

Merge the assets folder into the existing one; keep assets/images and
assets/documents. This package adds assets/audio/session-1/1.mp3 through 8.mp3.
No images, PDFs, or poster files are replaced.

The page now includes eight selectable Session 1 entries, seven linked YouTube videos,
scenario details, the exact supplied explanation text, native audio controls,
MP3 download links, and expandable original prompts and voice instructions.
Audio does not autoplay. Changing the incident stops playback. Starting an
explanation stops the selected YouTube player, and starting a video pauses audio.

## YouTube videos

The seven supplied links are now assigned to incidents 1, 2, 4, 5, 6, 7, and 8.
Incident 3 has no video and retains its MP3, explanation, and scenario details.
Videos load only when Play incident video is selected.
Ensure videos are Unlisted or Public and Allow embedding is enabled in YouTube.
Their visibility and playback availability have not been verified from your account.
Edit youtubeUrl in content.js to replace or add a video later.

## Incident/audio mapping

1.mp3 — Passing a parked vehicle — Urban / Sparse / Low criticality
2.mp3 — Sudden braking ahead — Highway / Sparse / High criticality
3.mp3 — A vehicle drifts into our lane — Highway / Dense / Low criticality
4.mp3 — Preparing for a highway exit — Highway / Sparse / Low criticality
5.mp3 — A car runs a red light — Urban / Dense / High criticality
6.mp3 — Making way for an ambulance — Urban / Sparse / High criticality
7.mp3 — A car approaches closely from behind — Urban / Dense / Low criticality
8.mp3 — Stopping for a traffic jam — Highway / Dense / High criticality

The scenario labels and IDs follow the supplied CSV, including incident 3's
Low criticality label. Audio files are byte-for-byte copies of the uploads.
Explanation and prompt text is taken from the CSV; audio was not independently
transcribed. Internal responseAudioPath values are not included on the public page.

Based on repository commit b1bdf355b0b39e85036ab6c5d3ffe015010d63c4.
Preserves the existing study section, loop-arrow correction, and poster links.
If you have edited these four files after that commit, merge those edits.

Validated: JS syntax, internal links, eight CSV/audio mappings, desktop and
phone layout, native MP3 playback, stopping audio on incident change, and
expandable prompt details. The live repository has not been modified.
