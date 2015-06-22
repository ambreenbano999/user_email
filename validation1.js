var express = require('express');
var bodyParser = require('body-parser');

var validator = require('validator');
var dialog = require('dialog');
 
var app = express();
app.use(bodyParser());

app.get('/', function(req, res){

  var html = '<form action="/" method="post">' +
               'Enter username:' +
               '<input type="text" name="userName"/>'
               +
               '<br>' +
               'Enter Email:' +
               '<input type="text" name="emailId"/>'+
               '<br>'+
               '<button type="submit">Submit</button>' +
            '</form>';
        
  res.send(html);
});

app.post('/', function(req, res){

  var userName = req.body.userName;
  var emailId = req.body.emailId;
  
  var html = 'Hello: ' + userName + ' and your email is '+ emailId +
              '.<br>' +
             '<a href="/">Try again.</a>';

if(validator.isEmail(emailId)&&(!validator.isNull(userName)))
{
console.log('hi');
res.send(html);


//connection

var mysql = require('mysql');
var HOST = 'localhost';
var PORT = 8083;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'amber12345';
var DATABASE = 'abcd';
var TABLE = 'table1';


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'amber12345',
  database : 'abcd',
  PORT : 8083

  
});

connection.connect();

connection.query('USE abcd');


var dataQuery="INSERT IGNORE INTO table1 (Username,Email) VALUES ('"+userName+"','"+emailId+"')";


 connection.query( dataQuery, function(err, rows){
    if(err) {
      throw err;
    }else{
      console.log( rows );
    }
  });



connection.end();
}//validation if end
else
{

dialog.info('Please enter valid username and email id');

}


});//post end


/////////////////////////////////////////

app.listen(8083);


