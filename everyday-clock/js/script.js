var noon= 12;
var evening= 18;
var wakeUpTime= 7;
var lunchTime=12;
var playTime = 16;
var dinnerTime = 19;
var bedTime = 20;
var time = new Date().getHours();

var updateClock = function(){
     var amongus = document.getElementById ('amongus');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image ="Among-us-normal.jpg";

if (time == playTime){
     image="Among-us-playtime.jpg";
     messageText="PLAY TIME YAHOO";
} else if (time == wakeUpTime){
          image = 'Among-us-morning.webp'; messageText="WAKE UP!!";
     }else if (time == lunchTime){
          image ="Among-us-lunchtime.jpg";
          messageText="HUNGRY MONSTER!";
     } else if (time == dinnerTime){
               image ="Among-us-lunchtime.jpg";
          messageText="HUNGRY MONSTER!";
     }else if(time == bedTime){
          image="Among-us-bedtime.jpg";messageText="SWEET DREAM!"
     } else if ( time < noon) {
          messageText = "GOOD MORNING!"
     } else if ( time > evening){
          messageText ="RELAXING TIME!!";
     }else{
          messageText = "STUDY!!!"
     } 
     
     message.innerText = messageText;

     showCurrentTime();
};

var showCurrentTime = function(){
     var clock = document.getElementById('clock');
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

     if(hours >= noon){
          meridian ="PM";
     }

     if(hours > noon) {
          hours = hours -12;
     }

     if (minutes < 10) {
          minutes = "0" + minutes;
     }

     if (seconds < 10){
          seconds = "0" + seconds;
     }
  
     var clockTime = hours + ";" + minutes + ";" + seconds + "" + meridian + "!";
     
     clock.innerText = clockTime;
};
updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var playTimeBtn = document.getElementById("btn");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var playTimeSelector = document.getElementById("playTimeSelector");
var dinnerTimeSelector = document.getElementById("dinnerTimeSelector");
var bedTimeSelector = document.getElementById("bedTimeSelector");

var isplayTime= false;
var playEvent = function (){
     if (isplayTime === false){
          isplayTime = true;
          time=playTime;
          playTimeBtn.innerText= "PLAY TIME!!";
          playTimeBtn.style.backgroundColor = "#ff0000";
     } else {
          isplayTime= false;
          time = new Date ().getHours();
          playTimeBtn.innerText= "PLAY TIME OVER";
          playTimeBtn.style.backgroundColor = "#d1e0e0";
     }
};

var lunchEvent = function(){
     lunchTime = lunchTimeSelector.Value;
};

var wakeUpEvent =function(){
     wakeUpTime=wakeUpTimeSelector.value;
};

var playTimeEvent =function(){
     playTime=playTimeSelector.value;
};

var dinnerTimeEvent =function(){
     dinnerTime=dinnerTimeSelector.value;
};

var bedTimeEvent =function(){
     bedTime=bedTimeSelector.value;
};

playTimeBtn.addEventListener('click', playEvent);
lunchTimeSelector.addEventListener('click', lunchEvent);
wakeUpTimeSelector.addEventListener('click', wakeUpEvent);
playTimeSelector.addEventListener('click', playTimeEvent);
dinnerTimeSelector.addEventListener('click', dinnerTimeEvent  );
bedTimeSelector.addEventListener('click', bedTimeEvent);