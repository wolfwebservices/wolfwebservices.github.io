//_________Cleans up hash to load inicio partial__________
function inicio() {
if ( window.history && window.history.pushState ) {
      window.history.pushState('', '', window.location.pathname)
      //console.log("1");
      getRoute("/inicio")
      buttons_color("inicio");

  } else {
      window.location.href = window.location.href.replace(/#.*$/, '#');
      //console.log("2");
      //  history.pushState('', document.title, window.location.pathname);
      //  getRoute("/inicio");
}}

//_________Changes the color of the active button partial__________
function buttons_color(valueofhash) {
  var buttons = [
    "inicio",
    "acerca",
    "portafolio",
    "planes",
    "contacto"
  ]
  for (var i = 0; i < buttons.length; i++) {
  removeClass(document.getElementById("nav-btn-" + buttons[i]), 'nav-button-active')
  }

  addClass(document.getElementById("nav-btn-" + valueofhash), 'nav-button-active')
}

//_________Add class functions (just to "simplify the shit")_______________
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
