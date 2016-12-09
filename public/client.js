$(document).ready(function() {
  console.log("jquery is here");
//start postData
var postData = function (){
//start player object
var playerObject = {
  player1:$("#player1").val(),
  player2:$("#player2").val(),
  player3:$("#player3").val(),
  player4:$("#player4").val()
};//end player object
//start ajax call
$.ajax({
  type: 'POST',
  url: '/sendGuess',
  data: playerObject,
  success: function(response){
    console.log('back from post call:', response);
  },
  error: function (){
    console.log('error with ajax call...');
  }
});
//end ajax call
};// end post data function
var getData = function(){
  console.log("in get");
  $.ajax({
    type: "GET",
    url: "/testGet",
    // data:?,
    success: function(response){
      console.log('back from post call:', response);
      console.log('from response length:', response.length);
    $("#outputDiv").html("Total guesses:" + response.length);

function lastGuess(){
var maximumNumber = 100;
for (var i = 0; i < response.length; i++){
// if else begin
 if (response[i].player1 < maximumNumber) {
$("#lastGuess1").html("Player 1 try again last guess was low");
}
else if (response[i].player1 > maximumNumber) {
$("#lastGuess1").html("Player 1 try again last guess was high");
}
  else if (response[i].player1 === maximumNumber){
  alert("Perfect guess, you win !!!");
  ("#lastGuess1").html("perfect guess, you win !!!");
}
if (response[i].player2 < maximumNumber) {
$("#lastGuess2").html("Player 2 try again last guess was low");
}
else if (response[i].player2 > maximumNumber) {
$("#lastGuess2").html("Player 2 try again last guess was high");
}
if (response[i].player3 < maximumNumber) {
$("#lastGuess3").html("Player 3 try again last guess was low");
}
else if (response[i].player3 > maximumNumber) {
$("#lastGuess3").html("Player 3 try again last guess was high");
}
if (response[i].player4 < maximumNumber) {
$("#lastGuess4").html("Player 4 try again last guess was low");
}
else if (response[i].player4 > maximumNumber) {
$("#lastGuess4").html("Plaer 4 try again last guess was high");
}
  $("#player1").val("");
  $("#player2").val("");
  $("#player3").val("");
  $("#player4").val("");
//if else end
}//end for
}//end guess
lastGuess();
  },
    error: function (){
      console.log('error with ajax call...');
  }
});//end ajax call
};//end get data function
//start submit data
$('#submitData').on('click', function (){
console.log("in submit data click");
postData();
getData();
});//end submit data
});//end doc ready


//   //start lastGuess for loop
//   function lastGuess(){for (var i = 0; i < response.length; i++) {
//   $("#lastGuess1").html("Player 1 last guess:" + response[i].player1);
//   $("#lastGuess2").html("Player 2 last guess:" + response[i].player2);
//   $("#lastGuess3").html("Player 3 last guess:" + response[i].player3);
//   $("#lastGuess4").html("Player 4 last guess:" + response[i].player4);
//   $("#player1").val("");
//   $("#player2").val("");
//   $("#player3").val("");
//   $("#player4").val("");
//    }//end lastGuess for loop
