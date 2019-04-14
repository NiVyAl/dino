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


/* */

var jumpHeight = 50;
var isKeyup = false;
document.addEventListener('keydown', function(evt) {
  if ((evt.keyCode === 32) && (isKeyup == false)) {
    /*isKeyup = true;
    var jumpInterval = setInterval(function(){
      if (isKeyup) {
        dino.classList.add("dino--jump");
        dino.style.transform = 'translateY(' + -jumpHeight + 'px)';
        console.log(jumpHeight);
        if (jumpHeight <  100) {
          jumpHeight = jumpHeight + 5;    
        }
      }
    }, 1000); */
    isKeyup = true;
    dino.classList.add("dino--jump");
    dino.style.transform = 'translateY(-100px)';
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
/*
document.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 32) {
    console.log("отпустил");
    
    isKeyup = false;
    jumpHeight = 50;
    dino.classList.remove("dino--jump");
    dino.style.transform = 'translateY(0)';
  }
}); */


/* cloud */

var cloud = document.querySelector(".cloud-container__item");

/*var animationPause = function() {
  var l = new Date();
  var c;
  var diff;
  while(1) {
    c = new Date();
    diff = c - l;
    if (diff > 1000) {
      break;
    }
  }
} 
*/
var isDecorationMove = false;
cloud.classList.remove("cloud-container__item--move");

var decorationMove = function() {
  cloud.style.top = Math.floor(Math.random() * (100 - 1) ) + 1 + 'px';
  
  console.log("decorationMove");
  cloud.style.transition = "10s linear transform";
  cloud.classList.add("cloud-container__item--move");
  isDecorationMove = true;
  
  setTimeout(function() {
    console.log(isDecorationMove);
    if (isDecorationMove) {
      cloud.style.transition = "0s linear transform";
      cloud.classList.remove("cloud-container__item--move");
      //console.log("setTimeout");
      isDecorationMove = false;
    }
  }, 9999);
  
  //console.log(cloud.classList);
}

decorationMove();
setInterval(function() { 
  decorationMove();
}, 10000);