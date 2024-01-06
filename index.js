// Meu Primeiro Proeto //
// Clasificador de Nivel de Heroi //

// Declarando Variaveis //

let nomeDoHeroi = "Ragnar";
let xpDoHeroi = 10000;

// Estrutura de decisao //

let nivelDoHeroi;

if (xpDoHeroi < 1.000) {nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = " Imotal";
} else {
    nivelDoHeroi = "Radiante";
}


// Saida //

console.log("O Heroi de nome: "  +  nomeDoHeroi  +  " Esta no nivel: " +  nivelDoHeroi );