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

$('#submitData').on('click', function (){
console.log("in submit data click");
postData();

});//end submit data


});//end doc ready
