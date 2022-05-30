var database;
var fundo;
var formulario;
var game;
var jogador;
var estadoJogo;
var quantidadeJogador;

function preload () {
fundo= loadImage ('./assets/planodefundo.png');
}

function setup () {
createCanvas (windowWidth,windowHeight);

//criar banco de dados
database= firebase.database();

//chamando  as funçoes a partir do game
game= new Jogo();
game.start();
game.GetState ();
}

function draw () {
  background (fundo);
  
  if (quantidadeJogador == 2 ) {
  game.Update (1);
  }

  if (estadoJogo == 1) {
  game.play ();
  }
}

function windowResized () {
  resizeCanvas (windowWidth,windowHeight);
}