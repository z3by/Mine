const express = require('express');
const app = express();
const usersRouter = require('./server/router/users');
const mongoose = require('mongoose');
const db_config = require('./config/_config');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const path = require('path');


// connect to the mongodb server;
mongoose.connect(db_config.database);


// select the static folder
app.use(express.static(path.join(__dirname, '/dist/Mine/')));

// handle the main route;
app.get('/', (req, res) => {
	res.sendFile('index.html');
});



// body parser settings;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	extended: false, 
}));

// parse application/json
app.use(bodyParser.json());
 


//  log when the mongodb server is connected or not;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
	console.log('mongoose connected');
});




// use the external router;
app.use('/users', usersRouter);


// define the server port and connect to it;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`mine server is connected on port ${ PORT }`);
});
