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
	drawText();
	player.display();
	for (const key of Object.keys(alldata)){
		alldata[key].display();
	}
}

function drawText() {
	textSize(30);
  	textAlign(CENTER, CENTER);
  	fill(0);
  	text('Squares.io', windowWidth/2, 80);
  	textSize(17);
  	text('A simple multiplayer game using socket.io + p5.js + node.js by Andre Assadi', windowWidth/2, 130);
}

function keyPressed() {
	player.move(keyCode);
	socket.updateLocation();
}

function keyReleased() {
	player.stop(keyCode);
	socket.updateLocation();
}







