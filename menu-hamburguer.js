// Clicar no button
// Mostrar o menu
// Clicar no button
// Fechar o menu

const btnMenu = document.getElementById("btn-menu")
const navPrincipal = document.getElementById("navegacao-primaria")
const icone = btnMenu.querySelector("i")

console.log(navPrincipal)

// addEventListener = Serve para observar ações/eventos em elementos do HTML. E executar uma função quando esse evento acontece
btnMenu.addEventListener("click", abrirMenu)

function abrirMenu() {
//   navPrincipal.style.display = "block"

navPrincipal.classList.toggle("nav-ativa")


// Verifica se o menu está aberto. O método contains, retorna verdadeiro ou falso
const menuAberto = navPrincipal.
classList.contains("nav-ativa")

// Atualiza acessibilidade
btnMenu.setAttribute("aria-expanded", menuAberto)

if(menuAberto){
    icone.classList.remove("bi-list")
    icone.classList.add("bi-x")
} else {
   icone.classList.remove("bi-x")
    icone.classList.add("bi-list")  
}
}
