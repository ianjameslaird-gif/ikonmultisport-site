Ikonmultisport videos

Put MP4 files (H.264 + AAC, ideally under ~50MB) and a JPG poster per video here, e.g. golf-1.mp4 + golf-1.jpg.
Then in index.html, inside the section's <div class="vgal">, replace the "Videos coming soon" panel with:
<div class="vt"><video controls playsinline preload="metadata" poster="videos/golf-1.jpg"><source src="videos/golf-1.mp4" type="video/mp4"></video></div>
For YouTube/Vimeo use an <iframe> inside <div class="vt"> (see comments in index.html).
Large files: prefer YouTube/Vimeo (GitHub limits files to 100MB).
