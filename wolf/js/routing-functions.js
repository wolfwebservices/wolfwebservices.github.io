function center(){
  //Center the nav bar vertical mode
  if ($(window).width() > 1000) {
  $(".buttons-c").center();
}
}



function inicio(){
center();
$('#v-inicio').css({display:'inline-block'});
$('#v-inicio').focus();
removeClassButton();
buttonInicio();

$('#v-acerca').css({display:'none'});
$('#v-planes').css({display:'none'});
$('#v-portafolio').css({display:'none'});
$('#v-contacto').css({display:'none'});

}

function acerca(){
center();
$('#v-acerca').css({display:'inline-block'});
$('#v-acerca').focus();
removeClassButton();
buttonAcerca();

$('#v-inicio').css({display:'none'});
$('#v-planes').css({display:'none'});
$('#v-portafolio').css({display:'none'});
$('#v-contacto').css({display:'none'});
}

function planes(){
center();
$('#v-planes').css({display:'inline-block'});
$('#v-planes').focus();
removeClassButton();
buttonPlanes();

$('#v-acerca').css({display:'none'});
$('#v-inicio').css({display:'none'});
$('#v-portafolio').css({display:'none'});
$('#v-contacto').css({display:'none'});
}

function portafolio(){
center();
$('#v-portafolio').css({display:'inline-block'});
$('#v-portafolio').focus();
removeClassButton();
buttonPortafolio();

$('#v-acerca').css({display:'none'});
$('#v-planes').css({display:'none'});
$('#v-inicio').css({display:'none'});
$('#v-contacto').css({display:'none'});
}

function contacto(){
center();
$('#v-contacto').css({display:'inline-block'});
$('#v-contacto').focus();
removeClassButton();
buttonContacto();

$('#v-acerca').css({display:'none'});
$('#v-planes').css({display:'none'});
$('#v-portafolio').css({display:'none'});
$('#v-inicio').css({display:'none'});
}



function buttonContacto(){
$("#contacto-button").addClass("active-button");
$("#contacto-button-bottom").addClass("active-button");
}

function buttonInicio(){
$("#inicio-button").addClass("active-button");
$("#inicio-button-bottom").addClass("active-button");
}

function buttonAcerca(){
$("#acerca-button").addClass("active-button");
$("#acerca-button-bottom").addClass("active-button");
}

function buttonPortafolio(){
$("#portafolio-button").addClass("active-button");
$("#portafolio-button-bottom").addClass("active-button");
}

function buttonPlanes(){
$("#planes-button").addClass("active-button");
$("#planes-button-bottom").addClass("active-button");
}


function removeClassButton(){
$("#inicio-button").removeClass("active-button");
$("#acerca-button").removeClass("active-button");
$("#portafolio-button").removeClass("active-button");
$("#planes-button").removeClass("active-button");
$("#contacto-button").removeClass("active-button");

$("#inicio-button-bottom").removeClass("active-button");
$("#planes-button-bottom").removeClass("active-button");
$("#acerca-button-bottom").removeClass("active-button");
$("#portafolio-button-bottom").removeClass("active-button");
$("#contacto-button-bottom").removeClass("active-button");
}
