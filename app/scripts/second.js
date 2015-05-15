'use strict';
$(function(){
var score = 0;
var gameTime = 20;
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
    score++;
    console.log(score);
    printScore();
    $('#sound1').get(0).play();
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
  // console.log(seconds);
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
function printScore(){
  $('#score').html('Score: ' + score);
}

function timer(){
  gameTime--;
  $('#timer').html('Time Left: ' + gameTime + ' sec');
  if(gameTime === 0){
    clearInterval(myTimer);
    console.log(0);
    $('#element_to_pop_up').bPopup({
      speed: 450,
      transition: 'slideIn',
      transitionClose: 'slideBack', //can be a string ('slow'/'fast') or int
      followSpeed: 1500, //can be a string ('slow'/'fast') or int
      modalColor: 'greenYellow',
      content: 'image',
      contentContainer: '.content',
      loadUrl: '../images/holy-guacamole.png'
    });

  };
}
//resets score and time and clears scoreboard
function resetGame (){
  gameTime = 0;
  score = 0;
  $('#score').html('Score: ' + score);
}


//Play Again button
function playAgain(){
var bPopup = $('#element_to_pop_up').bPopup();
$('#replay').click(function(){
  resetGame();
  console.log('reset');
  $('#element_to_pop_up').css('display', 'none');
  $('.b-modal __b-popup1__').css('display', 'none');
  bPopup.close();
});
}
// var countdownTimer = setInterval(gameTimer(), 1000);

// animateUpDown('#avo1');

//loop to continuosly dissappear avos
var showAvos = setInterval(randomShow, seconds);

var myTimer = setInterval(timer, 1000);



});






