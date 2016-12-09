var maxNumber = $('#selectMaxNumber').val();
var totalGuesses = 0;
$(document).ready(function() {
  console.log("jquery is here");

var postMaxNumber = function () {

  var maxNumber = {
    maxNumber: $('#selectMaxNumber').val()
  };

$.ajax({
    type: 'POST',
    url: '/sendMax',
    data: maxNumber,
    success: function(response){
      console.log('back from post call:', response);
    },
    error: function (){
      console.log('error with ajax call...');
    }
  });//end ajax call
  };// end post data function

var postData = function () {

var playerObject = {
  player1:$("#player1").val(),
  player2:$("#player2").val(),
  player3:$("#player3").val(),
  player4:$("#player4").val()
};//end player object

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
});//end ajax call
};// end post data function

var getData = function(){
  console.log("in get");
  $.ajax({
    type: "GET",
    url: "/testGet",
    success: function(response){
      console.log('back from post call:', response);
      // console.log('from response lenght:', response.length);

    var player1 = $("#lastGuess1");
    var player2 = $("#lastGuess2");
    var player3 = $("#lastGuess3");
    var player4 = $("#lastGuess4");

    var player1Response = response[response.length - 1].player1
    var player2Response = response[response.length - 1].player2
    var player3Response = response[response.length - 1].player3
    var player4Response = response[response.length - 1].player4
    console.log(player1.response);
    if (player1Response === "Player 1 is correct!"){
      alert("Congrats! You win, Player 1!")
    } else if (player2Response === "Player 2 is correct!") {
      alert("Congrats! You win, Player 2!")
    } else if (player3Response === "Player 3 is correct!") {
      alert("Congrats! You win, Player 3!")
    } else if (player4Response === "Player 4 is correct!") {
      alert("Congrats! You win, Player 4!")
    } else {
      player1.html("<p>" + player1Response + "</p>" );
      player2.html("<p>" + player2Response + "</p>" );
      player3.html("<p>" + player3Response + "</p>" );
      player4.html("<p>" + player4Response + "</p>" );
    };

    console.log(player1Response);
  },
    error: function (){
      console.log('error with ajax call...');
    }
  });//end ajax call
};// end get data function

$('#submitData').on('click', function (){
  console.log("in submit data click");
  postData();
  getData();

  $("#player1").val("");
  $("#player2").val("");
  $("#player3").val("");
  $("#player4").val("");

  totalGuesses++;
  $("#outputDiv").html("Total guesses:" + totalGuesses);
});//end submit data

$('#submitMaxNumber').on('click', function (){
  postMaxNumber();

});//end submit max number function

$("#startGame").on('click', function (){
  $("#inputFields").show();
  $("#submitData").show();
  $("#secondHeading").show();
  $("#selectMaxNumber").hide();
  $("#abandonGameButton").show();
  $("#startGame").hide();
  $("#firstHeading").hide();
  $("#thirdHeading").hide();
  $("#submitMaxNumber").hide();
  showMaxNumber();
});//end start game on click

$("#inputFields").hide();
$("#submitData").hide();
$("#secondHeading").hide();
$("#abandonGameButton").hide();

$("#abandonGameButton").on('click', function (){
  $("#inputFields").hide();
  $("#submitData").hide();
  $("#secondHeading").hide();
  $("#selectMaxNumber").show();
  $("#abandonGameButton").hide();
  $("#startGame").show();
  $("#firstHeading").show();
  $("#thirdHeading").show();
  $("#submitMaxNumber").show();
  totalGuesses = 0;
  $("#outputDiv").html("");
  $("#lastGuess1").html("");
  $("#lastGuess2").html("");
  $("#lastGuess3").html("");
  $("#lastGuess4").html("");


  //showMaxNumber();
});//end abandonGameButton

var showMaxNumber = function (){
  var maxNumber = $('#selectMaxNumber').val();
  var maxNumberPlace = $('#secondHeading')
  maxNumberPlace.html("EACH PLAYER GUESS A NUMBER BUT NOT OVER THE MAXIMUM NUMBER..." + maxNumber);
};


});//end doc ready
