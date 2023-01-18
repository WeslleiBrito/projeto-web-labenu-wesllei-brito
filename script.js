turmas = {
    turma: 'Hipátia',
    curso: 'JavaScript',
    inicio: '30/11/2022',
    termino: '30/01/2023',
    numeroDeAlunos: 150,
    periodo: 'Noturno',
    concluido: false
}

const ul = Object.assign(document.createElement('ul'), {
    id: 'turma'
})

const titulo = ['Turma', 'Curso', 'Início', 'Término', 'Número de alunos', 'Período', 'Concluído']
let posicaoTitulo = 0
let conteudo

for(chave in turmas){
    let li = document.createElement('li')

    if(chave != 'concluido'){
        conteudo = document.createTextNode(`${titulo[posicaoTitulo]}: ${turmas[chave]}`)
    }else{
        conteudo = document.createTextNode(`${titulo[posicaoTitulo]}: ${turmas[chave] ? 'Sim' : 'Não'}`)
    }
    
    li.appendChild(conteudo)
    ul.appendChild(li)
    posicaoTitulo++
}

const divCards = document.getElementById('cards')
document.body.insertBefore(ul, divCards)
console.log(ul)

/* let ul = document.createElement('ul')
let li = document.createElement('li')

let conteudoLi = document.createTextNode("Curso: Javascript")

li.appendChild(conteudoLi)

ul.appendChild(li)

console.log(ul) */
