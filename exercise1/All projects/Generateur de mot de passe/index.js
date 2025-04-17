var copyBtn = document.getElementById('copy');

function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength = 16;
    var password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1);
        document.getElementById('password').value = password;
        copyBtn.style.background = "#6c757d"
        copyBtn.style.color = "#fff"
    }
}

//coper le mot de passe 

function copyMdp() {
    var inputPassword = document.getElementById('password');
    //verifier la longeur du mot de passe

    if (inputPassword.value.length == 16) {
        //copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");

        //changer le style du bouton copier

        copyBtn.style.background = "transparent";
        copyBtn.style.color = "#000"

        //afficher une alert
        alert('Mot de passe copié !')
    } else {
        //si non
        alert('veuillez generer un mot de passe')
    }
}