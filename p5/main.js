// Main 
var background;
var player;
var socket;

// GLOBAL 
alldata = {};

function setup() {
	createCanvas(windowWidth,windowHeight);
	player = new Player(random(0,windowWidth),random(0,windowHeight),"red");
	socket = new Socket_io(player);
	background = new Background();
}

function draw() {
	clear();
	background.display();
	player.display();
	for (const key of Object.keys(alldata)){
		alldata[key].display();
	}
	socket.update();
}

function keyPressed() {
	player.move(keyCode);
}

function keyReleased() {
	player.stop(keyCode);
}







