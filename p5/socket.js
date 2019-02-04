
function Socket_io(player) {

	this.mainPlayer = player
	this.socket = io.connect('http://localhost:3000');
	this.socket.emit("new_user", { xPos: this.mainPlayer.xCoord, yPos:this.mainPlayer.yCoord} );

	// when there is a new user broadcast location to them
	this.socket.on("new_user", (data) => {
		this.socket.emit("initial_location", {xPos: this.mainPlayer.xCoord, yPos:this.mainPlayer.yCoord})
	})

	// display all of em
	this.socket.on("initial_location", (data) => {
		if (data["id"] != this.socket.id ) {
			alldata[data.id] = new Player( data.data.xPos,data.data.yPos,"green") ;
		}
	})

	this.update = function() {
		this.socket.emit("updated_location", {xVel: player.xVel, yVel: player.yVel})
	}

	this.socket.on("updated_location",(data) => {
		if (data["id"] != this.socket.id && Object.keys(alldata).includes(data.id)  ) {
			alldata[data.id].xVel = data.xVel;
			alldata[data.id].yVel = data.yVel;
		}
	})

}