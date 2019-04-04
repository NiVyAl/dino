var dino = document.querySelector(".dino");
var dinoStep = 1;

var mainInterval = setInterval(function(){
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

document.addEventListener('keypress', function(evt) {
  if (evt.keyCode === 32) {
    dino.classList.add("dino--jump");
    setTimeout(function() {
      dino.classList.remove("dino--jump"); 
    }, 200);
  }
})