class Jogo {
constructor () {

}

start () {
//criando objeto a partir da classe
formulario= new Formulario();
formulario.show();

//criando o objeto jogador a partir da classe
jogador= new Jogador();
quantidadeJogador= jogador.GetCount();
}

GetState () {
//referencia do banco de dados
var estado_de_jogo_de_referencia= database.ref ('estadoJogo');
estado_de_jogo_de_referencia.on('value',function(data){
estadoJogo= data.val ();
})
}

Update (game) {
//ISSO É A REFERENCIA DO BANCO DE DADOS DO DIRETORIO RAIZ
database.ref ('/').update({
    estadoJogo: game
    })
    }
    
}
