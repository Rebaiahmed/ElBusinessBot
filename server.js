const express = require('express');
const morgan = require('morgan');
const path = require('path');
const  request = require('request');
const app = express();
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require('cors');
const crypto = require('crypto');
const shortid = require('shortid');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000;
//*************test apiai****************//
const apiai = require('apiai');
const appbot = apiai("id_of_your_project");
const localStorage = require('localStorage')
//****************************************//
//***********************//
// Setup logger


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'src')));
//********************************//
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//***********************************************//
//********************************************//

// Always return the main index.html, so react-router render the route in the client






//***********IMPORT THE MODELS*********************//
const Blog =  require('./server/Blog');
const User = require('./server/User');
var Linkedin = require('node-linkedin')('77lm0p8km5tqyc', 'bsf3JTy6sjU5dOXu', 'callback');
Linkedin.auth.setCallback('callback-url');





//***************connect to the database*************//

var dbConfig = require('./server/config/config');


mongoose.connect(dbConfig.url, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})




//*******************DEFINE OUR REST API********************//



/*
*****GET LIST OF BLOGS********

*/


app.get('/Blogs', function (req,res) {

  res.json('blogs')

})


/*
******UpVote Blog*************

*/


app.post('/Blog/upvote', function(req,res) {

  res.json('post')
})





app.get('/posts', function (req,res) {

  Blog.find({}, function(err, docs) {
      if (!err){
          res.json(docs)
          //process.exit();
      } else {throw err;}
  });




})

//**************CONFIG LINKEIDN auth


app.get('/oauth/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.auth.authorize(res, function () {
       console.log("ok ok ok");
    });
});

//****************SEND THE BLOGS*****************//














//**************************************//

app.post('/signin', function(req,res){


console.log("body" + JSON.stringify(req.body));
//*****GET THE DATA FROM THE RES************//
var email = req.body.email ;
var uid = req.body.uid ;
var displayName = req.body.displayName ;
var photoUrl = req.body.photoUrl ;
var phoneNumber = req.body.phoneNumber ;

User.findOne({'email': email}, function(err, result){
     if(err){
       console.log("err"+ err);
     }else{
     //********check the result********//
     console.log("result" + JSON.stringify(result));



var user = new User({
uid : uid,
email :"j2i@gmail.com",
displayName : displayName,
photoUrl : photoUrl,
phoneNumber : phoneNumber,
topics :[],
firstName :'',
lastName : ''
})

//***********save the user*********//

user.save(function (err,user) {
  if(err)
  {
    console.log("err" + err);
  }else{
    console.log("new user"+ user);
    res.json(user);
  }

})



     }
});

//res.json({"status":"200"})

})







//*************Real time functionality *******************//

var http = require('http').Server(app);
var io = require('socket.io')(http);

//**************LAUNCH IO CONNECT***************//

io.on("connection", socket => {
  console.log("New client connected" + socket)
//**************************************************************//
//socket.on("disconnect", () => console.log("Client disconnected"));
//**********************************************************//
socket.on('sendMessage', function(data) {
    console.log();
console.log("data sended");

const req = appbot.textRequest(data.What, {
       sessionId: '<unique session id>'
});

    req.on('response', function(response) {
        console.log("response" + JSON.stringify(response));
//*******send the response****************//
socket.emit('send:message',
{What:response.result.fulfillment.speech +' ',
Who : 1,When : new Date() ,
id :shortid.generate()
}
)

      })//****end of request on*/

      req.on('error', function(error) {
       console.log(error);
       });

     req.end();





 });//****end of socket.on


//**********listen to data question************//




//**********socket disconnect
 socket.on('disconnect', () => {
    console.log('user disconnected');
  });




});//*********end of io connect

//***************************//

























/*app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});*/


http.listen(9000, function(err){
  if(err){
    console.log("err" + err);
  }
  console.log('listening on *:3000');
});
