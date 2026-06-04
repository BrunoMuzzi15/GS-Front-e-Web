
const perguntas = [
{
    pergunta: "Qual é a principal função do sistema de posicionamento espacial?",
    opcoes: [
    "Controlar o clima",
    "Calcular rotas seguras no espaço",
    "Produzir energia",
    "Criar satélites"
    ],
    resposta: 1
},
{
    pergunta: "O sistema ajuda a evitar:",
    opcoes: [
    "Chuvas",
    "Falhas elétricas",
    "Colisões orbitais",
    "Terremotos"
    ],
    resposta: 2
},
{
    pergunta: "Onde o sistema opera?",
    opcoes: [
    "No oceano",
    "Na atmosfera",
    "No espaço",
    "No subsolo"
    ],
    resposta: 2
},
{
    pergunta: "Qual tecnologia é usada para localização?",
    opcoes: [
    "GPS",
    "Bluetooth",
    "Wi-Fi",
    "USB"
    ],
    resposta: 0
},
{
    pergunta: "Os satélites orbitam:",
    opcoes: [
    "A Lua",
    "O Sol",
    "A Terra",
    "Marte"
    ],
    resposta: 2
},
{
    pergunta: "O sistema fornece informações em:",
    opcoes: [
    "Tempo real",
    "Uma vez por mês",
    "Uma vez por ano",
    "Nunca"
    ],
    resposta: 0
},
{
    pergunta: "Qual é um benefício do sistema?",
    opcoes: [
    "Maior segurança nas missões",
    "Mais poluição",
    "Menos comunicação",
    "Menos precisão"
    ],
    resposta: 0
},
{
    pergunta: "O projeto é comparado a:",
    opcoes: [
    "Um radar",
    "Um GPS do espaço",
    "Um foguete",
    "Um telescópio"
    ],
    resposta: 1
},
{
    pergunta: "O sistema auxilia futuras:",
    opcoes: [
    "Viagens de ônibus",
    "Missões espaciais",
    "Corridas",
    "Construções"
    ],
    resposta: 1
},
{
    pergunta: "Por que evitar colisões é importante?",
    opcoes: [
    "Para economizar papel",
    "Para proteger equipamentos e missões",
    "Para aumentar o calor",
    "Para reduzir internet"
    ],
    resposta: 1
}
];

let perguntaAtual = 0;
let pontuacao = 0;

const areaQuiz = document.getElementById("quiz-area");

function mostrarPergunta() {
const p = perguntas[perguntaAtual];

areaQuiz.innerHTML = `
    <h3>${perguntaAtual + 1}. ${p.pergunta}</h3>

    ${p.opcoes.map((opcao, i) => `
    <button class="opcao" onclick="responder(${i})">
        ${opcao}
    </button>
    <br><br>
    `).join("")}
`;
}

function responder(indice) {
if (indice === perguntas[perguntaAtual].resposta) {
    pontuacao++;
}

perguntaAtual++;

if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
} else {
    mostrarResultado();
}
}

function mostrarResultado() {
areaQuiz.innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>

    <button onclick="reiniciarQuiz()">
    Tentar novamente
    </button>
`;
}

function reiniciarQuiz() {
perguntaAtual = 0;
pontuacao = 0;
mostrarPergunta();
}

mostrarPergunta();


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

