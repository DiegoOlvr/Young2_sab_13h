// 1º PASSO - IDENTIFICAR OS ELEMENTOS
const N1 = document.querySelector('.soma > .n1')
const N2 = document.querySelector('.soma > .n2')
const RESULTADO = document.querySelector('.soma > .resultado')
const SOMAR_BTN = document.querySelector('.somar')

// 2º PASSO - CRIAR EVENTOS
SOMAR_BTN.addEventListener('click', somar)

// 3º PASSO - CRIAR AS FUNÇÕES DOS EVENTOS
function somar() {
    soma = parseInt(N1.value) +  parseInt(N2.value)
    RESULTADO.value = soma
}

