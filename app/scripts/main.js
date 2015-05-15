'use strict';
$(function(){
var score = 0;
var runTime = 30;
var gameTime = runTime;

var myTimer;
var seconds;
var showAvos;
 $('.button-collapse').sideNav();
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

//Random Second generator

function randomSeconds() {
  seconds = Math.random() * 4000;
  // console.log(seconds);
}

//Animate avos up and down
function randomShow(){
  randomSeconds();
  $('#avo1').delay(seconds).slideToggle('fast');
  randomSeconds();
  $('#avo2').delay(seconds).slideToggle('fast');
  randomSeconds();
  $('#avo3').delay(seconds).slideToggle('fast');
  randomSeconds();
  $('#avo4').delay(seconds).slideToggle('fast');
  randomSeconds();
  $('#avo5').delay(seconds).slideToggle('fast');
  randomSeconds();
  $('#avo6').delay(seconds).slideToggle('fast');
}
function printScore(){
  $('#score').html('Score: ' + score);
  console.log(score);
}

function timer(){
  gameTime--;
  $('#timer').html('Time Left: ' + gameTime + ' sec');
  if(gameTime === 0){
    clearInterval(myTimer);
    console.log(gameTime);
    popupEndGame();
  }
}
//resets score and time and clears scoreboard
function resetGame (){
  gameTime = runTime;
  score = 0;
  $('#timer').html('Time Left: ' + gameTime + ' sec');
  $('#score').html('Score: ' + score);
  myTimer = setInterval(timer, 1000);
}


//Play Again button
$('#replay').click(function(){
    var bPopup = $('#element_to_pop_up').bPopup();
    resetGame();
    console.log('playagain button');
    $('#element_to_pop_up').css('display', 'none');
    $('.b-modal __b-popup1__').css('display', 'none');
    bPopup.close();
});

//Menu/Popup elements
function popupEndGame(){
$('#element_to_pop_up').bPopup({
      speed: 450,
      transition: 'slideIn',
      transitionClose: 'slideBack', //can be a string ('slow'/'fast') or int
      followSpeed: 1500, //can be a string ('slow'/'fast') or int
      modalColor: 'greenYellow',
    });
}
$('#startbutton').click(function(){
  if(gameTime === runTime) {
  startGame();
  console.log('start clicked');
  $('#startSound').get(0).play();
  $('#mariachi').get(0).play();
  } else{
    console.log('working');
  }
});

//loop to continuosly dissappear avos

function startShow(){
    showAvos = setInterval(randomShow, seconds);
}
function startGame(){
  startShow();
  myTimer = setInterval(timer, 1000);
}





});






