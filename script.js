$('.hd-links').click(() => {
    var id = $(this).attr('href'),
        targetOffset = $(id).offset()
    $('html, body').scrollTop(targetOffset, 2000)
    console.log(id)
})

var p = document.getElementById('bd-descript-t')

var tecs = document.querySelectorAll('.bd-tecs').forEach((e) => {
    e.addEventListener('mouseenter', (e) => {
        const el = e.target
        const id = el.id
        console.log(id)
        if (id == 'python-tecs') {
            p.innerText = 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.'
        } else if (id == 'html-tecs') {
            p.innerText = 'A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online.'
        } else if (id == 'css-tecs') {
            p.innerText = 'O Cascading Style Sheets (CSS) é uma "folha de estilo" composta por “camadas” e utilizada para definir a apresentação (aparência) em páginas da internet que adotam para o seu desenvolvimento linguagens de marcação (como XML, HTML e XHTML).'
        } else if (id == 'jq-tecs') {
            p.innerText = 'jQuery é um framework disponível para JavaScript que expõe diversas classes e métodos prontos para você usar e que facilitar a vida do desenvolvedor permitindo criar funções, efeitos, animações além da boa integração com AJAX.'
        } else if (id == 'js-tecs') {
            p.innerText = 'JavaScript é uma linguagem de script orientada a objetos, multiplataforma. É uma linguagem pequena e leve. Dentro de um ambiente de host (por exemplo, um navegador web) o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.'
        } else {
            p.innerText = 'O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.'
        }
    })
})

function mouseOut() {
    p.innerText = 'Passe o mouse sobre os icones das tecs!'
}
