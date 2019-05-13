var dino = document.querySelector(".dino");
var dinoStep = 1;

var animationInterval = setInterval(function(){
  if (dinoStep == 1) {
    dino.classList.add("dino--step2");
    dino.classList.remove("dino--step1");
    dinoStep = 2;
  } else if (dinoStep == 2) {
    dino.classList.add("dino--step1");
    dino.classList.remove("dino--step2");
    dinoStep = 1;
  };
}, 100); 


/* cloud */

var cloud = document.querySelectorAll(".cloud-container__item");
var cloud1 = document.querySelector(".cloud-container__item--1");
var cloud2 = document.querySelector(".cloud-container__item--2");

var cactus = document.querySelectorAll(".cactus");
var cactus1 = document.querySelector(".cactus--1");
var cactus2 = document.querySelector(".cactus--2");
var cactus3 = document.querySelector(".cactus--3");

var isJumped = false;

for (var i = 0; i < cloud.length; i++) {
  cloud[i].classList.remove("cloud-container__item--move");
}

var decorationMove = function(object) {
  //var cactusStartTime = Date.now(); 
  var isRepeat = true;
  for (var i = 0; i < cloud.length; i++){
    if (object == cloud[i]) {
      var classMove = "cloud-container__item--move"; 
      var moveTime = 10000;

      object.style.top = Math.floor(Math.random() * (100 - 1) ) + 1 + 'px';
      
      object.classList.add(classMove);
    };
  }
   
  for (var i = 0; i < cactus.length; i++){
    if (object == cactus[i]) {
      var classMove = "cactus--move";
      //var moveTime = 3000;
      var moveTime = 1;
    };
  };
  
  
  setInterval(function() {
    if (isRepeat) {
      object.classList.remove(classMove);
    
      setTimeout(function() {
        for (var i = 0; i < cloud.length; i++){
          if (object == cloud[i]) {
            object.style.top = Math.floor(Math.random() * (100 - 1) ) + 1 + 'px';  
          };
        }

        object.classList.add(classMove);
        
        for (var i = 0; i < cactus.length; i++){
          if (object == cactus[i]) {
            isRepeat = false;
            //console.log(isRepeat);   // почему-то срабатывает несколько раз от 2 до 6
            
            /* врезание в кактус */
            setTimeout(function(){
              if (!isJumped) {
                isDied = true;
                object.classList.add("cactus--crash");
                dino.classList.add("dino--died");
              };
            }, 1580)
          };
        };
      }, 20);
    };
  }, moveTime);
}; 


decorationMove(cloud1);
setTimeout(function(){
  decorationMove(cloud2);
}, 5000) 


/* прыжок */

var jumpHeight = 50;
var isKeyup = false;
document.addEventListener('keydown', function(evt) {
  if ((evt.keyCode === 32) && (isKeyup == false) && (!isDied)) {
    isKeyup = true;
    dino.classList.add("dino--jump");
    dino.style.transform = 'translateY(-100px)';
    jump();
    var isJump = true;
    setTimeout(function(){
      if (isJump) {
        dino.style.transform = 'translateY(0)';
      };
    }, 300);
    
    setTimeout(function(){
      if (isJump) {
        isKeyup = false;
        dino.classList.remove("dino--jump");
      };
    }, 600);
  }
});

/* прыжок прогр */
var cactusStartTime;
setInterval(function(){
  decorationMove(cactus3);
  cactusStartTime = Date.now(); 
  isJumped = false;
}, 2000)

var jump = function() {
  if ( ((Date.now() - cactusStartTime) > 1350) && ((Date.now() - cactusStartTime) < 1500) ) {
    isJumped = true;
  }
}


/* Score */
var isDied = false;

var startTime = Date.now();
var scoreNowContainer = document.querySelector(".score__now");
var scoreBest = document.querySelector(".score__best");
var scoreNow = 0;

var scoreWrite = function(number, container) {
  var j = 0;
  var k = number;
  while(k >= 1) {
    k = k / 10;
    j++;
  }
  
  var howManyNull = 5 - j;
  for (var i = 0; i < howManyNull; i++) {
    number = "0" + number;
  }
  container.innerHTML = number;  
}

if (localStorage.getItem("highScore")) {
  scoreWrite(localStorage.getItem("highScore"), scoreBest);
}

setInterval(function(){
  if (!isDied) {
    scoreNow = Math.round((Date.now() - startTime) / 500);
    scoreWrite(scoreNow, scoreNowContainer);
  } else {
    localStorage.setItem("highScore", scoreNow);
  }
  
}, 500)