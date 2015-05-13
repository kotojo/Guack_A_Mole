'use strict';
$(function(){
  // materialzie menu will come bback to
  // $('.button-collapse').sideNav({
  //   menuWidth: 300,
  //   edge: 'right',
  //   closeOnClick: true
  // });
// );

});


$('.avo').click(function(e){
    e.preventDefault();
    $(this).removeClass('avo').addClass('guacamole').delay(1000).fadeOut('explode');
  });


