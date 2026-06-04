



// JS do site (slideshow etc.)
(function () {
  const raizShow = document.querySelector('[data-slideshow]');
  if (!raizShow) return;


  const imagens = Array.from(raizShow.querySelectorAll('.problema-slide'));
  const botaoAnterior = raizShow.querySelector('.problema-prev');
  const botaoProxima = raizShow.querySelector('.problema-next');
  const marcadores = Array.from(raizShow.querySelectorAll('.problema-dot'));

  let indiceAtual = 0;
  let intervaloAuto = null;

  function definirAtivo(proximoIndice) {
    indiceAtual = (proximoIndice + imagens.length) % imagens.length;

    imagens.forEach((imagem, i) => {
      imagem.classList.toggle('is-active', i === indiceAtual);
    });

    if (marcadores.length) {
      marcadores.forEach((marcador, i) => {
        marcador.classList.toggle('is-active', i === indiceAtual);
        marcador.setAttribute('aria-selected', String(i === indiceAtual));
      });
    }
  }

  function mostrarAnterior() {
    definirAtivo(indiceAtual - 1);
  }

  function mostrarProxima() {
    definirAtivo(indiceAtual + 1);
  }

  if (botaoAnterior) botaoAnterior.addEventListener('click', mostrarAnterior);
  if (botaoProxima) botaoProxima.addEventListener('click', mostrarProxima);

  marcadores.forEach((marcador, i) => {
    marcador.addEventListener('click', () => definirAtivo(i));
  });




})();

