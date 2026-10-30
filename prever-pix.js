const prompt = require("prompt-sync")();

let saldo = Number(prompt("saldo atual: "));
let valor =  Number(prompt("Valor da transferencia: "));
let hora = Number(prompt("Horário atual(somente horas, sem minutos): "));

while(saldo < 0 || valor <= 0 || hora < 0 || hora > 24){

console.log("Inválido, tente novamente");
saldo = Number(prompt("saldo atual: ")) ;
valor =  Number(prompt("Valor da transferencia: "));
hora = Number(prompt("Horário atual(somente horas, sem minutos): "));
}

if(saldo >= valor){

    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));

}else{

    console.log("saldo insuficiente ou limite atingindo");

}