// Main 
var background;
var player;
var socket;

// GLOBAL 
alldata = {};

function setup() {
	createCanvas(windowWidth,windowHeight);
	player = new Player(random(0,windowWidth),random(0,windowHeight),getRandomColor());
	socket = new Socket_io(player);
	background = new Background();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function draw() {
	clear();
	background.display();
	player.display();
	for (const key of Object.keys(alldata)){
		alldata[key].display();
	}
}

function keyPressed() {
	player.move(keyCode);
	socket.updateLocation();
}

function keyReleased() {
	player.stop(keyCode);
	socket.updateLocation();
}







