(function(){
  'use strict';
  console.log("SEAF Fired");

  var track1 = document.querySelector("#track1");
  var track2 = document.querySelector("#track2");
  var track3 = document.querySelector("#track3");

  track1.muted = true;
  track2.muted = true;
  track3.muted = true;

  var playAll = document.querySelector("#playAll");
  var one = document.querySelector("#one");
  var two = document.querySelector("#two");
  var three = document.querySelector("#three");

  var onePlaying = false;
  var twoPlaying = false;
  var threePlaying = false;



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

  function track1Unmute() {
      if(track1.muted===false) {
        track1.muted = true;
      }else if(track1.muted===true){
        track1.muted = false;
      }
      if(!track1.muted || !track2.muted || !track3.muted) {
        startAll();
      }else if(track1.muted && track2.muted && track3.muted) {
        stopAll();
      }
  }
  function track2Unmute() {
    if(track2.muted===false) {
      track2.muted = true;
    }else if(track2.muted===true){
      track2.muted = false;
    }
    if(!track1.muted || !track2.muted || !track3.muted) {
      startAll();
    }else if(track1.muted && track2.muted && track3.muted) {
      stopAll();
    }
  }
  function track3Unmute() {
    if(track3.muted===false) {
      track3.muted = true;
    }else if(track3.muted===true){
      track3.muted = false;
    }
    if(!track1.muted || !track2.muted || !track3.muted) {
      startAll();
    }else if(track1.muted && track2.muted && track3.muted) {
      stopAll();
    }
  }

playAll.addEventListener("click", startAll, false);
one.addEventListener("click", track1Unmute, false);
two.addEventListener("click", track2Unmute, false);
three.addEventListener("click", track3Unmute, false);


})();
