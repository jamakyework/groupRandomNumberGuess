var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded ({extended: false});
var port = process.env.PORT || 8080;

var playerGuessArray = [];
var randomNumbersArray = [];
var answerArray = [];


app.listen (port, function (req,res){
  console.log( 'server is listening on', port);
});//end spin up server

//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//send info back
app.get('/testGet', function(req, res){
  console.log('base url hit');
  res.send(answerArray);
});//send info back

app.post('/sendMax', urlEncodedParser, function ( req, res){
  console.log('send guess url hit', req.body);
  var num = req.body;
  var maxNumValue = num.maxNumber;
  var randomNumber = Math.floor(Math.random() * maxNumValue) + 1
  console.log("random number is", randomNumber);
  randomNumbersArray.push(randomNumber);

  // maxNumberArray.push(maxNumber);
  // console.log("max number array value is", maxNumberArray[maxNumberArray.length - 1].maxNumber);


});//end post

app.post('/sendGuess', urlEncodedParser, function ( req, res){
  console.log('send guess url hit', req.body);
  var playerGuess = req.body;
  playerGuessArray.push(playerGuess);
  console.log("player 1 value!!!!", playerGuessArray[playerGuessArray.length - 1].player1);
  console.log("This is the number of guesses?:",playerGuessArray.length);
  isNumCorrect(playerGuessArray);

});//end post


//static folder
app.use( express.static('public'));

function isNumCorrect (array){
  player1 = array[array.length - 1].player1;
  player2 = array[array.length - 1].player2;
  player3 = array[array.length - 1].player3;
  player4 = array[array.length - 1].player4;

  var randomNum = randomNumbersArray[randomNumbersArray.length - 1]
  var player1answer = '';
  var player2answer = '';
  var player3answer = '';
  var player4answer = '';

  if (player1 > randomNum){
    player1answer = "High";
  } else if (player1 < randomNum){
    player1answer = "Low";
  } else {
    player1answer = "Player 1 is correct!";
  }

  if (player2 > randomNum){
    player2answer = "High";
  } else if (player2 < randomNum){
    player2answer = "Low";
  } else {
    player2answer = "Player 2 is correct!";
  }

  if (player3 > randomNum){
    player3answer = "High";
  } else if (player3 < randomNum){
    player3answer = "Low";
  } else {
    player3answer = "Player 3 is correct!";
  }

  if (player4 > randomNum){
    player4answer = "High";
  } else if (player4 < randomNum){
    player4answer = "Low";
  } else {
    player4answer = "Player 4 is correct!";
  }

  var objectToReturn = {
    player1: player1answer,
    player2: player2answer,
    player3: player3answer,
    player4: player4answer
  };

  answerArray.push(objectToReturn);

  console.log("you are looking at the answer array:", answerArray);

};//end is num correct function
