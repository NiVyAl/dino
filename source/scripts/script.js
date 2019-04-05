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

var jumpHeight = 150;
var isKeyup = false;
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 32) {
    /*
    dino.classList.add("dino--jump");
    setTimeout(function() {
      dino.classList.remove("dino--jump"); 
    }, 200); */
    isKeyup = true;
    var jumpInterval = setInterval(function(){
      if (isKeyup) {
        dino.classList.add("dino--jump");
        dino.style.transform = 'translateY(' + -jumpHeight + 'px)';
        console.log(jumpHeight);
        jumpHeight = jumpHeight + 10; 
      }
    }, 100);
    console.log("нажал");
  }
});

document.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 32) {
    console.log("отпустил");
    
    isKeyup = false;
    jumpHeight = 0;
    dino.classList.remove("dino--jump");
    dino.style.transform = 'translateY(0)';
  }
})