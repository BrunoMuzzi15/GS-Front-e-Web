const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  observer.observe(section);
});
const numero = document.getElementById("numero");

let contador = 0;

const intervalo = setInterval(() => {

    contador += 300;

    numero.innerText = contador.toLocaleString();

    if(contador >= 27000){
        clearInterval(intervalo);
    }

}, 30);
const navLinks = document.querySelectorAll("nav a");
const secoes = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let atual = "";

  secoes.forEach((secao) => {

    const topo = secao.offsetTop - 150;

    if(scrollY >= topo){
      atual = secao.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("ativo");

    if(link.getAttribute("href") === "#" + atual){
      link.classList.add("ativo");
    }
  });

});
const statusOrbita = document.getElementById("status");

const mensagens = [
  "ÓRBITA SEGURA",
  "OBJETO PRÓXIMO",
  "ALERTA DE COLISÃO"
];

let indice = 0;

setInterval(() => {

    statusOrbita.textContent = mensagens[indice];

    if(indice === 0){
        statusOrbita.style.color = "#00ff88";
    }

    if(indice === 1){
        statusOrbita.style.color = "#ffd000";
    }

    if(indice === 2){
        statusOrbita.style.color = "#ff4040";
    }

    indice++;

    if(indice > 2){
        indice = 0;
    }

}, 3000);