
$(function () {
    $('#inicio').click(function () {
         var button = $('#inicio');
  button.addClass('animated bounceIn');
button.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
    button.removeClass('animated bounceIn');
        });
    });
});


$(function () {
    $('#acerca').click(function () {
         var button = $('#acerca');
  button.addClass('animated bounceIn');
button.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
    button.removeClass('animated bounceIn');
        });
    });
});

$(function () {
    $('#planes').click(function () {
         var button = $('#planes');
  button.addClass('animated bounceIn');
button.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
    button.removeClass('animated bounceIn');
        });
    });
});

$(function () {
    $('#contacto').click(function () {
         var button = $('#contacto');
  button.addClass('animated bounceIn');
button.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
    button.removeClass('animated bounceIn');
        });
    });
});


$(function () {
    $('#portafolio').click(function () {
         var button = $('#portafolio');
  button.addClass('animated bounceIn');
button.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function () {
    button.removeClass('animated bounceIn');
        });
    });
});



var open = 0;

   function openNav() {

if (open == 0) {
           document.getElementById("mobile_bar").style.height = "200px";
           $('#mobile_bar').addClass('animated fadeInDown');
           $('#mobile_bar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
               $('#mobile_bar').removeClass('animated fadeInDown');
           });
           open = 1;
       } else if (open == 1) {
           document.getElementById("mobile_bar").style.height = "50px";
           open = 0;
           $('#mobile_bar').addClass('animated fadeInUp');
           $('#mobile_bar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
               $('#mobile_bar').removeClass('animated fadeInUp');

           });
       }
   }
