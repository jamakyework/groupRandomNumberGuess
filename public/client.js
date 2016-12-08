$(document).ready(function() {
  console.log("jquery is here");
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
      console.log('from response lenght:', response.length);
    $("#outputDiv").html("Total guesses:" + response.length);
    for (var i = 0; i < response.length; i++) {
      $("#outputDiv").html("Player Guesses:" + response[i])};
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

});//end submit data


});//end doc ready
