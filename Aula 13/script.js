// ENCONTRAR ELEMENTOS
const QUADRADO = document.querySelector('div.quadrado')

let contagem = 1

// CRIAR EVENTO
QUADRADO.addEventListener('click', expandir)

QUADRADO.addEventListener('contextmenu', (evento) => { 
    evento.preventDefault()
    QUADRADO.classList.remove('expandir')
})

// CRIAR AÇÃO DO EVENTO
function expandir() {
    QUADRADO.classList.add('expandir')
    contagem++
    QUADRADO.textContent = contagem
    if (contagem >= 10) {
        QUADRADO.classList.remove('expandir')
        contagem = 0
    }
}

