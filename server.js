const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const app = new express();
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local').Strategy;

var LABS = require('./labs.json');
const USER = require('./user.json')

passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username === USER["username"] && password === USER["password"]){
      return done(null, username);
    } else {
      return done("unauthorized access", false);
    }
  }
));

passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Creacion del link al directio de buildeo de Angular
var distDir = __dirname + "/dist/fisquiweb/";
app.use(express.static(distDir))

const auth = () => {
  return (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
      if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
        req.login(user, function(error) {
          if (error) return next(error);
          next();
        });
      })(req, res, next);
  }
}


app.post('/api/authenticate', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"user" : req.user});
});

const isLoggedIn = (req, res, next) => {
  console.log('session ', req.session);
  if(req.isAuthenticated()){
      //console.log('user ', req.session.passport.user)
      return next()
  }
  return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

app.get("*", (req, res) => {
  res.sendFile(distDir);
}); 

const updateLab = (res, updatedLab) => {


}

app.post("/api/labs/update", (req, res) => {
  if (req.body.lab != null) {
    const newLab = req.body.lab;
    const labIndex = LABS.findIndex(lab => lab.path === newLab.path);
    LABS[labIndex] = newLab;

    res.status(200).json({"statusCode": 200});
  } else{
    res.status(400).json({"statusCode": 400, "message" : "Lab not found"});
  }
});

app.post("/api/labs", (req, res) => {
  res.status(200).json({"statusCode": 200, "labs": LABS});
});

app.get("/settings", isLoggedIn,  (req, res) => {
  res.sendFile(distDir);
}); 

app.get('/getData', isLoggedIn, (req, res) => {
  res.json("data is")
})

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
  console.log("Loaded LABS: " + LABS.length);
});