// Andre Assadi 
// p5 IO Game
// File: server.js


const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('p5'))


app.get("/", (req,res) => {
	res.render("game")
})

const port = process.env.PORT || 3000
var server = app.listen(3000)
const io = require('socket.io')(server)

// listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')
	socket.emit('userid', { id : socket.id  })

	socket.on('new_user',(data) => {
		io.sockets.emit('new_user',{id:socket.id, data:data})
	})

	// once disconnected
	socket.on("disconnect", (data) => {
		console.log(socket.id)
		io.sockets.emit("broadcast_disconnect",{id: socket.id });
	});

	socket.on('initial_location',(data) => {
		io.sockets.emit('initial_location',{id:socket.id, data:data})
	})

	socket.on('updated_location',(data) => {
		io.sockets.emit('updated_location',{id: socket.id,xVel: data.xVel, yVel: data.yVel})
	})
})
