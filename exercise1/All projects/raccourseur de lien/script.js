async function shortenURL() {
    const urlInput = document.getElementById("urlInput").value.trim();
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    const loadingDiv = document.getElementById("loading");

    // Réinitialiser les messages
    errorDiv.style.display = "none";
    resultDiv.style.display = "none";
    loadingDiv.style.display = "none";

    // Validation de l'URL
    if (!urlInput) {
        showError("Veuillez entrer une URL.");
        return;
    }

    if (!isValidURL(urlInput)) {
        showError("Veuillez entrer une URL valide.");
        return;
    }

    // Afficher le chargement
    loadingDiv.style.display = "block";

    try {
        const response = await fetch(
            "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(urlInput)
        );
        if (!response.ok) throw new Error("Erreur lors du raccourcissement de l'URL.");
        const shortenedURL = await response.text();

        // Afficher le résultat
        document.getElementById("shortenedURL").innerHTML = shortenedURL;
        document.getElementById("shortenedURL").href = shortenedURL;
        resultDiv.style.display = "block";
    } catch (error) {
        console.error("Erreur :", error);
        showError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
        loadingDiv.style.display = "none";
    }
}

function copyToClipboard() {
    const shortenedURL = document.getElementById("shortenedURL").href;
    navigator.clipboard.writeText(shortenedURL)
        .then(() => alert("URL copiée dans le presse-papiers !"))
        .catch(() => showError("Impossible de copier l'URL."));
}

function showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}