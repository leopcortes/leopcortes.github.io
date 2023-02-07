let textoJogador = document.getElementById('textoJogador')
let botaoRecomecar = document.getElementById('botaoRecomecar')
let celulas = Array.from(document.getElementsByClassName('celula'))

let indicadorVencedor = getComputedStyle(document.body).getPropertyValue('--celulas-vencedoras')

const O_TEXTO = "O"
const X_TEXTO = "X"
let jogadorAtual = X_TEXTO
let espacos = Array(9).fill(null)

const comecarJogo = () => {
    celulas.forEach(celula => celula.addEventListener('click', celulaClicada))
}

function celulaClicada(e) {
    const id = e.target.id

    if(!espacos[id]){
        espacos[id] = jogadorAtual
        e.target.innerText = jogadorAtual

        if(jogadorVenceu() !== false){
            textoJogador.innerHTML = `${jogadorAtual} venceu!`
            let winning_blocks = jogadorVenceu()

            winning_blocks.map( celula => celulas[celula].style.backgroundColor=indicadorVencedor)
            return
        }

        jogadorAtual = jogadorAtual == X_TEXTO ? O_TEXTO : X_TEXTO
    }
}

const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function jogadorVenceu() {
    for (const condicao of combinacoesVitoria) {
        let [a, b, c] = condicao

        if(espacos[a] && (espacos[a] == espacos[b] && espacos[a] == espacos[c])) {
            return [a, b, c]
        }
    }
    return false
}

botaoRecomecar.addEventListener('click', recomecar)

function recomecar() {
    espacos.fill(null)

    celulas.forEach(celula => {
        celula.innerText = ''
        celula.style.backgroundColor = ''
    })

    textoJogador.innerHTML = 'Jogo da Velha'

    jogadorAtual = X_TEXTO
}

comecarJogo()