const prompt = require("prompt-sync")();

let saldo = Number(prompt("saldo atual?")) ;
let valor =  Number(prompt("Valor da transferencia?"));
let hora = Number(prompt("Horário atual?"))

if(saldo >= valor & hora<20 ){
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
}else if(valor <= 1000 & hora >= 20){
     saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
}else{
    console.log("saldo insuficiente ou limite atingindo");
}