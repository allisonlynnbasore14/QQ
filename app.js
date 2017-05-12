


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

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', index.home);
console.log("Yes, I am here!")
app.listen(3000);

//app.listen(app.get('port'), function() {
  //console.log('Node app is running on port', app.get('port'));
//});




//ONE WAY TO WRITE IT

// var server = http.createServer(function(request,response){

// console.log("We got one!")
// response.write("hi")
// response.end()

// });


// server.listen(3000);


//ONE WAY TO WRITE IT

// var server = http.createServer(function(request,response){



// });


// server.listen()



// //ONE WAY TO WRITE 

// //ONE WAY TO WRITE IT

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Cook');



















//Server running at http://127.0.0.1:8081/


// function bar(callback){


//console.log("HELLO WORLD")

//var total = 0
//console.log(process.argv.length)
//for(i=2; i<process.argv.length;i++){
//	var n = Number(process.argv[i]);
//	total = total + n
//}

//console.log(total)


//NOTE. I AM NOT SURE WHAT IS HAPPENING HERE

// 	foo(function(err, data)){
// 		if(err){
// 			return callback(err)
// 				}
// 		var path = process.argv[2]
// 		var fil = process.argv[3]
// 		console.log(mymodule(path, fil,callback))
// 		callback(null, data)
		

// 	}

// }





//var fill = fs.readdir(path, callback)




