'use strict';
$(function(){
var x = 0;
//handles the dissapearnce
  function disappear() {
    $('.guacamole').removeClass('guacamole').addClass('disappear');
     console.log('stuff');
  }
//handles the reappearnace
  function reappear2(){
  $('div').each(function(){
    if($(this).hasClass('disappear')){
      $(this).addClass('avo').removeClass('disappear');
      console.log('reset');
    }
  });
  }

//click handler for turning avos into guac and disappearing and reappreaing
function handleClick(id){
  $(id).click(function(){
    $(this).removeClass('avo').addClass('guacamole');
    setTimeout(disappear, 1000);
    setTimeout(reappear2, 3000);
    x++;
  });
}

handleClick('#avo1');
handleClick('#avo2');
handleClick('#avo3');
handleClick('#avo4');
handleClick('#avo5');
handleClick('#avo6');

//Animate avos up and down
function animateUpDown(id){
  // $(id).an
  // setTimeout($(id).animateCSS('slideInUp'), 3000);
}
//Random Second generator
var seconds;
function randomSeconds() {
  seconds = Math.random() * 10000;
  console.log(seconds);
}

//Animate avos up and down
function randomShow(){
  randomSeconds();
  $('#avo1').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
  randomSeconds();
  $('#avo2').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
  randomSeconds();
  $('#avo3').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
  randomSeconds();
  $('#avo4').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
  randomSeconds();
  $('#avo5').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
  randomSeconds();
  $('#avo6').delay(seconds).fadeOut('fast').delay(seconds).fadeIn('fast');
}


// animateUpDown('#avo1');

//loop to continuosly dissappear avos
setInterval(randomShow, seconds);




});






