'use strict';


  function disappear() {
    $('.guacamole').removeClass('guacamole').addClass('disappear');
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

  function clickToChange() {
    $('.avo').click(function(){
      $(this).removeClass('avo').addClass('guacamole').delay(1500).queue(function(){
        disappear();
        setTimeout(reappear2, 500);
      });

    });
  }


clickToChange();




