// scripts.js


//var -> global
//let -> local
function nome(){
var nome;
nome = "Juliano";
let sobrenome = "Silva";
var idade = 30;

idade = 30 + 5;

alert(nome + " " + sobrenome + " " + idade);
}

function somar(A,B){
  var soma = A + B;
}
soma = 0;
if(soma >= 7){
  alert("Maior que 7")
}
else if(soma == 0){
  alert("Soma = 0")
}
else {
  alert("Soma é menor que 7")
}

