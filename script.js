const carrinhoCursos = []
let exibeAutomaticaTelaAddCurso = 0

function modificaStatusExibeTela(valor) {

    if (valor > 0 && exibeAutomaticaTelaAddCurso < 3) {
        exibeAutomaticaTelaAddCurso += valor
        return true
    } else if (valor < 0 && (exibeAutomaticaTelaAddCurso > 0 && exibeAutomaticaTelaAddCurso < 3)) {
        exibeAutomaticaTelaAddCurso += valor
        return true
    }

    return false
}

function clickAtivaTela() {

    if (carrinhoCursos.length < 3) {
        exibeAutomaticaTelaAddCurso = carrinhoCursos.length
    }

}
function aterarTextoBotaoAdd(){
    console.log('Funcionando')
    const btnAdd = document.getElementById('add-curso')

    if(btnAdd){
        if(carrinhoCursos < 1){
            btnAdd.innerHTML = 'Click aqui para inserir o primero curso'
        }else{
            btnAdd.innerHTML = 'Adicionar outro curso'
        }
    }
}
function ativaDesativBtnAddCurso() {

    if (carrinhoCursos.length === 3) {

        document.getElementById('container-add').remove()
    }

}

const cursos = [{
        curso: 'HTML e CSS',
        descricao: 'O curso é voltado para o desenvolvimento front-end.',
        duracao: '1 mês',
        valor: 500.00,
    },

    {
        curso: 'JavaScript',
        descricao: 'Foco no back-end.',
        duracao: '2 mês',
        valor: 900.00
    },

    {
        curso: 'APIs REST',
        descricao: 'Ferramenta para ligação entre sistemas.',
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


const estutantes = [{
        estudante: 'Chris Evans',
        turma: 'Hipátia',
        curso: 'Javascript',
        valor: 900.00,
        nParcelas: 9,
        desconto: false,
        parcelas: 100.00,
    },

    {
        estudante: 'Halle Berry',
        turma: 'Burnel',
        curso: 'APIsRest',
        valor: 2000.00,
        nParcelas: 4,
        desconto: false,
        parcelas: 500.00,
        statusPay: true
    },

    {
        estudante: 'Lashana lynch',
        turma: 'Zhenyi',
        curso: 'HTML e CSS',
        valor: 500.00,
        nParcelas: 1,
        desconto: true,
        parcelas: 500.00,
        statusPay: true
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

function resumoParcelamento(event) {
    event.preventDefault()
    
    arrayDeValores = carrinhoCursos.map(objeto => (objeto.valor))
    arrayCursos = carrinhoCursos.map(objeto => (objeto.curso))
    parcelas = document.getElementById('n-parcelas').value
 
    if(carrinhoCursos && parcelas){
        const retorno = parcelarCurso(parcelas, arrayCursos, arrayDeValores)
        
        titulo = document.getElementById('p-titulo-resumo-valor')
        titulo.innerHTML = 'Valor'
        const mensagemTela = document.getElementById('resumo-valor-compra')

        mensagemTela.innerHTML = retorno
    }else{
        alert('Preencha todos os campos')
    }
    



}


function parcelarCurso(parcela, cursos, arrayDeValores) {
    let valorParcela = arredonadaParaCima(somarValorArray(arrayDeValores) / parcela)
    let valorTotal = somarValorArray(arrayDeValores)
    const valorTotalSemDesconto = somarValorArray(arrayDeValores)
    let pluralCurso = 'O curso'
    let pluraFicou = 'ficou'

    cursos = String(cursos).replaceAll(',', ', ')

    switch (arrayDeValores.length) {
        case 3:
            valorTotal *= 0.85
            break
        case 2:
            valorTotal *= 0.90
            break
    }

    if (carrinhoCursos.length > 1) {
        pluralCurso = 'Os cursos'
        pluraFicou = 'ficaram'
    }

    if (parcela <= 2) {
        valorTotal = valorTotal - somarValorArray(arrayDeValores) * 0.2
        valorParcela = arredonadaParaCima(valorTotal / parcela)
        return `${pluralCurso} ${cursos} ${pluraFicou} no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela}. Foi concedido mais um desconto de 20%, pois o número de parcelas são menores que 3.`
    } else {
        return `${pluralCurso} ${cursos} ${pluraFicou} no valor total de R$ ${arredonadaParaCima(valorTotal)}. Em ${parcela}x de ${valorParcela} reais.`

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
    const dadosEstudantes = estutantes.find((objeto) => { return objeto.estudante.toLocaleLowerCase().includes(nomeEstudante.toLocaleLowerCase()) })

    return dadosEstudantes ? dadosEstudantes : 'Aluno não encontrado'
}

function exibeBuscarEstudante(event) {
    event.preventDefault()
    const nome = document.getElementById('nome').value

    if (nome) {
        const resultadoPesquisa = buscarEstudante(nome)
        if (typeof resultadoPesquisa === 'object') {
            const aluno = document.getElementById('aluno')
            aluno.innerHTML = `Aluno: ${resultadoPesquisa.estudante}`
            const turma = document.getElementById('turma')
            turma.innerHTML = `Turma: ${resultadoPesquisa.turma}`
            const curso = document.getElementById('curso')
            curso.innerHTML = `Curso: ${resultadoPesquisa.curso}`
            const valor = document.getElementById('valor-total')
            valor.innerHTML = `Valor: R$${resultadoPesquisa.valor}`
            const parcelas = document.getElementById('valor-parcela')
            parcelas.innerHTML = `Parcelas: R$${resultadoPesquisa.parcelas}`
            const nparcelas = document.getElementById('numero-parcelas')
            nparcelas.innerHTML = `Parcelas: ${resultadoPesquisa.nParcelas}`
        } else {
            document.getElementById('aluno').innerHTML = resultadoPesquisa
        }

    } else {
        alert('Informe o nome do aluno que deseja localizar no campo de busca.')
    }

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
            desconto: Number(numeroDeParcelas.value) < 3 ? 'Sim' : 'Não',
            parcelas: arredonadaParaCima(buscarCurso(curso.value)[0].valor / Number(numeroDeParcelas.value))
        })

        nome.value = ''
        curso.value = ''
        turma.value = ''
        numeroDeParcelas.value = ''


        retorno = estutantes[estutantes.length - 1]

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
    console.log(retorno)
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
        aterarTextoBotaoAdd()
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
    const cursoARemover = event.target.attributes[2].value

    for (let i = 0; i < carrinhoCursos.length; i++) {
        if (carrinhoCursos[i].curso === cursoARemover) {
            carrinhoCursos.splice(i, 1)
        }
    }

    event.target.parentNode.remove()

    aterarTextoBotaoAdd()

    if (modificaStatusExibeTela(-1)) {
        exibeTelaAddCurso(verificaItensCarrinho())
    }

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

function incluirItemNaLista(curso) {

    const carrinho = document.querySelector('.carrinho')

    const div = document.createElement('div')
    div.setAttribute('class', 'item')
    const p = document.createElement('p')
    const imagem = document.createElement('img')

    p.innerHTML = curso
    imagem.setAttribute('src', './assets/img/cancelar_item_x.png')
    imagem.setAttribute('onclick', '{removeItemCarrinho(event)}')
    imagem.setAttribute('value', `${curso}`)

    div.appendChild(p)
    div.appendChild(imagem)

    carrinho.appendChild(div)

}

function fecharTelaCarrinho() {
    document.getElementById('container-add').remove()
    exibeAutomaticaTelaAddCurso = 3
}

function exibeTelaAddCurso() {
    if (carrinhoCursos.length < 3 && exibeAutomaticaTelaAddCurso < 3) {
        const listaDeCursos = verificaItensCarrinho()
        if (document.getElementById('container-add')) {
            document.getElementById('container-add').remove()
        }

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
            divDuracaoValor.setAttribute('id', 'duracao-valor')
            const duracaoCurso = document.createElement('p')
            duracaoCurso.innerHTML = `<span>Duração:</span> ${dadosCurso[0].duracao}`
            const valorCurso = document.createElement('p')
            valorCurso.innerHTML = `<span>Valor:</span> ${arredonadaParaCima(dadosCurso[0].valor)}`
            divDuracaoValor.appendChild(duracaoCurso)
            divDuracaoValor.appendChild(valorCurso)

            const btnComprar = document.createElement('div')
            btnComprar.setAttribute('id', 'div-btn-comprar')
            const icon = document.createElement('img')

            icon.setAttribute('src', './assets/img/bag-add-outline.svg')
            icon.setAttribute('value', `${dadosCurso[0].curso}`)
            icon.setAttribute('onclick', '{eventoInserirItemCarrinho(event)}')
            btnComprar.appendChild(icon)

            itemCarrinho.appendChild(nomeCurso)
            itemCarrinho.appendChild(descricaoCurso)
            itemCarrinho.appendChild(divDuracaoValor)
            itemCarrinho.appendChild(btnComprar)

            containerCarrinho.appendChild(itemCarrinho)


        }

        const btnFechar = document.createElement('img')
        btnFechar.setAttribute('src', './assets/img/btn-fechar.svg')
        btnFechar.setAttribute('id', 'btn-fechar')
        btnFechar.setAttribute('onclick', '{fecharTelaCarrinho()}')

        containerCarrinho.appendChild(btnFechar)
        const posicao = document.querySelector('.financeiro button')

        posicao.insertAdjacentElement('afterend', containerCarrinho)
    }
}

function eventoInserirItemCarrinho(event) {
    const curso = event.target.attributes[1].value
    adicionarItemAoCarrinho(curso, buscarCurso)
    incluirItemNaLista(curso)

    if (modificaStatusExibeTela(1)) {
        exibeTelaAddCurso(verificaItensCarrinho())
    }

    ativaDesativBtnAddCurso()
    aterarTextoBotaoAdd()
}

function renderizaTurmas() {

    if (document.querySelector('.compra')) {
        document.querySelector('.compra').remove()
    }

    if (document.querySelector('.area-matricula')) {
        document.querySelector('.area-matricula').remove()
    }

    if (document.querySelector('.cursos')) {
        document.querySelector('.cursos').remove()
    }

    const caminhoStyle = document.getElementById('style')
    caminhoStyle.setAttribute('href', './assets/styles/style_turmas.css')

    const container = document.querySelector('.container')
    const sectionCurso = document.createElement('section')
    sectionCurso.setAttribute('class', 'cursos')

    const divPesquisar = document.createElement('div')
    divPesquisar.setAttribute('class', 'pesquisar')

    const inputPesquisar = document.createElement('input')
    inputPesquisar.setAttribute('type', 'text')
    inputPesquisar.setAttribute('name', 'caixa-busca')
    inputPesquisar.setAttribute('id', 'caixa-busca')
    inputPesquisar.setAttribute('placeholder', 'Digite o nome da turma!')
    inputPesquisar.setAttribute('onkeyup', '{buscaAutomatica()}')

    const botao = document.createElement('button')
    botao.innerHTML = 'Buscar'
    botao.setAttribute('id', 'btn-buscar')
    botao.setAttribute('onclick', '{buscaBotao()}')

    divPesquisar.appendChild(inputPesquisar)
    divPesquisar.appendChild(botao)
    sectionCurso.appendChild(divPesquisar)
    container.appendChild(sectionCurso)

    criarCard(buscarTurma())

}

function renderizaFinanceiroAluno() {

    const caminhoStyle = document.getElementById('style')
    caminhoStyle.setAttribute('href', './assets/styles/style_financeiro_aluno.css')

    if (document.querySelector('.compra')) {
        document.querySelector('.compra').remove()
    }

    if (document.querySelector('.cursos')) {
        document.querySelector('.cursos').remove()
    }

    if (document.querySelector('.area-matricula')) {
        document.querySelector('.area-matricula').remove()
    }


    const container = document.querySelector('.container')
    const sectionCompra = document.createElement('section')
    sectionCompra.setAttribute('class', 'compra')

    const sectionFinanceiro = document.createElement('section')
    sectionFinanceiro.setAttribute('class', 'financeiro')
    const pTitulo = document.createElement('p')
    const pTituloPadrao = document.createElement('p')

    pTitulo.setAttribute('class', 'titulo')
    pTitulo.innerHTML = 'Financeiro'

    pTituloPadrao.setAttribute('class', 'titulo-padrao')
    pTituloPadrao.innerHTML = 'Curso'

    const divCarrinho = document.createElement('div')
    divCarrinho.setAttribute('class', 'carrinho')

    const botaoAddCurso = document.createElement('button')
    botaoAddCurso.setAttribute('id', 'add-curso')

    botaoAddCurso.setAttribute('onclick', '{clickAtivaTela(), exibeTelaAddCurso()}')
    botaoAddCurso.innerHTML = 'Click aqui para inserir o primero curso'

    const lableAddNParcela = document.createElement('label')
    lableAddNParcela.setAttribute('for', 'add-curso')
    lableAddNParcela.setAttribute('class', 'titulo-padrao')
    lableAddNParcela.innerHTML = 'Número de parcelas'

    const inputNParcelas = document.createElement('input')
    inputNParcelas.setAttribute('type', 'number')
    inputNParcelas.setAttribute('name', 'n-parcelas')
    inputNParcelas.setAttribute('id', 'n-parcelas')
    inputNParcelas.setAttribute('class', 'input-parcelas')
    inputNParcelas.setAttribute('min', '1')
    inputNParcelas.setAttribute('max', '10')

    const botaoVerValor = document.createElement('button')
    botaoVerValor.setAttribute('id', 'btn-ver-valor')
    botaoVerValor.setAttribute('onclick', '{resumoParcelamento(event)}')

    botaoVerValor.innerHTML = 'Ver valor'

    const pValor = document.createElement('p')
    pValor.setAttribute('id', 'p-titulo-resumo-valor')

    const pResumo = document.createElement('p')
    pResumo.setAttribute('id', 'resumo-valor-compra')

    const listaDeElementos = [
        pTitulo,
        pTituloPadrao,
        divCarrinho,
        botaoAddCurso,
        lableAddNParcela,
        inputNParcelas,
        botaoVerValor,
        pValor,
        pResumo
    ]

    for (let elemento of listaDeElementos) {
        sectionFinanceiro.appendChild(elemento)
    }

    sectionCompra.appendChild(sectionFinanceiro)
    sectionCompra.appendChild(renderizaRelatorioAluno())
    container.appendChild(sectionCompra)

}

function renderizaRelatorioAluno() {

    const sectionRelatorioAluno = document.createElement('section')
    sectionRelatorioAluno.setAttribute('id', 'relatorio-aluno')

    const pTitulo = document.createElement('p')
    pTitulo.setAttribute('class', 'titulo')
    pTitulo.innerHTML = 'Relatório Aluno'

    const lableNome = document.createElement('label')
    lableNome.innerHTML = 'Nome'
    lableNome.setAttribute('for', 'nome')
    lableNome.setAttribute('class', 'titulo-padrao')

    const inputNome = document.createElement('input')
    inputNome.setAttribute('id', 'nome')
    inputNome.setAttribute('type', 'text')
    inputNome.setAttribute('name', 'nome')
    const botaoBuscar = document.createElement('button')

    botaoBuscar.setAttribute('id', 'btn-buscar')
    botaoBuscar.setAttribute('onclick', '{exibeBuscarEstudante(event)}')
    botaoBuscar.innerHTML = 'Buscar'


    const ulRelatorio = document.createElement('ul')
    ulRelatorio.setAttribute('class', 'relatorio')
    const liAluno = document.createElement('li')
    liAluno.setAttribute('id', 'aluno')
    const liTurma = document.createElement('li')
    liTurma.setAttribute('id', 'turma')
    const liCurso = document.createElement('li')
    liCurso.setAttribute('id', 'curso')
    const liValorTotal = document.createElement('li')
    liValorTotal.setAttribute('id', 'valor-total')
    const liValorParcela = document.createElement('li')
    liValorParcela.setAttribute('id', 'valor-parcela')
    const liNumeroParcela = document.createElement('li')
    liNumeroParcela.setAttribute('id', 'numero-parcelas')

    const listaLi = [liAluno, liTurma, liCurso, liValorTotal, liValorParcela, liNumeroParcela]

    for (const li of listaLi) {
        ulRelatorio.appendChild(li)
    }

    const listaRelatorioAluno = [pTitulo, lableNome, inputNome, botaoBuscar, ulRelatorio]

    for (const elemento of listaRelatorioAluno) {
        sectionRelatorioAluno.appendChild(elemento)
    }

    return sectionRelatorioAluno
}

function renderizaMatricula() {
    if (document.querySelector('.compra')) {
        document.querySelector('.compra').remove()
    }

    if (document.querySelector('.cursos')) {
        document.querySelector('.cursos').remove()
    }

    if (document.querySelector('.area-matricula')) {
        document.querySelector('.area-matricula').remove()
    }

    const caminhoStyle = document.getElementById('style')
    caminhoStyle.setAttribute('href', './assets/styles/style_matricula.css')

    const container = document.querySelector('.container')
    const sectionAreaMatricula = document.createElement('section')
    sectionAreaMatricula.setAttribute('class', 'area-matricula')

    const divMatricula = document.createElement('div')
    divMatricula.setAttribute('class', 'matricula')

    const pMatricula = document.createElement('p')
    pMatricula.innerHTML = 'Matrícula'

    const form = document.createElement('form')
    form.setAttribute('action', '#')

    const lableNome = document.createElement('label')
    lableNome.setAttribute('for', 'nome')
    lableNome.innerHTML = 'Nome'

    const inputNome = document.createElement('input')
    inputNome.setAttribute('type', 'text')
    inputNome.setAttribute('name', 'nome')
    inputNome.setAttribute('id', 'nome')

    const lableCurso = document.createElement('label')
    lableCurso.setAttribute('for', 'curso')
    lableCurso.innerHTML = 'Curso'

    const selectCurso = document.createElement('select')
    selectCurso.setAttribute('name', 'curso')
    selectCurso.setAttribute('id', 'cursos-selecao')

    const optionSelecione = document.createElement('option')
    optionSelecione.setAttribute('name', 'curso')
    optionSelecione.disabled = true

    selectCurso.appendChild(optionSelecione)

    const lableTurmas = document.createElement('label')
    lableTurmas.setAttribute('for', 'turmas')
    lableTurmas.innerHTML = 'Turma'

    const selectTurma = document.createElement('select')
    selectTurma.setAttribute('id', 'turmas')
    selectTurma.setAttribute('name', 'turma')

    const labelNumeroParcelas = document.createElement('label')
    labelNumeroParcelas.setAttribute('for', 'numero-de-parcelas')
    labelNumeroParcelas.innerHTML = 'Número de parcelas'

    const inputNumeroParcelas = document.createElement('input')
    inputNumeroParcelas.setAttribute('type', 'text')
    inputNumeroParcelas.setAttribute('name', 'numero-de-parcelas')
    inputNumeroParcelas.setAttribute('id', 'numero-de-parcelas')

    const botaoMatricular = document.createElement('button')
    botaoMatricular.setAttribute('id', 'btn-matricular')
    botaoMatricular.setAttribute('onclick', '{matricular(event)}')
    botaoMatricular.innerHTML = 'Matricular aluno'

    const listaForm = [lableNome, inputNome, lableCurso, selectCurso, lableTurmas, selectTurma, labelNumeroParcelas, inputNumeroParcelas, botaoMatricular]

    for (elemento of listaForm) {
        form.appendChild(elemento)
    }

    divMatricula.appendChild(pMatricula)
    divMatricula.appendChild(form)

    const divStatusMatricula = document.createElement('div')
    divStatusMatricula.setAttribute('class', 'status-matricula')

    const divTituloImagem = document.createElement('div')
    divTituloImagem.setAttribute('class', 'titulo-imagem')

    const pTitulo = document.createElement('p')
    pTitulo.setAttribute('id', 'titulo')

    divTituloImagem.appendChild(pTitulo)

    const listaDadosAluno = document.createElement('ul')
    listaDadosAluno.setAttribute('class', 'listar-dados-aluno')

    const liMatriculado = document.createElement('li')
    liMatriculado.setAttribute('id', 'li-matriculado')

    const liNomeAluno = document.createElement('li')
    liNomeAluno.setAttribute('id', 'li-nome-aluno')

    const liCurso = document.createElement('li')
    liCurso.setAttribute('id', 'li-curso')

    const liTurma = document.createElement('li')
    liTurma.setAttribute('id', 'li-turma')

    const listaRelatorio = [liMatriculado, liNomeAluno, liCurso, liTurma]

    for (const elemento of listaRelatorio) {
        listaDadosAluno.appendChild(elemento)
    }

    divMatricula.appendChild(pMatricula)
    divMatricula.appendChild(form)

    divStatusMatricula.appendChild(divTituloImagem)
    divStatusMatricula.appendChild(listaDadosAluno)

    sectionAreaMatricula.appendChild(divMatricula)
    sectionAreaMatricula.appendChild(divStatusMatricula)

    container.appendChild(sectionAreaMatricula)
}