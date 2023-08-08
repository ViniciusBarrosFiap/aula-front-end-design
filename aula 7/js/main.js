const contador = document.getElementById("contador");
const hora = document.getElementById("hora")
const minutos = document.getElementById("minuto")
const segundos = document.getElementById("segundo")

let valor = 0
function contadorSoma(){
   valor += 0.00031
   contador.textContent = valor.toFixed(2)
}
setInterval(contadorSoma, 1000)

function relogio(){
    let agora = new Date();
    let horaAtual = agora.getHours();
    let minutoAtual = agora.getMinutes();
    let segundoAtual = agora.getSeconds();
    hora.textContent = `${horaAtual}:`;
    minutos.textContent = `${minutoAtual}:`;
    segundos.textContent = segundoAtual;
}

setInterval(relogio, 1000)
