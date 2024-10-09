const QUESTOS_QUIZ = [
    {
        questao: 'Quem é o professor mais legal da Ctrl + play?',
        a: 'Rodrigo',
        b: 'Diego',
        c: 'Felipe',
        d: 'Daniel',
        correta: 'b',
    },
    {
        questao: 'Linguagem de programação mais legal?',
        a: 'Python',
        b: 'JavaScript',
        c: 'PHP',
        d: 'C#',
        correta: 'a',
    },
    {
        questao: 'Qual é a alternativa correta?',
        a: 'c',
        b: 'd',
        c: 'a',
        d: 'b',
        correta: 'c',
    },
]

// PASSO 1 - IDENTIFICAR ELEMENTOS
const QUIZ_TITULO = document.querySelector('h1')
const ALTERNATIVA_A = document.querySelector('#texto_a')
const ALTERNATIVA_B = document.querySelector('#texto_b')
const ALTERNATIVA_C = document.querySelector('#texto_c')
const ALTERNATIVA_D = document.querySelector('#texto_d')
const BOTAO = document.querySelector('button')
const QUIZ_CONTAINER = document.querySelector('.container')
const ALTERNATIVAS = document.querySelectorAll('.resposta')

// PASSO 2 - CRIAR EVENTOS
// PASSO 3 - CRIAR AS FUNÇÕES DOS EVENTOS