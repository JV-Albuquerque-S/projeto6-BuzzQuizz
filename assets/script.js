function getInfosQuizzes() {
  let quizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  quizzes.then((anwser) => {
    anwser.data.forEach((data) => {
      document.querySelector(
        ".quizes-da-pagina"
      ).innerHTML += `<section class="todos-os-quizzes" onclick="responderQuizz(${data.id})">
      <article class="quizes-pronto">
        <img
          src=${data.image}
          alt="Imagens da animação 'Os Simpsons'"
        />
        <div class="quiz-texto">
          <p>
            ${data.title}
          </p>
        </div>
      </article>
    </section>`;
    });
  });
}

function responderQuizz(quizzID) {
  document.querySelector(".quizes-da-pagina").innerHTML = ``;
  //Como mudar a cor pelo CSS
  // let ab = document.querySelector('.questao');
  // ab.style.cssText = 'background-color: blue';
  const quizInfo = axios.get(
    `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizzID}`
  );
  quizInfo.then(mostraQuizz);
}
let quests_certas = 0;
let marcadas = 0;

function selecAltern(alternativa, finalizador) {
  let acerto = 0;
  if (alternativa.classList.contains("clicado")) {
    return;
  } else {
    marcadas++;
    const pai = alternativa.parentNode;
    const opcoes = pai.querySelectorAll(".uma-altern");
    const textos = pai.querySelectorAll(".altern-text");
    for (let j = 0; j < opcoes.length; j++) {
      opcoes[j].classList.add("opaco");
      opcoes[j].classList.add("clicado");
      for (let l = 0; l < textos.length; l++) {
        if (opcoes[j].classList.contains("true")) {
          textos[j].style.cssText = "color: green";
          acerto++;
        } else if (opcoes[j].classList.contains("false")) {
          textos[j].style.cssText = "color: red";
        }
      }
    }
    if (alternativa.classList.contains("true")) {
      quests_certas++;
    }
    alternativa.classList.remove("opaco");
  }
}

function mostraQuizz(resposta) {
  const capa = document.querySelector(".capa");
  capa.innerHTML = `
  <img src="${resposta.data.image}">
  <p class="titulo">${resposta.data.title}</p>
  `;
  const todas_quests = document.querySelector(".corpo-quiz");
  todas_quests.innerHTML = "";
  resposta.data.questions.forEach(mostraQuestoes);
}

function mostraQuestoes(questao) {
  const todas_quests = document.querySelector(".corpo-quiz");
  let ordem = [];
  if (questao.answers.length === 2) {
    function comparador() {
      return Math.random() - 0.5;
    }
    ordem = [0, 1];
    ordem.sort(comparador);
    todas_quests.innerHTML += `
      <section class="fundo-branco">
                  <div class="gambiarra">
                      <section class="questao">
                          <div class="cor">
                              <p>${questao.title}</p>
                          </div>
                      </section>

                      <!--Modelo de alternativas-->
                      <section class="bloco-alternativas">
                          <section class="alternativas">
                              <article onclick="selecAltern(this, ${
                                questao.length
                              })" class="uma-altern ${
      questao.answers[ordem[0]].isCorrectAnswer
    }">
                                  <img src="${questao.answers[ordem[0]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[0]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[1]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[1]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[1]].text
                                  }</p>
                              </article>
                          </section>
                      </section>
                  </div> 
              </section>   
      `;
  } else if (questao.answers.length === 3) {
    function comparador() {
      return Math.random() - 0.5;
    }
    ordem = [0, 1, 2];
    ordem.sort(comparador);
    todas_quests.innerHTML += `
      <section class="fundo-branco">
                  <div class="gambiarra">
                      <section class="questao">
                          <div class="cor">
                              <p>${questao.title}</p>
                          </div>
                      </section>

                      <!--Modelo de alternativas-->
                      <section class="bloco-alternativas">
                          <section class="alternativas">
                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[0]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[0]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[0]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[1]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[1]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[1]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[2]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[2]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[2]].text
                                  }</p>
                              </article>
                          </section>
                      </section>
                  </div> 
              </section>   
      `;
  } else if (questao.answers.length === 4) {
    function comparador() {
      return Math.random() - 0.5;
    }
    ordem = [0, 1, 2, 3];
    ordem.sort(comparador);
    todas_quests.innerHTML += `
      <section class="fundo-branco">
                  <div class="gambiarra">
                      <section class="questao">
                          <div class="cor">
                              <p>${questao.title}</p>
                          </div>
                      </section>

                      <!--Modelo de alternativas-->
                      <section class="bloco-alternativas">
                          <section class="alternativas">
                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[0]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[0]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[0]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[1]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[1]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[1]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[2]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[2]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[2]].text
                                  }</p>
                              </article>

                              <article onclick="selecAltern(this)" class="uma-altern ${
                                questao.answers[ordem[3]].isCorrectAnswer
                              }">
                                  <img src="${questao.answers[ordem[3]].image}">
                                  <p class="altern-text">${
                                    questao.answers[ordem[3]].text
                                  }</p>
                              </article>
                          </section>
                      </section>
                  </div> 
              </section>   
      `;
  }
  let title_color = document.querySelectorAll(".cor");
  for (let k = 0; k < title_color.length; k++) {
    title_color[k].style.cssText = `background-color: ${questao.color}`;
  }
}
function pegarPrimeirasInfosForm() {
  let tituloValue = document.getElementById("tituloQuiz").value;
  let urlQuiz = document.getElementById("urlQuiz").value;
  let quantidadePerguntasValue = document.getElementById(
    "quantidadePerguntasQuiz"
  ).value;
  let niveisQuiz = document.getElementById("niveisQuiz").value;

  if (tituloValue.length < 20 || tituloValue.length > 65) {
    return alert("quantidade de caracteres invalida");
  } else {
    if (quantidadePerguntasValue < 3) {
      return alert("quantidade de perguntas invalida");
    } else {
      if (niveisQuiz < 2) {
        return alert("quantidade minima de niveis invalida");
      } else {
        if (
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
            urlQuiz
          ) === false
        ) {
          return alert("insira uma URL válida");
        } else {
          let dataQUiz = [
            tituloValue,
            urlQuiz,
            quantidadePerguntasValue,
            niveisQuiz,
          ];
          segundaTelaFormsQuiz(dataQUiz);
        }
      }
    }
  }
}
function criarQuiz() {
  document.querySelector(".capa");

  document.querySelector(".corpo-quiz").innerHTML = "";
  document.querySelector(".tela-1").innerHTML = "";
  document.querySelector(".tela-2").innerHTML = "";
  /* document.querySelector(".criação-de-quiz").innerHTML = ""; */

  document.querySelector(
    ".tela-1"
  ).innerHTML += `<section class="criando-quizzes">
  <div class="pirmeira-tela-criação-quiz">
    <span>Comece pelo começo</span>
    <div class="primeiro-form-quiz">
      <input
        type="text"
        placeholder="Título do seu quizz"
        id="tituloQuiz"
      />
      <input
        type="text"
        placeholder="URL da imagem do seu quizz"
        id="urlQuiz"
      />
      <input
        type="text"
        placeholder="Quantidade de perguntas do quizz"
        id="quantidadePerguntasQuiz"
      />
      <input
        type="text"
        placeholder="Quantidade de níveis do quizz"
        id="niveisQuiz"
      />

      <button onclick="pegarPrimeirasInfosForm()">
        Prosseguir pra criar perguntas
      </button>
    </div>
  </div>
  </section>`;
}
function segundaTelaFormsQuiz(quizData) {
  document.querySelector(
    ".criando-quizzes"
  ).innerHTML = `<div class="criando-o-quiz-form">
  <span>Crie suas perguntas</span>

  <div class="perguntas">
  <span>Pergunta 1 <img class="hidden" src="images/Vector.svg" alt="" onclick="mostrarPerguntasEscondidas(this)"></span>
    <div class="esconder-pergunta ">
    
    <input type="text" placeholder="Texto da pergunta" />
    <input type="text" placeholder="Cor de fundo da pergunta" />
  
    <span>Resposta correta</span>
    <input type="text" placeholder="Resposta correta" /><input
      type="text"
      placeholder="URL da imagem"
    />
  
    <span>Respostas Incorretas</span>
    <input type="text" placeholder="Resposta incorreta 1" />
    <input type="text" placeholder="URL da imagem 1" />
    <input type="text" placeholder="Resposta incorreta 2" />
    <input type="text" placeholder="URL da imagem 2" />
    <input type="text" placeholder="Resposta incorreta 3" />
    <input type="text" placeholder="URL da imagem 3" /></div>
  </div>


  
`;

  for (let i = 2; i <= quizData[2]; i++) {
    document.querySelector(
      ".criando-o-quiz-form"
    ).innerHTML += `<div class="perguntas "> 
  <span>Pergunta ${i} <img class="" src="images/Vector.svg" alt="" onclick="mostrarPerguntasEscondidas(this)"></span>

  <div class="esconder-pergunta recolhido">
  <input type="text" placeholder="Texto da pergunta" />
  <input type="text" placeholder="Cor de fundo da pergunta" />

  <span>Resposta correta</span>
  <input type="text" placeholder="Resposta correta" /><input
    type="text"
    placeholder="URL da imagem"
  />

  <span>Respostas Incorretas</span>
  <input type="text" placeholder="Resposta incorreta 1" />
  <input type="text" placeholder="URL da imagem 1" />
  <input type="text" placeholder="Resposta incorreta 2" />
  <input type="text" placeholder="URL da imagem 2" />
  <input type="text" placeholder="Resposta incorreta 3" />
  <input type="text" placeholder="URL da imagem 3" />
</div>
</div>`;
  }
  document.querySelector(
    ".criando-quizzes"
  ).innerHTML += `<button onclick="pegarPrimeirasInfosForm()" class="button-forms">
              Prosseguir pra criar perguntas
            </button>`;
}

function mostrarPerguntasEscondidas(data) {
  let allQuestions = document.querySelectorAll(".esconder-pergunta");
  for (let i = 0; i < allQuestions.length; i++) {
    allQuestions[i].classList.add("recolhido");
  }

  let allHidden = document.querySelectorAll(".hidden");

  for (let i = 0; i < allHidden.length; i++) {
    allHidden[i].classList.remove("hidden");
  }
  data.classList.add("hidden");
  data.parentNode.parentNode
    .querySelector(".esconder-pergunta")
    .classList.remove("recolhido");
}

getInfosQuizzes();
