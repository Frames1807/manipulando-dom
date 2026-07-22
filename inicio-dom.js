// 1 - Acessando um elemento
// Document - representa toda a página/arquivo
// getElementById - é um método(função,ação) que procura um elemento pelo atributo ID
const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

// 2 - Alterando o conteúdo de um elemento
paragrafo.textContent = "Alterando o texto do paragrafo com JS"

// 3 - Alterando o estilo
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "2rem"

//  4 - Criando elementos
// createElement - Serve para criar um novo elemento HTML
const paragrafoJavaScript = document.createElement("p")

// 4.1 Atualizando o conteúdo do paragrafo
paragrafoJavaScript.textContent = "Este paragrafo foi criado com JavaScript"
paragrafoJavaScript.style.fontSize = "2rem"
paragrafoJavaScript.style.color = "pink"
paragrafoJavaScript.style.textAlign = "center"

// 4.2 - inserindo o paragrafo na página
// appendChild - serve para adicionarm um item ao final da página
document.body.appendChild(paragrafoJavaScript)

// 5 - removendo um elemento do HTML
// Capturando elemento de título pelo ID
const titulo = document.getElementById("titulo")

// 5.1 - removendo
titulo.remove()
