'use strict';
$(function(){
  // materialzie menu will come bback to
  // $('.button-collapse').sideNav({
  //   menuWidth: 300,
  //   edge: 'right',
  //   closeOnClick: true
  // });
// );

//image JSON objects
var guacImage = {
  'background' : 'url(../images/guac.png))',
  background-size: contain;
  position: absolute;
  width: 10%;
  height: 20%;

}

// var status = false;
$('.avo').click(function(){
  $(this).css({'background', 'url(../images/guac.png)'}).hide(2000).css('display' , 'block');

});
//click to disappear
// function main(){
// $('.avo').click(function(e){
//   status = true;
//     e.preventDefault();
//     $(this).removeClass('avo').addClass('guacamole').queue(function(){
//       $(this).removeClass('guacamole').delay(2000).addClass('avo');
//     });
//   });
// }
//randomly generate
// function reload(){
//   if(status === true){
//     $('div').removeClass('disappear').addClass('avo');
//     }
// }
// main();

});
