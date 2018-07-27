const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db_config = require('./config/_config');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');



// routers
const indexRouter = require('./server/routes/index');
const usersRouter = require('./server/routes/users');
const porfileRouter = require('./server/routes/profile');
const postsRouter = require('./server/routes/posts');


// connect to the mongodb server;
mongoose.connect(db_config.database);


// initialize passport;
app.use(passport.initialize());
// config passport;
require('./config/passport')(passport);


// body parser settings;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	extended: false, 
}));

// parse application/json
app.use(bodyParser.json());
 

// select the static folder
app.use(express.static(path.join(__dirname, '/dist/Mine/')));

// the unprotected routes;
app.use('/', indexRouter);
app.use('/users', usersRouter);


// use the passport jwt authentication
app.use(passport.authenticate('jwt', {session: false}));


// the protected routers;
app.use('/profile', porfileRouter);
app.use('/posts', postsRouter);




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
