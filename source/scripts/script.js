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


/* прыжок */

var jumpHeight = 50;
var isKeyup = false;
document.addEventListener('keydown', function(evt) {
  if ((evt.keyCode === 32) && (isKeyup == false)) {
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


/* cloud */

var cloud = document.querySelector(".cloud-container__item");
var cactus = document.querySelector(".cactus");

cloud.classList.remove("cloud-container__item--move");

var decorationMove = function(object) {
  if (object == cloud) {
    var classMove = "cloud-container__item--move"; 
    var moveTime = 10000;
    
    object.style.top = Math.floor(Math.random() * (100 - 1) ) + 1 + 'px';
  };
  if (object == cactus) {
    var classMove = "cactus--move";
    var moveTime = 3000;
  };
  
  object.classList.add(classMove);
  
  setInterval(function() {
    object.classList.remove(classMove);
    
    setTimeout(function() {
      if (object == cloud) {
        object.style.top = Math.floor(Math.random() * (100 - 1) ) + 1 + 'px';  
      };
      
      object.classList.add(classMove);
    }, 20);
  }, moveTime);
}; 

decorationMove(cloud);
decorationMove(cactus);