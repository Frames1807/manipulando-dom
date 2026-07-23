// Clicar no button
// Mostrar o menu
// Clicar no button
// Fechar o menu

const btnMenu = document.getElementById("btn-menu")

// addEventListener = Serve para observar ações/eventos em elementos do HTML. E executar uma função quando esse evento acontece
btnMenu.addEventListener("click", abriMenu)

function abriMenu() {
    console.log("Clicou no menu")
}