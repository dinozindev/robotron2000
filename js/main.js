const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

// ao utilizarmos o forEach, aplicamos uma função arrow para cada elemento da array, em que quando o elemento .controle-ajuste(representado pela data-attribute 'data-controle') for clicado, será chamada a função manipulaDados, com os parâmetros de 'operacão', que irá buscar o elemento em que o evento ocorreu (data-controle) e o valor dele, e também irá buscar o parâmetro 'controle', que irá buscar o elemento pai de 'data-controle' (div class="controle"), possibilitando a funcionalidade dos botões em qualquer um dos 5 componentes do robô. 
// O botão também irá chamar a função 'atualizaEstatisticas' de acordo com o botão em que o evento foi acionado. 

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (e) => {
        manipulaDados(e.target.dataset.controle, e.target.parentNode);
        atualizaEstatisticas(e.target.dataset.pecas, e.target.dataset.controle);
    })
})

// a function manipulaDados possui dois parâmetros, um buscando o valor de "data-controle", e o outro buscando o elemento pai dos botões. A const peca irá buscar a data-attribute "data-contador" dentro do elemento pai 'controle'. Quando o botão for clicado, e o valor de "data-contador" encontrado for '-' (menos), será subtraido 1 do valor de peca. Caso o valor encontrado não seja '-', ou seja, se o botão de adicionar for pressionado, será adicionado 1 ao valor de peca.

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
    if(operacao === "-") {
      peca.value = parseInt(peca.value) - 1  
    } else {
      peca.value = parseInt(peca.value) + 1  
    }
}

// quando a function 'atualizaEstatisticas' for chamada, aplicamos uma função arrow para cada elemento na array através de forEach, em que transformaremos o valor em string de 'data-estatistica' em valor em número através de parseInt. Ao clicar em determinada peça, iremos atualizar/somar/subtrair o valor das data-estatistica através do valor em const pecas para x peça;

// se o valor do parâmetro 'operacao' for '-', removeremos o valor da peça clicada de data-estatistica. Caso contrário, adicionaremos o valor especificado ao valor de data-estatistica;

// - pecas[peca] --> irá buscar qual valor aplicar baseado na peça clicada (e.target.dataset.pecas). Ex: pecas['braco'] --> irá aplicar os valores de braco às estatísticas 'forca', 'poder', 'energia' e 'velocidade';
// - [elemento.dataset.estatistica] --> data-attribute no qual o valor será adicionado.


function atualizaEstatisticas(peca, operacao) {
  
  estatistica.forEach ( (elemento) => {

    if(operacao === '-') {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    } else {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]    
    }
  
})
}