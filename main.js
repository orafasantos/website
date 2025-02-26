const buttons = document.querySelectorAll(".buttonwrapper button")
const textDivs = document.querySelectorAll(".contentWrapper")

// Inicialização - garante que nenhum conteúdo esteja visível
textDivs.forEach((div) => {
  div.classList.remove("show")
})

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove a classe 'active' de todos os botões
    buttons.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Remove a classe 'show' de todas as divs de conteúdo
    textDivs.forEach((div) => {
      div.classList.remove("show")
    })

    // Adiciona a classe 'show' à div correspondente ao botão clicado
    if (textDivs[index]) {
      textDivs[index].classList.add("show")
    }

    // Adiciona a classe 'active' ao botão clicado
    button.classList.add("active")
  })
})
