
var resultado = document.querySelector('#container #resultado');
var total = 0;

function diminuir() {
    total = total -1;
    resultado.textContent = total;
}

function adicionar() {
    total = total +1;
    resultado.textContent = total;
}

function zerar() {
    resultado.textContent = 0;
    alert("Contador zerado, Por favor inicie novamente.");
    total = 0;
}

