var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");

var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require("cors");


mongoose.connect('mongodb://localhost/demo-db', { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
var app = express();

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));



app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var index = require('./routes/index');
app.use('/', index);

// app.post('/users',function(req,res){
//   console.log(req);
//   res.end("yes");
// });
module.exports = app;
