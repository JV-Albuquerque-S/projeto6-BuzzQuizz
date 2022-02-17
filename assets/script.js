function getInfosQuizzes() {
  let quizzes = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );

  quizzes.then((anwser) => {
    anwser.data.forEach((data) => {
      document.querySelector(
        ".quizes-da-pagina"
      ).innerHTML += `<section class="todos-os-quizzes" onclick="escolherQuizz(this)" id=${data.id}>
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
      console.log(data);
    });
  });
}

function escolherQuizz(quizEscolhido) {
  console.log(quizEscolhido.attributes.id.value);
}
getInfosQuizzes();
