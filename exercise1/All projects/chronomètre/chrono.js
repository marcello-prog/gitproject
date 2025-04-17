//Les variables dont on a besoins
var sp, btn_start, btn_stop, t, ms, s, mn, h;


//fonction pour initialiser les variables quand la page se charge 
window.onload = function(){
  sp = document.getElementsByTagName('span');
  btn_start = document.getElementById('start');
  btn_stop = document.getElementById('stop');
  t;
  ms = 0, s=0, mn = 0, h=0;
}

//mettre en place le compteur

function update_chrono(){
  ms+=1;
  if(ms == 10){
    ms=1;
    s+=1
  }
  if(s==60){
    s=0;
    mn+=1
  }
  if(mn==60){
    mn=0;
    h+=1
  } 
  //insertion des valeur dans les spans

  //[0] permet de selectioner le 1er span
  //[1] permet de selctioner le 2eme span 
  //[2] permetb de selectioner le 3eme span 
  // [3] permet de selectioner le 4eme span etc...


  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

//mettre en place la fonction de button start

function start(){
  //cette ligne de code execute la fonction update-chrono()
  //toutes les 100ms
 t = setInterval(update_chrono,100);
 btn_start.disabled = true;

}

//stoper le chronometre

function stop (){
  clearInterval(t); //suppression de l'interval t que nous avions créer
  btn_start.disabled = false ;
}

//Initialiser les valeur du compteur 
function reset(){
  clearInterval(t);
  btn_start.disabled = false;
  ms = 0, s = 0, mn = 0, h = 0;
  //inserer ces nouvelles valeur dans les span
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}