// PASSO 1 - IDENTIFICAR ELEMENTO
const DIV = document.querySelector('div')

// PASSO 2 - CRIAR UM EVENTO
DIV.addEventListener('mouseenter', entrei)
DIV.addEventListener('mouseout', sai)
DIV.addEventListener('click', clicou)

// PASSO 3 - CRIAR A FUNÇÃO DO EVENTO
function entrei() {
    DIV.innerText = 'entrou'
    DIV.style.color = '#fff'
}

function sai() {
    DIV.innerText = 'saiu'
    DIV.style.background = '#f2f2f2'
    DIV.style.color = '#000'
}

function clicou() {
    const butao = document.createElement("button")
    const texto = document.createTextNode("voltar")
    butao.appendChild(texto)
    DIV.appendChild(butao)
}