var images = document.getElementsByTagName("img");
var i;
var copyLink;
var copyName;
var copyrightDivID;




function copyScript(copyName, divID) {
    window.PreviousTextValue = document.getElementById(divID).innerHTML;
    
    document.getElementById(divID).innerHTML = copyName;
}
        
function changeBack(divID) {
        document.getElementById(divID).innerHTML = window.PreviousTextValue;
}

for (i = 0; i < images.length; i++) {
    if (images[i].hasAttribute('data-srcname')){
    copyLink = images[i].dataset.srclink;
    copyName = images[i].dataset.srcname;
    copyrightDivID = 'copyrightDIV' + i;
    images[i].insertAdjacentHTML('afterEnd', '<div class="IMGcontainer"><img src="'+ images[i].getAttribute("src") +'" class="IMGBlock"><div id = "' + copyrightDivID + '" class="copyright" onmouseover="copyScript(\''+ copyName +'\',  \''+ copyrightDivID +'\');" onmouseout="changeBack(\'' + copyrightDivID + '\');" onclick="window.open(\'' + copyLink + '\');">&copy;</div></div>');
    }

}
   
var elements = document.getElementsByTagName("img");
for (i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute('data-srcname')){
 elements[i].parentNode.removeChild(elements[i]);
    }
}       
    
