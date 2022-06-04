// Criando uma variável do tipo constante
const nomes = ["Paulo","Roberto","Lima","Ferreira"];
console.log (nomes [0]);
var conteudo=(nomes [0]+"-"+nomes [1]+"-"+nomes [2]+"-"+nomes [3]);

//Criando um laço de repetição
for (contador=0;contador<4;contador++){
    console.log(nomes[contador]);
}

// Criando uma nova variável para adicionar um nome
var nome = "Paulo Roberto"

// Criando uma suuuuuuper variável
var fs = require("fs");
fs.writeFile("C:\\Users\\paulo.rlferreira4\\Desktop\\ProjetoJS\\meu arquivo.txt",conteudo,function(erro){
    if (erro){
        throw erro; //Comando throw permite verificar o input /
    }
    console.log ("Arquivo salvo");

})