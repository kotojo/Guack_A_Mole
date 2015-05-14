'use strict';
$(function(){

  function disappear() {
    $('.guacamole').removeClass('guacamole').addClass('disappear');
    console.log('stuff');
  }

  // function reappear() {
  //   $('.disappear').addClass('avo').removeClass('disappear');
  // }

  function reappear2(){
  $('div').each(function(){
    if($(this).hasClass('disappear')){
      $(this).addClass('avo').removeClass('disappear');
      console.log('reset');
    }
  });
  }

//click handler for turning avos into guac
function handleClick(id){
    $(id).click(function(){
      $(this).removeClass('avo').addClass('guacamole');
      setTimeout(function(){
        $('.guacamole').removeClass('guacamole').addClass('disappear');
    console.log('stuff');
      }, 1000);
      setTimeout(function(){
         $('div').each(function(){
    if($(this).hasClass('disappear')){
      $(this).addClass('avo').removeClass('disappear');
      console.log('reset');
    }
  });
       }, 1000);
        // setTimeout(disappear(), 1500);
        // setTimeout(reappear2(), 500);
        // setTimeout(document.location.reload(true), 500);
      });

    }

handleClick('#avo1');
handleClick('#avo2');
handleClick('#avo3');
handleClick('#avo4');
handleClick('#avo5');
handleClick('#avo6');

//Animate avos up and down
// setTimeout($('#avo4').animateCSS("slideOutDown"), 1000);


// clickToChange();



});






