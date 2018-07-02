const express = require('express');
const app = express();
const path = require('path');
const router = require('../server/router/Router');
const mongoose = require('mongoose');
const db_config = require('../config/_config');
const db = mongoose.connection;

// select the statics folder;
app.use(express.static(path.join(__dirname, '../dist/Mine')));


// // handle the main route;
// app.get('/', (req, res) => {
// 	res.sendFile('index.html');
// });

app.get('*', (req, res) => {
	res.sendFile('index.html');
});

// connect to the mongodb server;
mongoose.connect(db_config.database);


//  log when the mongodb server is connected or not;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
	console.log('mongoose connected');
});

// use the external router;
app.use(router);


// define the server port and connect to it;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`mine server is connected on port ${ PORT }`);
});
