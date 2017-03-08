nw.require("nwjs-j5-fix").fix();
var five = require("johnny-five");
var board1 = new five.Board({port: "COM3"});
var board2 = new five.Board({port: "COM4"});

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

  ["down", "up", "hold"].forEach(function(type) {

    nunchuk1.on(type, function(event){
      console.log("nunchuck1");
      console.log(event.target.which);

        if(event.target.isDown) {
          track1.muted = false;

          TweenMax.to(info[0], 2, {height:600});
          TweenMax.to(text[0], 20, {top:-600, delay:2});

        }else if(event.target.isUp){
          track1.muted = true;

          TweenMax.to(info[0], 2, {height:20});
    			TweenMax.to(text[0], 2, {top:0,delay:2});

        }

        if(!track1.muted || !track2.muted || !track3.muted) {
          startAll();
        }else if(track1.muted && track2.muted && track3.muted) {
          stopAll();
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

  ["down", "up", "hold"].forEach(function(type) {

    nunchuk2.on(type, function(event){
      console.log("nunchuck2");
      console.log(event.target.which);

        if(event.target.isDown) {
          track2.muted = false;

          TweenMax.to(info[1], 2, {height:600});
          TweenMax.to(text[1], 20, {top:-600, delay:2});

        }else if(event.target.isUp){
          track2.muted = true;

          TweenMax.to(info[1], 2, {height:20});
    			TweenMax.to(text[1], 2, {top:0,delay:2});

        }

        if(!track1.muted || !track2.muted || !track3.muted) {
          startAll();
        }else if(track1.muted && track2.muted && track3.muted) {
          stopAll();
        }

    });
  });
});
