
const prompt = require("prompt-sync")();

const tarifabase = 5;
const precoPorKm = 2;
const precoPorMinuto = 0.5;

let km = Number(prompt("Quantos Km?"));
let minutos = Number(prompt("Quantos minutos até o destino?"));

let total =tarifabase
          + km * precoPorKm 
          + minutos * precoPorMinuto;

console.log("Total: R$", total.toFixed(2));          

