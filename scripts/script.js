/* variable declarations */

let sharePanel;
let shareButton;

/* function declarations */

//initializes the share panel and share button element
function initSharePanel() {
  sharePanel = document.getElementById("share-box");
  shareButton = document.getElementsByClassName("share-button")[0];
  //setting height to 0 in javascript and controlling the value in css
  //allows for smooth transition between mobile and desktop view
  //(the height doesn't get stuck on mobile size when switching to desktop
  //and vice versa as opposed to setting the initial height to 0 in css
  //and controlling the open height in javascript)
  sharePanel.style.height = "0";
}

//toggles the visibility of the share panel
function toggleSharePanel() {
  //if share panel is closed, open it and if it's open, close it
  if (sharePanel.style.height == "0px") openSharePanel();
  else closeSharePanel();
}

//opens the share panel
function openSharePanel() {
  //set open style
  sharePanel.style.height = "";
  sharePanel.style.opacity = "1";
  //set active class for the share button
  shareButton.classList.add("share-button-active");
}

//closes the share panel
function closeSharePanel() {
  //set close style
  sharePanel.style.height = "0px";
  sharePanel.style.opacity = "";
  //remove active class from the share button
  shareButton.classList.remove("share-button-active");
}
