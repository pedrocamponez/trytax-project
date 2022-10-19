// Header diminuindo quando scroll 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth > 1000) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "80px";
      document.getElementById("header").style.fontSize = "18px";
      document.getElementById("header").style.opacity = "1";
    } else {
      document.getElementById("header").style.height = "150px";
      document.getElementById("header").style.fontSize = "24px";
      document.getElementById("header").style.opacity = "0.7";
    }
  }
}

//variáveis para o burger menu
const burgerButton = document.querySelector("#header-burger-container")
const headerNav = document.querySelector("#header-nav-mobile")
const headerNavLinks = document.querySelectorAll(".list")

// burger menu
burgerButton.addEventListener("click", function () {
    if (headerNav.style.display == "none") {
      headerNav.style.display = "flex"
    } else {
      headerNav.style.display = "none"
    }
})

// mobile
if (window.innerWidth < 600) {
  // sair do burger menu clicando na tela
  window.onclick = function (e) {
    if (e.clientY > 305 && headerNav.style.display == "flex") {
      headerNav.style.display = "none"
    }
  }
  // clicar no link fecha o burger menu
  for (let i = 0; i < headerNavLinks.length; i++) {
    headerNavLinks[i].addEventListener("click", function () {
      headerNav.style.display = "none"
    })
  }
}

// function teste () {
//   console.log(window.innerWidth)
//   if (window.innerWidth > 374) {
//     console.log("maior que 374")
//     console.log(window.innerWidth)
//   }
// }
// teste()