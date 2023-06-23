// passo 1 - pegar no js o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuario no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {

  // passo 6 - verificar se o body ja tem a classe modo-escuro
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
  
  //Serve para add e remove a ação modo escuro, eliminando as linhas 22 e 29, se apagar a linha 22 e 29 a ação pedida continuará sendo realizada.
   body.classList.toggle("modo-escuro")

  if (modoEscuroEstaAtivo) {
    // passo 7 - remove a classe do modo-escuro do body
    body.classList.remove("modo-escuro");

    // passo 8 - trocar a imagem do botão de alterar tema para sol
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
  } else {

    // passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    // passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
  }
});