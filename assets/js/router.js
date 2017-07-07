//_________Hash change router start ______________
window.onhashchange = router;
//window.addEventListener("hashchange",router, false);


function router(){
    if (window.location.hash) {
    check();
    getRoute(window.location.href.split("#/")[1]);
    buttons_color(window.location.href.split("#/")[1]);
}else{
        getRoute("/inicio");
        buttons_color("inicio");
}
}
//___________Check if the hash doesnt exists___________
function check(){
if (window.location.hash !== "#/acerca" ||
  window.location.hash !== "#/contacto" ||
  window.location.hash !== "#/planes" ||
  window.location.hash !== "#/portafolio" ||
  window.location.hash !== ""
) {
window.location.hash == "#/404"
}
}

//___________Start of XMLHttpRequest__________________________

var request;
function getRoute(hashName){
Pace.restart()
var url="/partials/" + hashName + ".html";

if(window.XMLHttpRequest){
request=new XMLHttpRequest();
}
else if(window.ActiveXObject){ //IE fallback
request=new ActiveXObject("Microsoft.XMLHTTP");
}

try{
request.onreadystatechange=sendRoute;
request.open("GET",url,true);
request.setRequestHeader("Cache-Control","public", "max-age=50000000");
request.send();
}
catch(e){
alert("Unable to connect to server");
}
}
//Inserting html
function sendRoute(){
if(request.readyState==4){
if(request.status === 304){
  //check if "OK" (200) //success
}else if(request.status === 200){

}
else {
location.hash = '#/404' //otherwise, some other code was returned
}
var val=request.responseText;
document.getElementById('views').innerHTML=val;
}

}
//___________End of XMLHttpRequest__________________________
