

// Import required modules.
var express = require('express');
var stormpath = require('express-stormpath');
 
// Initialize our Express app.
var app = express();
 
// Configure Stormpath.
app.use(stormpath.init(app, {
  application: {
    href: process.env.STORMPATH_APPLICATION_HREF
  },
  website: true,
  web: {
    login: {
      nextUri: '/profile'
    }
  }
}));
 
 app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Generate a simple home page.
app.get('/home', function(request, response) {
  response.send("Hey there! Thanks for visting the site! Be sure to <a href='/login'>login</a>!");
});
 
// Generate a simple dashboard page.
app.get('/profile', stormpath.loginRequired, function(request, response) {
  response.render('templates/Congrats');
  response.send('Hi: ' + request.user.email + '. Logout <form action="/logout" method="POST"><button type="submit">Logout</button></form>');
});
 


app.set('port', (process.env.PORT || 5000));



app.get('/', function(request, response) {
  response.render('templates/Welcome');
    var user = request.param('firstname');
    response.render('templates/Profile',{ firstname:firstname })
});

// app.get('/profile', function(request, response) {
//   //res.render('templates/Profile',{ firstname:"Allison" })
// });

// app.get('/Congrats', function(request, response) {
//   response.render('templates/Congrats');
// });


app.get('/TryAgain', function(request, response) {
  response.render('templates/TryAgain');
});

app.get('/DRules', function(request, response) {
  response.render('templates/DRules');
});

app.get('/DPoem', function(request, response) {
  response.render('templates/DPoem');
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



