const turmas = [{
        turma: 'Hipátia',
        curso: 'JavaScript',
        inicio: '30/11/2022',
        termino: '30/01/2023',
        numeroDeAlunos: 150,
        periodo: 'Noturno',
        concluido: false
    },

    {
        turma: 'Sibyla',
        curso: 'JavaScript',
        inicio: '30/10/2022',
        termino: '30/12/2022',
        numeroDeAlunos: 200,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Curie',
        curso: 'HTML e CSS',
        inicio: '15/09/2022',
        termino: '15/10/2022',
        numeroDeAlunos: 180,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Zhenyi',
        curso: 'HTML e CSS',
        inicio: '01/11/2022',
        termino: '01/01/2023',
        numeroDeAlunos: 80,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Clarke',
        curso: 'HTML e CSS',
        inicio: '04/07/2022',
        termino: '04/09/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Blackwell',
        curso: 'APIsREST',
        inicio: '20/03/2022',
        termino: '20/06/2022',
        numeroDeAlunos: 100,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Elion',
        curso: 'APIsREST',
        inicio: '12/01/2022',
        termino: '12/06/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Burnell',
        curso: 'APIsREST',
        inicio: '18/10/2022',
        termino: '18/04/2023',
        numeroDeAlunos: 90,
        periodo: 'Integral',
        concluido: false
    },
]

function criarListaCurso() {
    let cards = document.querySelector('.cards')

    console.log(cards)
    
    for (dicionario of turmas) {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let turma = document.createElement('h4')
        turma.appendChild(document.createTextNode(`${dicionario.turma}`))
        card.appendChild(turma)
        let listaUl = document.createElement('ul')

        let curso = document.createElement('li')
        curso.innerHTML = `<span class="titulo">Curso: </span>${dicionario.curso}`

        let inicio = document.createElement('li')
        inicio.innerHTML = `<span class="titulo">Início: </span>${dicionario.inicio}`

        let termino = document.createElement('li')
        termino.innerHTML = `<span class="titulo">Término: </span>${dicionario.termino}`

        let numeroDeAlunos = document.createElement('li')
        numeroDeAlunos.innerHTML = `<span class="titulo">Número de alunos: </span>${dicionario.numeroDeAlunos}`

        let periodo = document.createElement('li')
        periodo.innerHTML = `<span class="titulo">Período: </span>${dicionario.periodo}`
        
        let concluido = document.createElement('li')
        concluido.innerHTML = `<span class="titulo">Concluido: </span>${dicionario.concluido ? 'Sim' : 'Não'}`

        listaUl.appendChild(curso)
        listaUl.appendChild(inicio)
        listaUl.appendChild(termino)
        listaUl.appendChild(numeroDeAlunos)
        listaUl.appendChild(periodo)
        listaUl.appendChild(concluido)

        card.appendChild(listaUl)
        cards.appendChild(card)

    }
}

criarListaCurso()
