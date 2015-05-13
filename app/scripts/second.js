'use strict';

function disappear() {
  $('.guacamole').removeClass('guacamole').addClass('disappear');
}

function reappear() {
  $('disappear').addClass('avo').removeClass('disappear');
}

function clickToChange(){
  $('.avo').click(function(){
    $(this).removeClass('avo').addClass('guacamole').delay(1500).queue(function(){
      disappear();
    });

  });
}


