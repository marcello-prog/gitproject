const bonhome = document.querySelector(".persn");
const boule = document.querySelector(".boule");
const go = document.querySelector(".start");
const jump = document.querySelector(".sauter");
const scoreDisplay = document.getElementById("score");
const vieDisplay = document.getElementById("vie");
const messageDisplay = document.getElementById("message");

let end = true;
let gameInterval;
let score = 0;
let vie = 5;
let vitesse = 1000; // Vitesse initiale de la boule

go.addEventListener('click', () => {
    if (end) {
        startGame();
    } else {
        stopGame();
    }
});

jump.addEventListener('click', () => {
    if (!end) {
        bonhome.classList.add("activeUn");
        setTimeout(() => {
            bonhome.classList.remove("activeUn");
        }, 500);
    }
});

function startGame() {
    go.innerHTML = "Stop";
    boule.classList.add("activeDeux");
    end = false;
    score = 0;
    vie = 5;
    vitesse = 1000;
    updateDisplay();
    gameInterval = setInterval(checkCollision, 300);
    moveBoule();
}

function stopGame() {
    go.innerHTML = "START";
    boule.classList.remove("activeDeux");
    end = true;
    clearInterval(gameInterval);
    messageDisplay.textContent = "Jeu arrêté. Rechargez pour recommencer.";
}

function moveBoule() {
    boule.style.animationDuration = `${vitesse}ms`;
    setTimeout(() => {
        if (!end) {
            score++;
            if (score % 10 === 0) {
                vitesse -= 25; // Augmente la vitesse tous les 10 points
                messageDisplay.textContent = `Félicitations ! Niveau ${score / 10} atteint.`;
                setTimeout(() => {
                    messageDisplay.textContent = "";
                }, 2000);
            }
            updateDisplay();
            moveBoule();
        }
    }, vitesse);
}

function checkCollision() {
    const x = boule.getBoundingClientRect();
    const y = bonhome.getBoundingClientRect();

    if (x.left < y.right && x.right > y.left && x.top < y.bottom && x.bottom > y.top) {
        vie--;
        if (vie <= 0) {
            stopGame();
            messageDisplay.textContent = "Game Over !";
        } else {
            updateDisplay();
            messageDisplay.textContent = "Collision ! Vie perdue.";
            setTimeout(() => {
                messageDisplay.textContent = "";
            }, 1000);
        }
    }
}

function updateDisplay() {
    scoreDisplay.textContent = score;
    vieDisplay.textContent = vie;
}