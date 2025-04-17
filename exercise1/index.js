var buttonMenu = document.getElementById("button-menu");
var projet =document.querySelector(".projets");

// buttonMenu.addEventListener('click', ()=>{
//   // ()=> est une fonction fléchée
//   if(projet.style.display === "none"){
//     projet.style.display === "block";
//   }else{
//     projet.style.display === "block";
//   }
//   // navLinks.classList.toggle
// });

function menu() {
  projet.classList.toggle('active');
  // projet.style.display = "block";
};