//1
const click1 = document.querySelector('footer')

click1.addEventListener('click', () => {
   console.log('clique');
});

//1-bis
let counter = 0
click1.addEventListener('click', () => {
   counter ++
   console.log(`click numéro ${counter}`);
});

//2
let hamburgerButton = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");
let navHeader = document.querySelector("#navbarHeader");
//console.log(hamburgerButton);

function hideButton(){
  navHeader.classList.toggle("collapse");
}
hamburgerButton.addEventListener("click", hideButton);

//3
let firstCard = document.querySelectorAll('.card')[0];
let button1 = firstCard.querySelectorAll('button')[1];

button1.addEventListener('click', () => {
   firstCard.style.color = "red";
})

//4
let secondCard = document.querySelectorAll('.card')[1];
let button2 = secondCard.querySelectorAll('button')[1];

button2.addEventListener('click', () => {
   if (secondCard.style.color === 'green'){ 
      secondCard.style.color = "";
   } else {
      secondCard.style.color = "green";
   }
})

//5
let styleSheet = document.styleSheets[0];
let targetNavbar = document.querySelector(".navbar")
targetNavbar.addEventListener("dblclick", () => {
   if (styleSheet.disabled === true){
      styleSheet.disabled = false;
   } else {
      styleSheet.disabled = true;
   }
})

//6
document.querySelectorAll(".card").forEach(function (card) {
   card.querySelector("button").addEventListener("mouseover", () => {
    card.querySelector(".card-text").classList.toggle("collapse");
    let img = card.querySelector("img");
    if (img.style.width === "20%") {
      img.style.width = "100%";
    } else {
      img.style.width = "20%";
    }
  });
});

//7
document.querySelectorAll('section a')[1].addEventListener('click', () => {
   let selectElement = document.querySelector('.album .row');
   selectElement.insertBefore(
      selectElement.lastChild,
      selectElement.firstChild
   );
});

//8
document.querySelectorAll('section a')[0].addEventListener('click', (e) => {
   e.preventDefault(); //pour bloquer le lien
   let select = document.querySelector('.album .row');
   select.appendChild( //on insère un child dans celui en dernière position
      select.firstElementChild
   )
   
})





