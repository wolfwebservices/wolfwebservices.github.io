//>>>>>>>>>     Start of routing system       <<<<<<<<<<<<<<<<<<<<
function start(){

  if (location.protocol == 'http:'){
    location.href = location.href.replace(/^http:/, 'https:');
}

var frag = window.location.href.split("#");
if (frag.length == 1) {
inicio(); //no hash action
}
else if (!frag[1].length) {
// Empty hash action
inicio();
}
else {
// Non-empty hash actions
if(window.location.href.indexOf("#acerca") > -1) {
acerca();
console.log("acerca");
}
else if(window.location.href.indexOf("#planes") > -1) {
planes();
console.log("planes");
}
else if(window.location.href.indexOf("#inicio") > -1) {
inicio();
console.log("inicio");
}
else if(window.location.href.indexOf("#portafolio") > -1) {
portafolio();
console.log("portafolio");
}
else if(window.location.href.indexOf("#contacto") > -1) {
contacto();
}


}}



//Mr event listener for the urls that executes the function start on hash change
$(window).on('hashchange', function hash() {
start();
});

//Event listener to the changes in width
window.onresize = function(event) {

};


$(window).resize(function() {
  if ($(window).width() > 1000) {
    $(".buttons-c").center();
  }




 });
