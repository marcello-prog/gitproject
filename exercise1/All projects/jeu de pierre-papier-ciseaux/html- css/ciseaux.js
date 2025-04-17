const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const result = document.getElementById('resultat');
const heaad = document.querySelector('.heading')
const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let choixOrdinateur

//Evenemen 'Click sur les buttons'

choixPossibles.forEach(choixPossibles => choixPossibles.addEventListener('click',(e)=>{
  //récuperation de l'ID du button cliqué
  choixUtilisateur = e.target.id ;
  contenantChoixUtilisateur.innerHTML = ` <img src="${choixUtilisateur}.png">`
  generer_choix_ordinateur()
  verification();
}))

//fonction pour générer le choix de l'ordinateur

function generer_choix_ordinateur(){
  random = Math.floor(Math.random() * 3) +1
   //Generer des nombre compris entre 1 et 3
  if(random === 1){ //si random = à 1:
    choixOrdinateur = "pierre"
  }

  if(random === 2){ //si random = à 1:
    choixOrdinateur = "papier"
  }

  if(random === 3){ //si random = à 1:
    choixOrdinateur = "ciseaux"
  }
   contenantChoixOrdinateur.innerHTML = ` <img src="${choixOrdinateur}.png">`


}

//fonction pour verifier si le joueur a gagné ou pas

function verification(){
  if(choixUtilisateur == choixOrdinateur){
    result.innerHTML = "Vous estes à Egalité";
  }


  //Les cas ou le joueur perd

  if(choixUtilisateur =="pierre" && choixOrdinateur =="papier"){
    result.innerHTML = "Vous avez Perdu !";
    // heaad.style.backgroundColor = 'red'
  }

  if(choixUtilisateur =="papier" && choixOrdinateur =="ciseaux"){
    result.innerHTML = "Vous avez Perdu !";
   
  }

  if(choixUtilisateur =="ciseaux" && choixOrdinateur =="pierre"){
    result.innerHTML = "Vous avez Perdu !";
  
  }

  //les cas ou le joueur gagne

 if(choixUtilisateur =="pierre" && choixOrdinateur =="ciseaux"){
  result.innerHTML = "Vous avez Gagné !";
  }

  if(choixUtilisateur =="ciseaux" && choixOrdinateur =="papier"){
    result.innerHTML = "Vous avez Gagné !";
  }

  if(choixUtilisateur =="papier" && choixOrdinateur =="pierre"){
  result.innerHTML = "Vous avez Gagné !";
  }

}
