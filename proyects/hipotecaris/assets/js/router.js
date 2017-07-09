//_________Hash change router start ______________
window.onhashchange = router;

function router(){
    if (window.location.hash) {
    check();
    getRoute(window.location.href.split("#/")[1]);
    buttons_color(window.location.href.split("#/")[1]);
////////////////////////////LOADING CHART////////////////////////////////////
if (window.location.hash == "#/calculadora"){
var script = document.createElement('script');
script.src = ".proyects/hipotecaris/assets/js/Chart.bundle.min.js";
script.onload = function() {
console.log("Graph its been loaded");
loadChart();
};
document.getElementsByTagName('head')[0].appendChild(script);}
////////////////////////////LOADING CHART////////////////////////////////////
}else{
        getRoute("/inicio");
        buttons_color("inicio");
  }
}



//___________Check if the hash doesnt exists___________
function check(){
if (window.location.hash !== "#/calculadora" ||
  window.location.hash !== "#/acerca" ||
  window.location.hash !== "#/contacto" ||
  window.location.hash !== ""
) {
window.location.hash == "#/404"
}
}
//___________End of Check if the hash doesnt exists___________




//___________Start of XMLHttpRequest__________________________

var request;
function getRoute(hashName){
Pace.restart()
var url="/proyects/hipotecaris/partials/" + hashName + ".html";

if(window.XMLHttpRequest){
request=new XMLHttpRequest();
}
else if(window.ActiveXObject){ //IE fallback
request=new ActiveXObject("Microsoft.XMLHTTP");
}

try{
request.onreadystatechange=sendRoute;
request.open("GET",url,true);
request.send();
}
catch(e){
alert("Unable to connect to server");
}
}
//Inserting html
function sendRoute(){
if(request.readyState==4){
if(request.status === 200){
  //check if "OK" (200) //success

} else {
location.hash = '#/404' //otherwise, some other code was returned
}
var val=request.responseText;
document.getElementById('views').innerHTML=val;
}

// Load chart

}

//___________End of XMLHttpRequest__________________________
