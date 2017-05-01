
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('templates/Welcome');
});

app.get('/cool', function(request, response) {
  response.render('templates/Profile');
});

app.get('/cool', function(request, response) {
  response.render('templates/Congrats');
});


app.get('/cool', function(request, response) {
  response.render('templates/TryAgain');
});


app.get('/cool', function(request, response) {
  response.render('templates/DRules');
});

app.get('/cool', function(request, response) {
  response.render('templates/TeacherPage');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
