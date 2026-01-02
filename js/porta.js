const min_height = 50;
const min_vel = 1;

const arenaWidth = 600;
const arenaHeight = 400;

// Lista que guarda as portas ativas
let portas = [];

function criarPorta() {
  let altura = min_height + Math.random() * 120;
  const velocidade = min_vel + Math.random() * 2.5;

  const porta = document.createElementNS(arena.namespaceURI, "rect");
  porta.setAttribute("width", 12);
  porta.setAttribute("height", altura);
  porta.setAttribute("x", arenaWidth); 

  let y = Math.random() * (arenaHeight - altura);

  porta.setAttribute("y", y);
  porta.vel = velocidade;

  arena.appendChild(porta);
  portas.push(porta);
}
