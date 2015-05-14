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

//click handler for turning avos into guac and disappearing and reappreaing
function handleClick(id){
  $(id).click(function(){
    $(this).removeClass('avo').addClass('guacamole');
    setTimeout(disappear, 1000);
    setTimeout(reappear2, 3000);
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
function animateUpDown(id){
  // $(id).an
}

// clickToChange();



});






