function loadAllPartials() {
  var partials = [
    "inicio",
    "acerca",
    "contacto",
    "portafolio",
    "planes",
    "terminosycondiciones"
  ]


  for (var i = 0; i < partials.length; i++) {
    loadRoutes(partials[i]);
  }
}





var request;
function loadRoutes(partialName){
Pace.restart()
var url="/partials/" + partialName + ".html";

if(window.XMLHttpRequest){
request=new XMLHttpRequest();
}
else if(window.ActiveXObject){ //IE fallback
request=new ActiveXObject("Microsoft.XMLHTTP");
}

try{
request.onreadystatechange=sendRoute;
request.open("GET",url,true);
request.setRequestHeader("Cache-Control","public", "max-age=500000");
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
