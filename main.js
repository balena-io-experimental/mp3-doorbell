var pins = require('rpi-gpio');
var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

var lastPlayedTime;
var files = [];

pins.on('change', notice);
pins.setup(13, pins.DIR_IN, pins.EDGE_RISING, log("pins setup"));
load('./music/' + process.env.LIBRARY + '/', log("files loaded"));

function notice(pin, state) {
	if(
		pin === 13
		&& state === true
		&& ! ( new Date().getTime() < lastPlayedTime + 7000 )
	) {
		lastPlayedTime = new Date().getTime();
		play();
	}
}

function play() {
	var filename = './music/' + process.env.LIBRARY + '/' + files[Math.floor(Math.random()*files.length)];
	fs.createReadStream(filename)
		.pipe(new lame.Decoder())
		.on('format', function(format){
			this.pipe(new Speaker(format));
		})
	;
}

function load(dir, callback) {
	fs.readdir(dir, function(err, result) {
		if(!err) {
			files = result;
			callback();
		}
	})
}

function log(str) {
	return console.log.bind(console, str)
}
