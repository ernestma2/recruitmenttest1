// For Backend
// Used to load express framework
var express = require('express');
// it is a middleware (A function that sends and recieves data) that helps to serve static files in public folder
const path = require('path');
// This is there to use express functions
var app = express();
//  This is there to allow us to use cookies
var cookieParser = require('cookie-parser');

const connectDB  = require('./db.js')

// import routes

// Authencation Routes
const authRouter = require('./routes/auth');


connectDB();


app.use('/auth',authRouter)    //localhost:8081/auth/register
app.use(cookieParser());
app.use(express.json());

//  This will help us to get data from index.html
app.use(express.static(path.join(__dirname, "public"), {
	index: "index.html"
}))

//  This is a server
var server = app.listen(8081, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log("App listening at http://%s:%s", host, port);
});
