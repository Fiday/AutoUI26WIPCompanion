# AutoUI companion: visual fixes

Upload `index.html` and `styles.css` from this ZIP to the root of
Fiday/AutoUI26WIPCompanion, replacing the existing two files, and commit to main.
Keep the existing app.js, content.js, images, PDFs, and other files.
GitHub Pages will publish the update through the existing deployment setup.

These files were prepared against main commit 5388a29b4cb2bc8175e118a50c553722a670de39.
If you have edited index.html or styles.css since that commit, merge the changes rather
than overwriting your newer edits.

Changes:
- Show complete hero, simulator, and feedback screenshots without cropping.
- Keep image proportions consistent at every breakpoint.
- Switch to the compact menu earlier, before navigation crowds the identity.
- Keep incident placeholder text and labels inside their video frame.
- Prevent grid content and long links from forcing horizontal page overflow.
- Fix the missing space between author names when the line break is hidden.
- Improve heading wrapping, touch-target sizes, and small labels.
- Version the stylesheet link to refresh cached styling.

Validation: inspected the hosted original; browser-checked the revised desktop
layout and 320, 390, 720, and 900 px frames; checked mobile menu and incident
switching; checked internal links, assets, and JavaScript syntax.

The separate unpublished-study draft is not included in this upload ZIP.
The live repository was not changed: the GitHub integration rejected write access.
