var images = document.getElementsByTagName("copyimg");
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
    copyLink = images[i].getAttribute("copyLink");
    copyName = images[i].getAttribute("copyName");
    copyrightDivID = 'copyrightDIV' + i;
    images[i].insertAdjacentHTML('afterEnd', '<div class="IMGcontainer"><img src="'+ images[i].getAttribute("src") +'" class="IMGBlock"><div id = "' + copyrightDivID + '" class="copyright" onmouseover="copyScript(\''+ copyName +'\',  \''+ copyrightDivID +'\');" onmouseout="changeBack(\'' + copyrightDivID + '\');" onclick="window.open(\'' + copyLink + '\');">&copy;</div></div>');


}
   
var elements = document.getElementsByTagName('copyimg'), element;
while (element = elements[0]) {
  element.parentNode.removeChild(element);
}       
    