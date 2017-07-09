var state = false;
function openClose(){
  var listener = document.getElementById("mobile-nav-bar");
  var desktopBar = document.getElementById("nav-bar-desktop");
var hamburger = document.getElementById("hamburger-menu");

  if (!state){
removeClass(listener, "closed");
removeClass(desktopBar, "nav-desktop-closed");
addClass(listener, "open");
addClass(desktopBar, "nav-desktop-open");
addClass(hamburger, "is-active");
    state = true;
  }else{
    removeClass(listener, "open");
    removeClass(hamburger, "is-active");
    removeClass(desktopBar, "nav-desktop-open");
    addClass(listener, "closed");
    addClass(desktopBar, "nav-desktop-closed");
    state = false;

  }
}


function closebar(){
  var listener = document.getElementById("mobile-nav-bar");
  var desktopBar = document.getElementById("nav-bar-desktop");
  var hamburger = document.getElementById("hamburger-menu");
  removeClass(hamburger, "is-active");
  removeClass(listener, "open");
  removeClass(desktopBar, "nav-desktop-open");
  addClass(desktopBar, "nav-desktop-closed");
  addClass(listener, "closed");
  state = false;
}
