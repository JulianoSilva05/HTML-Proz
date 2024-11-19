const dia = new Date().getDay(); // Obtém o dia atual (0 para Domingo, 1 para Segunda, etc.)

var mensagem;

switch (dia) {
  case 0:
    mensagem = "Hoje é Domingo!";
    break;
  case 1:
    mensagem = "Hoje é Segunda-feira.";
    break;
  case 2:
    mensagem = "Hoje é Terça-feira.";
    break;
  case 3:
    mensagem = "Hoje é Quarta-feira.";
    break;
  case 4:
    mensagem = "Hoje é Quinta-feira.";
    break;
  case 5:
    mensagem = "Hoje é Sexta-feira!";
    break;
  case 6:
    mensagem = "Hoje é Sábado!";
    break;
  default:
    mensagem = "Dia inválido."; // Esta linha é um fallback para casos inesperados
}

console.log(mensagem);