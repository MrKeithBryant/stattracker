//will need middleware, install first
//will need mustache file

const mustacheExpress = require('mustache-express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('./models/user');
const Active = require('./models/active');
mongoose.createConnection('mongodb://localhost:27017/activities');
const activities = require('./routes/activities');

//test responsiveness at 3000
//will need function to define addition of user activities
//need function to assign multiple values for each object / activity
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use('/api', activities);
app.get('/', function (req, res, next) {
  const user = new User({
    name: 'Jim',
    password: 'apples',
    activities: ['situps', 'pushups'],

    });

  user.activities.push('workout');
  res.json(user.toObject());
});

function login (name, pword) {
    (name && pword === true), res.send('./views/index.mustache');
  }

app.post('/', function (req, res, next) {
  const name = req.body.name;
  const pword = req.body.pword;
  const activity = req.body.activity;

});


app.listen(3000, function (){
  console.log(login());
});
