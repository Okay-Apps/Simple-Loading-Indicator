/*
 simple-loading-indicator.js
*/
/*
 sudo:
  show:
   check if overlay element exist?
    yes: show
    no: create
  hide:
   check if overlay element exist?
   yes: hide
   no: do nothing
*/
function showLoading() {
 var sliOverlay = document.getElementById('sli-overlay');
 if (sliOverlay === null) {
  sliOverlay = document.createElement('div');
  sliOverlay.setAttribute("id","sli-overlay");
  sliOverlay.setAttribute("style", "position: fixed;display: block;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 2;cursor: pointer;");
  var sliText = document.createElement('div');
  sliText.setAttribute("id","sli-text");
  sliText.setAttribute("style", "position: absolute;top: 50%;left: 50%;font-size: 50px;color: white;transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);");
  sliText.innerHTML="Loading...";
  sliOverlay.appendChild(sliText);
  document.getElementsByTagName("body")[0].appendChild(sliOverlay);
 }
 else{
  sliOverlay.style.display = "block";
 }
}

function hideLoading(){
 var sliOverlay = document.getElementById('sli-overlay');
 if (sliOverlay !== null) {
  sliOverlay.style.display = "none";
 }
}