
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
var level=0,lanswer=0;
var started=true;


$(document).click(function(){
  if(started==true)
  {
     //$("#level-title").text("Level " + level);

     setTimeout(function() {
    nextSequence();
    started=false;
 
}, 500);
   
    
  }
  
});

function nextSequence() {
  userClickedPattern = [];
  level++;
   $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
 //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

 $(".btn").click(function() {


  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log("user="+userClickedPattern);
  console.log("compurt="+gamePattern);
  playSound(userChosenColour);
  animatePress(userChosenColour)
  checkAnswer(userClickedPattern.length-1);

});


function animatePress(x)
{
   $("#"+x).addClass("pressed");
   setTimeout(function() {
    $("#"+x).removeClass("pressed");
 
}, 100);

}


function playSound(x)
{
   
    var audio = new Audio("sounds/" + x + ".mp3");
    audio.play();
}


function checkAnswer(currentLevel){
      if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
      {
        console.log("sucess");
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function() {
           nextSequence()
          }, 1000);
           }

      }
      else
      {
        $("#level-title").text("Game Over....");
        playSound("wrong");


        $("body").addClass("game-over");
   setTimeout(function() {
    $("body").removeClass("game-over");
 
}, 300);
        console.log("wrong");

   setTimeout(function() {
   $("#level-title").text("Game Over.... press on screen");
   startOver();
   }, 3000);
 
        
      }

}


function startOver()
{
  level=0;
  gamePattern=[];
  started=true;
}





