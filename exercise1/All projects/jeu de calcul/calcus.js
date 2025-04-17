var nb1 = document.querySelector('.nb1');
var  nb2 = document.querySelector('.nb2');
var  op = document.querySelector('.op');
var  message = document.querySelector('.message');
var  score = document.querySelector('.score');
var  link = document.querySelector('.link');
var  section = document.querySelector('.section');
var  compteur = 0;

//Nombres aléatoire Début du jeu

random1 = Math.random()*20 << 0 ; //pour génerer des nombre entre 0 et 11

random2 = Math.random()*20 << 0;//pour génerer des nombre entre 0 et 11
console.log(random1);
console.log(random2);

//Inserer les nombrea hazard das les variables nb2
nb1.innerHTML = random1 ; 
nb2.innerHTML = random2 ; 

function verifier(){
  //Récuperer le résultat entré par le joueur ;
  var res = document.querySelector('.res').value;
  if(random1 + random2 == res){
    message.style.background = "green";
    message.innerHTML = "Correcte."
    //créer d'autre nombre aléatoire
        //Nombres Aléatoire Début du jeu
      random1 = Math.random()*11 << 0 ; //pour génerer des nombre entre 0 et 11

      random2 = Math.random()*11 << 0;//pour génerer des nombre entre 0 et 11
      console.log(random1);
      console.log(random2);

    //Inserer les nombrea hazard das les variables nb2
    nb1.innerHTML = random1 ; 
    nb2.innerHTML = random2 ; 
    //compteur = compteur + 1;
  }else{
    message.style.background = "red";
    message.innerHTML = "Vous avez perdu."
    section.innerHTML = " " ;
    score.innerHTML = `  <span>${compteur}</span></br>` 
    //(attention ! ce signe est donné par la combinaison "ALTGR + 7 alphanumerique")
    //
  }
}
