// Meu Primeiro Proeto //
// Clasificador de Nivel de Heroi //

// Declarando Variaveis //

let nomeDoHeroi = "Ragnar";
let xpDoHeroi = 10.000;

// Estrutura de decisao //

let nivelDoHeroi;
if (xpDoHeroi < 1.000) {nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1.001 && xpDoHeroi >= 2.000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5.000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7.000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8.000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9.000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10.000) {
    nivelDoHeroi = " Imotal";
} else {
    nivelDoHeroi = "Radiante";
}


// Saida //

console.log('O Heroi de nome $ {nomeDoHeroi} esta no nivel $ {nivelDoHeroi};')