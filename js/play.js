const arena = document.getElementById("arena");

//ariete é o conjunto de boneco+bastão+ponto de impacto
const ariete = document.getElementById("ariete"); 

//posição inicial do ariete
let arieteX = 30;
let arieteY = 200;

//teclado
const arieteSpeed = 5;
const keys = {};
document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true); 
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

//START GAME
let startTime = performance.now(); //tempo em milisegundos desde o starrt
let gameOver = false;


function update() {
  if (gameOver) return;

// Movimento do ariete
  if (keys["w"]) arieteY -= arieteSpeed;
  if (keys["s"]) arieteY += arieteSpeed;
  arieteY = Math.max(40, Math.min(arenaHeight - 60, arieteY));
  ariete.setAttribute("transform", `translate(${arieteX}, ${arieteY})`); //mantém X movimenta Y

// Atualização das portas
  portas.forEach((porta, i) => {
    let xPortaAtual = parseFloat(porta.getAttribute("x")); //string to float
    xPortaAtual -= porta.vel;
    porta.setAttribute("x", xPortaAtual);

// Ponto de impacto real
    const ix = arieteX + parseFloat(impacto.getAttribute("cx"));
    const iy = arieteY + parseFloat(impacto.getAttribute("cy"));

    const px = xPortaAtual; 
    const py = parseFloat(porta.getAttribute("y"));
    const pw = parseFloat(porta.getAttribute("width"));
    const ph = parseFloat(porta.getAttribute("height"));

    // Colisão = x,y do ponto de impacto está dentro da área da porta
    if (ix > px && ix < px + pw && iy > py && iy < py + ph) {
      porta.remove();
      portas.splice(i, 1); //para retirar definitivamente do array
    }

    if (xPortaAtual + pw < 0) {
      gameOver = true;
      alert("Game Over x.x  ");
    }
  });

  // *** novas portas quanto maior o valor mais rápido se cria
  if (Math.random() < 0.0099) criarPorta();

  // pontuação
  const time = ((performance.now() - startTime) / 1000).toFixed(1);
  document.getElementById("score").textContent = `Pontos: ${Math.floor(time)}`;

  requestAnimationFrame(update);
}

//start
update();
