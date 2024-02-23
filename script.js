
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


