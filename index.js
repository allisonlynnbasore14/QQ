
var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// Configure Stormpath.
app.use(stormpath.init(app, {
  application: {
    href: process.env.STORMPATH_APPLICATION_HREF
  },
  website: true,
  web: {
    login: {
      nextUri: '/dashboard'
    }
  }
}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('templates/Welcome');
    var user = req.param('firstname');
    res.render('templates/Profile',{ firstname:firstname })
});

app.get('/profile', function(request, response) {
  res.render('templates/Profile',{ firstname:"Allison" })
});

app.get('/Congrats', function(request, response) {
  response.render('templates/Congrats');
});


app.get('/TryAgain', function(request, response) {
  response.render('templates/TryAgain');
});


app.get('/DRules', function(request, response) {
  response.render('templates/DRules');
});

app.get('/PrimeNumbers', function(request, response) {
  response.render('templates/DRules');
});

app.get('/Teacher', function(request, response) {
  response.render('templates/TeacherPage');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



