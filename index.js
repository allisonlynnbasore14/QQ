
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('templates/Welcome');
    var user = req.param('firstname');
    console.log(user);
});

app.get('/profile', function(request, response) {
  response.render('templates/Profile',{ firstname:"Allison" });
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

app.get('/Teacher', function(request, response) {
  response.render('templates/TeacherPage');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
