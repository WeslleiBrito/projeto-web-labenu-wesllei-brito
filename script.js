const carrinhoCursos = []

const cursos = [{
        curso: 'HTML e CSS',
        descricao: 'O curso é voltado para o desenvolvimento frontand',
        duracao: '1 mês',
        valor: 500.00,
    },

    {
        curso: 'JavaScript',
        descricao: 'Foco no backand ',
        duracao: '2 mês',
        valor: 900.00
    },

    {
        curso: 'APIs REST',
        descricao: 'Ferramenta para ligação entre sistemas',
        duracao: '6 meses',
        valor: 2000.00
    }
]

function listarCursos() {

    const nomeCursos = cursos.map(objeto => (objeto.curso))
    const selecao = document.getElementById('cursos-selecao')
    selecao.innerHTML = ''
    selecao.innerHTML = '<option value="" disabled >Selecione</option>'

    for (nome of nomeCursos) {

        const opcao = document.createElement('option')

        opcao.innerHTML = nome
        opcao.setAttribute('value', nome)

        selecao.appendChild(opcao)
    }

    listarTurmas()

}

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
        curso: 'APIs REST',
        inicio: '20/03/2022',
        termino: '20/06/2022',
        numeroDeAlunos: 100,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Elion',
        curso: 'APIs REST',
        inicio: '12/01/2022',
        termino: '12/06/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Burnell',
        curso: 'APIs REST',
        inicio: '18/10/2022',
        termino: '18/04/2023',
        numeroDeAlunos: 90,
        periodo: 'Integral',
        concluido: false
    },
]

function listarTurmas() {
    nomeCurso = document.getElementById('cursos-selecao').value
    const selecao = document.getElementById('turmas')
    selecao.innerHTML = ""
    selecao.innerHTML = '<option value="" disabled >Selecione</option>'
    const turmasAtivas = turmas.filter(objeto => (objeto.curso === nomeCurso && !objeto.concluido))

    for (turma of turmasAtivas) {

        const opcao = document.createElement('option')

        opcao.innerHTML = turma.turma
        opcao.setAttribute('value', turma.turma)

        selecao.appendChild(opcao)
    }
}


const verificarTurmasAbertas = (nomeCurso = "") => {
    if (nomeCurso) {
        return turmas.filter(objeto => (objeto.curso.toLowerCase().includes(nomeCurso.toLowerCase()) && !objeto.concluido))
    }

    return turmas.filter(objeto => (!objeto.concluido))

}

const turmasAbertas = verificarTurmasAbertas()


function renderizaOpcoesNoHtml() {
    const caixaDeSelecao = document.getElementById('cursos')
    console.log(caixaDeSelecao.value)
}


const estutantes = [{
        estudante: 'Chris Evans',
        turma: ['Hipátia'],
        curso: ['Javascript'],
        valor: [900.00],
        nParcelas: [9],
        desconto: [false],
        parcelas: [100.00],
        statusPay: [true]
    },

    {
        estudante: 'Halle Berry',
        turma: ['Burnel'],
        curso: ['APIsRest'],
        valor: [2000.00],
        nParcelas: [4],
        desconto: [false],
        parcelas: [500.00],
        statusPay: [true]
    },

    {
        estudante: 'Lashana lynch',
        turma: ['Zhenyi'],
        curso: ['HTML e CSS'],
        valor: [500.00],
        nParcelas: [1],
        desconto: [true],
        parcelas: [500.00],
        statusPay: [true]
    },
]

function arredonadaParaCima(valor) {

    const valorInteiro = parseInt(valor)
    let arredondado = valorInteiro

    if ((valor - arredondado < 0.5) && (valor - arredondado > 0)) {
        arredondado = valorInteiro + 0.50
        return `${String(arredondado).replace('.', ',')}0`
    } else if (valor > arredondado) {
        return `${arredondado + 1},00`
    } else {
        return `${valor},00`
    }
}

function somarValorArray(arrayDeNumeros) {
    let soma = 0

    for (valor of arrayDeNumeros) {
        soma += valor
    }

    return soma
}

function parelarCurso(parcela, curso, arrayDeValores) {
    let valorParcela = arredonadaParaCima(somarValorArray(arrayDeValores) / parcela)
    let valorTotal = somarValorArray(arrayDeValores)


    switch (arrayDeValores.length) {
        case 3:
            valorTotal *= 0.85
            break
        case 2:
            valorTotal *= 0.90
            break
    }

    if (parcela <= 2) {
        valorTotal = valorTotal - somarValorArray(arrayDeValores) * 0.2
        valorParcela = arredonadaParaCima(valorTotal / parcela)
        return [true, `O curso ${curso} ficou no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela} reais. Foi concedido mais um desconto de 20%, por conta do número de parcela ser menor que 3.`]
    } else {
        return [false, `O curso ${curso} ficou no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela} reais.`]

    }
}

function buscarCurso(nomeCurso) {

    const dadosCurso = cursos.filter(objeto => objeto.curso.includes(nomeCurso))

    return dadosCurso
}

function buscarTurma(nomeTurma = "") {
    if (nomeTurma) {

        const pesquisa = turmas.filter((objeto) => { return objeto.turma.toLowerCase().includes(nomeTurma.toLowerCase()) })
        return pesquisa.length > 0 ? pesquisa : 'Turma não encontrada!'


    } else {

        return turmas
    }

}

function buscaAutomatica() {
    const textoInput = document.getElementById('caixa-busca')
    const listaTurma = buscarTurma(textoInput.value)
    criarCard(listaTurma)

}

function buscaBotao() {
    const textoInputBusca = document.getElementById('caixa-busca')
    const listaTurmas = buscarTurma(textoInputBusca.value)
    criarCard(listaTurmas)

}

function buscarEstudante(nomeEstudante) {
    const dadosEstudantes = estutantes.filter((objeto) => { return objeto.estudante.includes(nomeEstudante) })[0]

    return dadosEstudantes ? dadosEstudantes : 'Aluno não encontrado'
}

function matricular(event) {

    event.preventDefault()


    let retorno
    const nome = document.getElementById('nome')
    const curso = document.getElementById('cursos-selecao')
    const turma = document.getElementById('turmas')
    const numeroDeParcelas = document.getElementById('numero-de-parcelas')

    const parametros = [nome.value, curso.value, turma.value, numeroDeParcelas.value]
    const stringCampos = ['Nome', 'Curso', 'Turma', 'Número de parcelas']
    const camposNaopreencidos = []

    for (let i = 0; i < parametros.length; i++) {
        if (!parametros[i]) {
            camposNaopreencidos.push(stringCampos[i])
        }
    }

    if (camposNaopreencidos.length === 0) {

        estutantes.push({
            estudante: nome.value,
            turma: turma.value,
            curso: curso.value,
            valor: buscarCurso(curso.value)[0].valor,
            nParcelas: Number(numeroDeParcelas.value),
            desconto: parelarCurso(Number(numeroDeParcelas.value), curso.value, [curso.value])[0],
            parcelas: arredonadaParaCima(buscarCurso(curso.value)[0].valor / Number(numeroDeParcelas.value))
        })

        nome.value = ''
        curso.value = ''
        turma.value = ''
        numeroDeParcelas.value = ''


        retorno = estutantes[estutantes.length - 1]
        console.log(retorno)

    } else {
        let strCampos = String(camposNaopreencidos)
        let contador = 0
        let ultimaVirgula = 0


        if (camposNaopreencidos.length === 1) {

            retorno = `O campo ${strCampos}, não foi preenchido.`
        }

        strCampos = strCampos.replaceAll(',', ', ')

        for (caracter of strCampos) {
            contador++
            if (caracter === ',') {
                ultimaVirgula = contador
            }

        }

        strCampos = strCampos.slice(0, ultimaVirgula - 1) + strCampos.slice(ultimaVirgula - 1).replace(', ', ' e ')

        retorno = `Os campos ${strCampos}, não foram preenchidos.`
    }

    confirmarMatricula(retorno)

}

function adicionarItemAoCarrinho(nomeCurso, callback) {
    carrinhoCursos.push(callback(nomeCurso)[0])
}

function confirmarMatricula(resultado) {

    if (typeof resultado === "object") {
        const divImagem = document.querySelector('.titulo-imagem')

        const titulo = document.getElementById('titulo')
        const status = document.getElementById('li-matriculado')
        const nome = document.getElementById('li-nome-aluno')
        const curso = document.getElementById('li-curso')
        const turma = document.getElementById('li-turma')

        if (!document.getElementById('imagem-de-confirmacao')) {
            const imagem = document.createElement('img')
            imagem.setAttribute('src', "./assets/img/sinal-de-confirmado.png")
            imagem.setAttribute('id', "imagem-de-confirmacao")
            divImagem.appendChild(imagem)
        }


        titulo.innerHTML = 'Aluno Matriculado'
        status.innerHTML = 'Aluno Matriculado'
        nome.innerHTML = `Nome: ${resultado.estudante}`
        curso.innerHTML = `Curso: ${resultado.curso}`
        turma.innerHTML = `Turma: ${resultado.turma}`

        const div = document.querySelector('.status-matricula-off')
        div.setAttribute('class', 'status-matricula')
    } else {
        alert(resultado)
    }

}

function ocultarStatusAluno() {
    const div = document.querySelector('.status-matricula')
    div.setAttribute('class', 'status-matricula-off')
}


function relatorioEstudante(nomeEstudante) {
    const dadosEstudantes = estutantes.filter((objeto) => { return objeto.estudante === nomeEstudante })[0]

    return `Aluno: ${dadosEstudantes.estudante}\nTurma: ${dadosEstudantes.turma}\nCurso: ${dadosEstudantes.curso}\nValor Total: ${dadosEstudantes.valor}\nValor Parcela: ${dadosEstudantes.parcelas}\nNº Parcelas: ${dadosEstudantes.nParcelas}`
}

function imprimir(dados) {
    console.log(dados)
}

function criarCard(listaTurma) {
    if (document.getElementById('aluno-nao-encontrado')) {
        const removeMensagem = document.getElementById('aluno-nao-encontrado')
        removeMensagem.parentNode.removeChild(removeMensagem)
    }

    if (document.getElementById('cards')) {
        const removeCards = document.getElementById('cards')
        removeCards.parentNode.removeChild(removeCards)
    }

    const curso = document.querySelector('.cursos')

    const cards = document.createElement('div')
    cards.setAttribute('id', 'cards')
    curso.appendChild(cards)

    if (typeof listaTurma === 'object') {

        for (dicionario of listaTurma) {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const turma = document.createElement('h4')
            turma.appendChild(document.createTextNode(`${dicionario.turma}`))
            card.appendChild(turma)

            const listaUl = document.createElement('ul')

            const curso = document.createElement('li')
            curso.innerHTML = `<span class="titulo">Curso: </span>${dicionario.curso}`

            const inicio = document.createElement('li')
            inicio.innerHTML = `<span class="titulo">Início: </span>${dicionario.inicio}`

            const termino = document.createElement('li')
            termino.innerHTML = `<span class="titulo">Término: </span>${dicionario.termino}`

            const numeroDeAlunos = document.createElement('li')
            numeroDeAlunos.innerHTML = `<span class="titulo">Número de alunos: </span>${dicionario.numeroDeAlunos}`

            const periodo = document.createElement('li')
            periodo.innerHTML = `<span class="titulo">Período: </span>${dicionario.periodo}`

            const concluido = document.createElement('li')
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
    } else {
        if (!document.getElementById('aluno-nao-encontrado')) {
            const mensagem = document.createElement('p')
            mensagem.setAttribute('id', 'aluno-nao-encontrado')
            mensagem.innerHTML = `${listaTurma}`
            curso.appendChild(mensagem)
        }

    }

}

function removeItemCarrinho(event) {

    event.target.parentNode.remove()
}

function verificaItensCarrinho() {
    const cursosLabEscola = cursos.map(objeto => (objeto.curso))
    const cursosCarrinho = carrinhoCursos.map(objeto => (objeto.curso))
    const novaLista = [...cursosLabEscola]

    for (curso of cursosLabEscola) {
        if (cursosCarrinho.includes(curso)) {
            novaLista.splice(novaLista.indexOf(curso), 1)
        }
    }

    return novaLista
}


function criaItemCarrinho(listaDeCursos) {

    const carrinho = document.querySelector('.carrinho')
    for (curso of listaDeCursos) {
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        const p = document.createElement('p')
        const imagem = document.createElement('img')

        p.innerHTML = curso
        imagem.setAttribute('src', './assets/img/cancelar_item_x.png')
        imagem.setAttribute('onclick', '{removeItemCarrinho(event)}')

        div.appendChild(p)
        div.appendChild(imagem)

        carrinho.appendChild(div)

    }

}

criaItemCarrinho(verificaItensCarrinho())

function exibeTelaAddCurso(listaDeCursos) {


    const containerCarrinho = document.createElement('div')
    containerCarrinho.setAttribute('id', 'container-add')

    for (curso of listaDeCursos) {
        const dadosCurso = buscarCurso(curso)

        const itemCarrinho = document.createElement('div')
        itemCarrinho.setAttribute('id', 'item-carrinho')

        const nomeCurso = document.createElement('p')
        nomeCurso.innerHTML = `<span>Curso:</span> ${dadosCurso[0].curso}`

        const descricaoCurso = document.createElement('p')
        descricaoCurso.innerHTML = `<span>Descrição:</span> ${dadosCurso[0].descricao}`

        const divDuracaoValor = document.createElement('div')
        const duracaoCurso = document.createElement('p')
        duracaoCurso.innerHTML = `<span>Duração:</span> ${dadosCurso[0].duracao}`
        const valorCurso = document.createElement('p')
        valorCurso.innerHTML = `<span>Duração:</span> ${dadosCurso[0].valor}`
        divDuracaoValor.appendChild(duracaoCurso)
        divDuracaoValor.appendChild(valorCurso)

        const btnComprar = document.createElement('button')

        itemCarrinho.appendChild(nomeCurso)
        itemCarrinho.appendChild(descricaoCurso)
        itemCarrinho.appendChild(divDuracaoValor)
        itemCarrinho.appendChild(btnComprar)

        containerCarrinho.appendChild(itemCarrinho)

    }

    const posicao = document.querySelector('.financeiro button')

    posicao.insertAdjacentElement('afterend', containerCarrinho)
}

exibeTelaAddCurso(['JavaScript', 'HTML e CSS', 'APIs REST'])