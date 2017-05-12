var fs = require('fs')
var mymodule = require('./mymodule.js')
var http = require('http')
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var express = require('express');
var index = require('./routes/index');
var app = express();

 app.set('port', (process.env.PORT || 5000));

// app.use(express.satic(__dirname + '/public'));

// // views is directory for all template files
// app.set('views2', __dirname + '/views2');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('templates/Welcome');
//     var user = req.param('firstname');
//     res.render('templates/Profile',{ firstname:firstname })
// });

// app.get('/profile', function(request, response) {
//   res.render('templates/Profile',{ firstname:"Allison" })
// });

// app.get('/Congrats', function(request, response) {
//   response.render('templates/Congrats');
// });


// app.get('/TryAgain', function(request, response) {
//   response.render('templates/TryAgain');
// });


// app.get('/DRules', function(request, response) {
//   response.render('templates/DRules');
// });

// app.get('/Teacher', function(request, response) {
//   response.render('templates/TeacherPage');
// });



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', index.home);
console.log("Yes, I am here here!")
//app.listen(3000);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



