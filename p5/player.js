// Player Class
function Player(x,y,color) {

	this.color = color;
	this.xCoord = x; 
	this.yCoord = y; 
	this.xVel = 0;
	this.yVel = 0;
	this.speed = 5;

	this.display = function() {
		fill(this.color);
		this.updatePosition();
  		rect(this.xCoord, this.yCoord, 40, 40);
	}

	this.updatePosition = function() {
		this.xCoord += this.xVel;
		this.yCoord += this.yVel;
	}

	this.move = function(keyCode) {
	  if (keyCode === LEFT_ARROW) {
	  	this.xVel = -this.speed;
	  } else if (keyCode === RIGHT_ARROW) {
	  	this.xVel = this.speed;
	  }
	  else if (keyCode == UP_ARROW) {
	  	this.yVel = -this.speed;
	  }
	  else if (keyCode == DOWN_ARROW) {
	  	this.yVel = this.speed;
	  }
	}

	this.stop = function(keyCode) {
	  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
	  	this.xVel = 0;
	  }
	  else if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
	  	this.yVel = 0;
	  }

	}

}