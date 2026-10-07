var color=["green","red","yellow","blue"];
var gamepattern=[];
var userpattern=[];
  var randColor;
  var level=0;
  var started=false;
  var clicked=0;
function randomChoosenNumber(){
    level++;
     $("h1").text("Level "+level);
    var randNum=Math.floor(Math.random()*4);
  randColor=color[randNum];
    gamepattern.push(randColor);
console.log(randColor);
  //$("#"+randColor).addClass("flash-effect");

// Optional: Remove it after the animation ends so you can trigger it again later
//$("#"+randColor).on('animationend', function() {
   // $(this).removeClass('flash-effect');
    annimatePress(randColor);


   playSound(randColor);
  }
$(".btn").on("click",function(){
    clicked++;
     var usercolor=$(this).attr("id");

    userpattern.push(usercolor);
    playSound(usercolor);
   // console.log(userpattern);
   annimatePress(usercolor);
   if(clicked==level){
   checkAnswer(level);}
});

function playSound(name){
        var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
   
}
function annimatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    },100);
}

$(document).on("keydown",function(){
    if(!started){
   console.log("ket pressed");
    randomChoosenNumber();
    $("#level-title").text("level "+level);
    started=true;
    }
})

function checkAnswer(currLevel){
    for(var i=0;i<currLevel;i++){
        if(gamepattern[i]!=userpattern[i]){
           // console.log("wrong");
          
           // break;
          
             $("#level-title").text("Game Over, Press Any Key to Restart");
              playSound("wrong");
           $("body").addClass("game-over");
           setTimeout(function(){
            $("body").removeClass("game-over");
           },200);
         
  level=0;
           gamepattern=[];
           userpattern=[];
clicked=0;
started=false;
           return;
        }
    }
   // console.log("success");
userpattern=[];
clicked=0;
setTimeout(function(){
    randomChoosenNumber();},1000);
}