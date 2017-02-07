nw.require("nwjs-j5-fix").fix();

var five = require("johnny-five");
var board = new five.Board({port: "COM6"});//the port can be found by connecting the arduino and looking in the arduino ide
	

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});



