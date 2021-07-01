//These are the require statements of the application..
const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
})

//Making connection ready for server..
//So that somebody can connect on this server on that connection..
io.on("connection", (socket) =>{
    console.log("What is socket", socket);
    console.log("Socket is active to be connected");

    //Once the connection is happen we can create seperate event for overself
    socket.on("chat", (payload) =>{
        console.log("what is payload", payload);

        //On the chat event we are emiting who ever listening this, we  will respond you back by chat event 
        //and throw your all payload that you send to me..
        io.emit("chat", payload);
    });
});

// app.listen(3000,  () =>{
//     console.log("server is active...");
// });

server.listen(3000, () => {
    console.log("server is listening at 3000...");
});