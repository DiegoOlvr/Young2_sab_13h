const NUMERO = document.querySelector('div span')
const VOLTAR = document.querySelector('.voltar')
const ZERAR = document.querySelector('.zerar')
const AVANCAR = document.querySelector('.avancar')

let contador = 1

VOLTAR.addEventListener('click', decrementar)
AVANCAR.addEventListener('click', incrementar)
ZERAR.addEventListener('click', resetar)


function resetar() {
    contador = 0
    atualizar_visor(contador)
}

function decrementar() {
    if (contador > -10) {
        contador--
        atualizar_visor(contador)
    }
}

function incrementar() {
    if (contador < 10) {
        contador++
        atualizar_visor(contador)
    }
}

function atualizar_visor(contagem) {
    NUMERO.innerHTML = contagem
    if (contagem == 10 || contagem == -10) {
        document.querySelector('body').style.backgroundColor = "red"
    }
    else {
        document.querySelector('body').style.backgroundColor = "lightblue"
    }
}