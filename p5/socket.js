
function Socket_io(player) {

	this.mainPlayer = player
	this.socketId;
	this.socket = io.connect('http://localhost:3000', {'forceNew':true});

	// once connected
	this.socket.on("connect",(data) => {
		this.socket.emit("new_user", { xPos: this.mainPlayer.xCoord, yPos:this.mainPlayer.yCoord, color: this.mainPlayer.color} );
		this.socketId = this.socket.id;
	});

	// when there is a new user broadcast location to them
	this.socket.on("new_user", (data) => {
		this.socket.emit("initial_location", {xPos: this.mainPlayer.xCoord, yPos:this.mainPlayer.yCoord, color: this.mainPlayer.color});
	});

	// display all of em
	this.socket.on("initial_location", (data) => {
		if (data["id"] == this.socketId ) {
			console.log("This Id: " + data.id);
		}

		if (data["id"] != this.socketId ) {
			alldata[data.id] = new Player( data.data.xPos,data.data.yPos,data.data.color) ;
		}
	});

	// update their location
	this.socket.on("updated_location",(data) => {
		if (data["id"] != this.socketId && Object.keys(alldata).includes(data.id)  ) {
			alldata[data.id].xVel = data.xVel;
			alldata[data.id].yVel = data.yVel;
		}
	});

	// act if one is removed
	this.socket.on("broadcast_disconnect",(data) => {
		console.log("worked");
		console.log("Remove ID :" + data.id);
		delete alldata[data.id];
	})


	this.updateLocation = function() {
		this.socket.emit("updated_location", {xVel: player.xVel, yVel: player.yVel})
	}

}