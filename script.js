nw.require("nwjs-j5-fix").fix();
var five = require("johnny-five");
var board1 = new five.Board({port: "COM3"});
var board2 = new five.Board({port: "COM4"});
var board3 = new five.Board({port: "COM5"});

var info = document.querySelectorAll(".info");
var text = document.querySelectorAll(".text");

//play and pause functions
function startAll() {
    track1.play();
    track2.play();
    track3.play();
}

function stopAll() {
  track1.pause();
  track2.pause();
  track3.pause();
}

var track1 = document.querySelector("#track1");
var track2 = document.querySelector("#track2");
var track3 = document.querySelector("#track3");

track1.muted = true;
track2.muted = true;
track3.muted = true;

var onePlaying = false;
var twoPlaying = false;
var threePlaying = false;

board1.on("ready", function() {

  //sensors
  new five.Pin({pin:"A4", board:board1}).low();//D
  new five.Pin({pin:"A5", board:board1}).high();//C


  // Create a new `nunchuk` hardware instance.
  var  nunchuk1 = new five.Wii.Nunchuk({
    freq: 50,
    board: board1
  });

  var timeoutButtons;

  ["down", "up", "hold"].forEach(function(type) {

    nunchuk1.on(type, function(event){
      clearTimeout(timeoutButtons);
      timeoutButtons = setTimeout(function(){
        console.log('click that button');
        track1.muted = true;

        TweenMax.to(info[0], 2, {height:0});
        TweenMax.to(text[0], 2, {top:0,delay:2});

        if(track1.muted && track2.muted && track3.muted) {
          stopAll();
        }
      }, 1000);
        track1.muted = false;

        TweenMax.to(info[0], 2, {height:400});
        TweenMax.to(text[0], 50, {top:-1000, delay:2, ease: Linear.easeNone});

        if(!track1.muted || !track2.muted || !track3.muted) {
          startAll();
        }
    });
  });
});

board2.on("ready", function() {

  //sensors
  new five.Pin({pin:"A4", board:board2}).low();//D
  new five.Pin({pin:"A5", board:board2}).high();//C


  // Create a new `nunchuk` hardware instance.
  var  nunchuk2 = new five.Wii.Nunchuk({
    freq: 50,
    board: board2
  });
  var timeoutJoystick;

  nunchuk2.joystick.on("change", function(event){
    clearTimeout(timeoutJoystick);
    timeoutJoystick = setTimeout(function(){
      console.log('click that button');
      track2.muted = true;

      TweenMax.to(info[1], 2, {height:0});
      TweenMax.to(text[1], 2, {top:0,delay:2});

      if(track1.muted && track2.muted && track3.muted) {
        stopAll();
      }
    }, 1000);
      track2.muted = false;

      TweenMax.to(info[1], 2, {height:400});
      TweenMax.to(text[1], 50, {top:-1000, delay:2, ease: Linear.easeNone});

      if(!track1.muted || !track2.muted || !track3.muted) {
        startAll();
      }
  });
});


board3.on("ready", function() {

  //sensors
  new five.Pin({pin:"A4", board:board3}).low();//D
  new five.Pin({pin:"A5", board:board3}).high();//C


  // Create a new `nunchuk` hardware instance.
  var  nunchuk3 = new five.Wii.Nunchuk({
    freq: 50,
    board: board3
  });
  var timeoutAcc;

  nunchuk3.accelerometer.on("change", function(event){
    clearTimeout(timeoutAcc);
    timeoutAcc = setTimeout(function(){
      console.log('click that button');
      track3.muted = true;

      TweenMax.to(info[2], 2, {height:0});
      TweenMax.to(text[2], 2, {top:0,delay:2});

      if(track1.muted && track2.muted && track3.muted) {
        stopAll();
      }
    }, 1000);
      track3.muted = false;

      TweenMax.to(info[2], 2, {height:400});
      TweenMax.to(text[2], 50, {top:-1000, delay:2, ease: Linear.easeNone});

      if(!track1.muted || !track2.muted || !track3.muted) {
        startAll();
      }
  });


});

var congrats = document.querySelector("#congrats");
var clap = document.querySelector("#clap");

track1.onended = function () {
  TweenMax.to(congrats, 1, {top:"-500px"});
  TweenMax.to(congrats, 1, {top:"0px", delay:6});
  clap.play();
  // alert("song ended");
  stopAll();
  track1.currentTime = 0;
  track2.currentTime = 0;
  track3.currentTime = 0;
  track1.muted = true;
  track2.muted = true;
  track3.muted = true;
}
