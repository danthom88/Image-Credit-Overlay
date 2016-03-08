# Image-Credit-Overlay
New format for including image credit overlays on images. Vanilla JS and CSS.

Script looks for tag name <copyimg> with attributes src, copyName, and copyLink.
Script replaces <copyimg> with a regular <img> of same src.

Image will have a © symbol on the bottom right of the image. Hovering over the image will show the source/artist/author(copyName) attribute value. Clicking this will open the copyLink attribute value in a new window.

Installation:
Link copy.css inside <head></head> tags with <link rel="stylesheet" type="text/css" href="copy.css">
Link copy.js just above the closing </body> tag with <script src="copy.js></script>

Proper format:
<copyimg src="your_filename.png" copyName="SourceOfImage" copyLink="URLtoSource"></copyimg>

Future plans:
Just create new img attributes and overlay © information if those attributes exist. Otherwise leave the image as is.



;
