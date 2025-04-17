let error = document.querySelector('.error-message');
let longLink = document.querySelector('.long-link');
let short = document.querySelector('.result');

function shortLinkFunct() {
    //verification input
    if (longLink.value !== "") { // Correction : vérification correcte du champ vide
        //vider l'erreur
        error.innerHTML = "";
        //connection API
        let url = `https://api.shrtco.de/v2/shorten?url=${longLink.value}`; // Correction : utilisation de backticks pour l'interpolation
        fetch(url)
            .then(response => response.json())
            .then(data => {
                short.innerHTML = data.result.short_link; // Afficher le lien court
                short.style.display = "block"; // Afficher le résultat
            })
            .catch(() => {
                short.innerHTML = "Lien Non Valide !"; // Gestion des erreurs de l'API
                short.style.display = "block";
            });
    } else {
        //error
        error.innerHTML = "Veuillez remplir le champ !"; // Message d'erreur si le champ est vide
        short.style.display = "none"; // Masquer le résultat
    }
}