//definir les variables

var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var langth = document.getElementById('langth');

//lorsque l'utilisateur clique sur le champ du mot de passe ,afficher la boite de message

myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}


//lorsque l'utilisateur clique en dehors du champ du mot de passe,masquer la boite message 

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"


}
//lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe 

myInput.onkeyup = function(){
    //valider les lettres minuscule

    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
        //si le mot de passe contient une lettre minuscule, enlever la classe 'invalid et ajouter la classe valid'

        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //si non, enlever et ajouter la classe 'invalid'
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

     //valider les lettres minuscule

     var upperCaseLetters = /[A-Z]/g
     if(myInput.value.match(upperCaseLetters)){
        //si le mot de passe contient une lettre majuscule, enlever la classe 'invalid et ajouter la classe valid'
 
        capital.classList.remove('invalid');
        capital.classList.add('valid');
     }else{
        //si non, enlever et ajouter la classe 'invalid'
        capital.classList.remove('valid');
        capital.classList.add('invalid');
     }

     //valider les nombres

     var numbers = /[0-9]/g
     if(myInput.value.match(numbers)){
        //si le mot de passe contient une lettre majuscule, enleverla classe 'invalid et ajouter la classe valid'
 
        number.classList.remove('invalid');
        number.classList.add('valid');
     }else{
        //si non, enlever et ajouter la classe 'invalid'
        number.classList.remove('valid');
        number.classList.add('invalid');
     }

     //valider la longueur

     if(myInput.value.langth >= 8){
        //si le mot de passe contient une lettre majuscule, enlever la classe 'invalid et ajouter la classe valid'
 
        langth.classList.remove('invalid');
        langth.classList.add('valid');
     }else{
        //si non, enlever et ajouter la classe 'invalid'
        langth.classList.remove('valid');
        langth.classList.add('invalid');
     }
}