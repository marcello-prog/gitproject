var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacles");

function saut(){
  if(perso.classList != "animation"){
    perso.classList.add('animation');
  }
  setTimeout(function(){
    perso.classList.remove('animation');
  },500)
}

//verifier si l'obstacle touche le personnage

var verification = setInterval(function(){
  var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
  var obstaclesLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if(obstaclesLeft < 34 && obstaclesLeft > 0 && persoTop >= 200){
    obstacle.style.animation = "none";
    alert("Vous avez perdu")
  }
},1)