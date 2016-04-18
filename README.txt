# Image-Credit-Overlay

Different format for including image credit overlays on images. Vanilla JS and CSS.



Script replaces <img> elements containing data-srcname attributes and surrounds them in <divs> to contain copyright information overlay on the image.



Image will have a © symbol on the bottom right of the image. 
Hovering over the image will show the source/artist/author(data-srcname) attribute value. Clicking this will open the data-srclink attribute value in a new window.



Installation:

Link copy.css inside <head></head> tags with <link rel="stylesheet" type="text/css" href="copy.css">

Link copy.js just above the closing </body> tag with <script src="copy.js></script>



Proper format:
<img src="imagename.ext" data-srcname="Bob's funny pictures" data-srclink="http://www.bobsfunnywebsite.com">


