'use strict';

$(function(){
var score = 0;
var runTime = 30;
var gameTime = runTime;
var userInput;
var myTimer;
var easySeconds;
var mediumSeconds;
var fastSeconds;
var showAvos;
var tacoSeconds = 18;
var highScores = [];
var arrayHTML = [];
 $('.button-collapse').sideNav();

//handles the dissapearnce
  function disappear() {
    $('.guacamole').removeClass('guacamole').addClass('disappear');
    $('.avo').removeClass('avo').addClass('disappear');
  }
  disappear();
//handles the reappearnace
  function reappear2(){
  $('div').each(function(){
    if($(this).hasClass('disappear')){
      $(this).addClass('avo').removeClass('disappear');
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
    // console.log(score);
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
  easySeconds = Math.random() * 3000;
  mediumSeconds = Math.random() * 50;
  fastSeconds = Math.random() * 0.0001;
  // console.log(seconds);
}

//Animate avos up and down
function randomShow(){
  randomSeconds();
  $('#avo1').delay(easySeconds).slideToggle('fast');
  randomSeconds();
  $('#avo2').delay(easySeconds).slideToggle('fast');
  randomSeconds();
  $('#avo3').delay(easySeconds).slideToggle('fast');
  randomSeconds();
  $('#avo4').delay(easySeconds).slideToggle('fast');
  randomSeconds();
  $('#avo5').delay(easySeconds).slideToggle('fast');
  randomSeconds();
  $('#avo6').delay(easySeconds).slideToggle('fast');
}
function printScore(){
  $('#score').html('Score: ' + score);
}

function timer(){
  gameTime--;
  // console.log(gameTime);
  $('#timer').html('Time Left: ' + gameTime + ' sec');
  if(gameTime === 0){
    clearInterval(myTimer);
    popupEndGame();
    setHighScore();
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
      followSpeed: 1500
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
// Difficulty button
$('#easy').click(function(){
  randomSeconds();
  userInput = easySeconds;
  console.log(easySeconds);
});
$('#medium').click(function(){
  randomSeconds();
  userInput = mediumSeconds;
  console.log(mediumSeconds);
});
$('#fast').click(function(){
  randomSeconds();
  userInput = fastSeconds;
  console.log(fastSeconds);
});


//loop to continuosly dissappear avos

function startShow(){
    showAvos = setInterval(randomShow, userInput);
}
//High scores function. empty array is defined at top!


function setHighScore(){
  highScores.push(score);
  for(var i = 0; i < highScores.length; i ++){
   // $('.card-content').html(highScores[i] + '\n');
   arrayHTML.push('<span>' + highScores[i] + '</span><br>');
   $('.card-content').html(arrayHTML.join('<br>'));
   console.log(arrayHTML);
  }
}

//Add flying tacos

function justAddTacos(){
  $('.hideTaco').addClass('taco');
  $('.taco').removeClass('hideTaco');
console.log('tacos');
}


function tacoTimer(){
  tacoSeconds --;
  console.log(tacoSeconds);
}


function moveTacos(){
  justAddTacos();
$( '.taco' ).animate({ 'left': 700 }, 18000 );
if(tacoSeconds === 0) {
   $('.taco').addClass('hideTaco');
   $('.hideTaco').removeClass('taco');
   console.log('hid taco');
  }
}
function startGame(){
  startShow(userInput);
  myTimer = setInterval(timer, 1000);
  reappear2();
  moveTacos();
  tacoTimer();
  setInterval(tacoSeconds, 1000);
}

// function hideTacos(){

// }




});






