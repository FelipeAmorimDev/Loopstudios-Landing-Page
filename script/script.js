const menuhb = document.querySelector(".menu-hb")
menuhb.style.back

function toogleMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("active")
  if (nav.classList.contains("active")) {
    menuhb.style.backgroundImage = "url('../images/icon-close.svg')";
    menuhb.style.transform = "rotate(180deg)"
    document.body.style.overflow = "hidden"
  }
  else {
    menuhb.style.backgroundImage = "url('../images/icon-hamburger.svg')";
    menuhb.style.transform = "rotate(360deg)"
    document.body.style.overflow = "visible"
  }
}

menuhb.addEventListener("click", toogleMenu);