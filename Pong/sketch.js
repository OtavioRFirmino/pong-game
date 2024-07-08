//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;
let colidiu = false;

//variáveis oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let compRaquete2 = 10;
let altRaquete2 = 90;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaquete();
  colisaoRaqueteLib();
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete2();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
  }
}
  
  function mostraRaquete(x,y) {
    rect(x, y, compRaquete, altRaquete);
}
  
  function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
  }
    
    function colisaoRaquete(){
      if (xBolinha - raio < xRaquete + compRaquete && yBolinha - raio < yRaquete + altRaquete && yBolinha + raio > yRaquete){
          velocidadeXBolinha *= -1;
          }
}

function colisaoRaqueteLib(){
  colidiu = collideRectCircle(xRaquete, yRaquete, compRaquete, altRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeYBolinha *= -1;
  }
}

function movimentaRaquete2(){
  
}


