function responderQuizz(quizzID){
    //Como mudar a cor pelo CSS
    // let ab = document.querySelector('.questao');
    // ab.style.cssText = 'background-color: blue';
    const quizInfo = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizzID}`);
    quizInfo.then(mostraQuizz);
}
let quests_certas = 0;
let marcadas = 0;

function selecAltern(alternativa, finalizador){
    let acerto = 0;
    if(alternativa.classList.contains("clicado")){
        return
    }
    else{
        marcadas++;
        const pai = alternativa.parentNode;
        const opcoes = pai.querySelectorAll(".uma-altern");
        const textos = pai.querySelectorAll(".altern-text");
        for(let j = 0; j < opcoes.length; j++){
            opcoes[j].classList.add("opaco");
            opcoes[j].classList.add("clicado");
            for(let l = 0; l < textos.length; l++){
                if(opcoes[j].classList.contains("true")){
                    textos[j].style.cssText = "color: green"
                    acerto++;
                }
                else if(opcoes[j].classList.contains("false")){
                    textos[j].style.cssText = "color: red"
                }
            }
        }
        if(alternativa.classList.contains("true")){
            quests_certas++
        }
        alternativa.classList.remove("opaco");
        console.log("acertos : " + acerto);
        console.log(quests_certas);
        console.log("marcadas: " + marcadas);
    }
}

function mostraQuizz(resposta){
    console.log(resposta.data);
    const capa = document.querySelector(".capa");
    capa.innerHTML = `
    <img src="${resposta.data.image}">
    <p class="titulo">${resposta.data.title}</p>
    `
    const todas_quests = document.querySelector(".corpo-quiz");
    todas_quests.innerHTML = "";
    resposta.data.questions.forEach(mostraQuestoes);
}

function mostraQuestoes(questao){
    const todas_quests = document.querySelector(".corpo-quiz");
    let ordem = [];
    if(questao.answers.length === 2){
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
                                <article onclick="selecAltern(this, ${questao.length})" class="uma-altern ${questao.answers[ordem[0]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[0]].image}">
                                    <p class="altern-text">${questao.answers[ordem[0]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[1]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[1]].image}">
                                    <p class="altern-text">${questao.answers[ordem[1]].text}</p>
                                </article>
                            </section>
                        </section>
                    </div> 
                </section>   
        `
    }
    else if(questao.answers.length === 3){
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
                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[0]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[0]].image}">
                                    <p class="altern-text">${questao.answers[ordem[0]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[1]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[1]].image}">
                                    <p class="altern-text">${questao.answers[ordem[1]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[2]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[2]].image}">
                                    <p class="altern-text">${questao.answers[ordem[2]].text}</p>
                                </article>
                            </section>
                        </section>
                    </div> 
                </section>   
        `
    }
    else if(questao.answers.length === 4){
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
                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[0]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[0]].image}">
                                    <p class="altern-text">${questao.answers[ordem[0]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[1]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[1]].image}">
                                    <p class="altern-text">${questao.answers[ordem[1]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[2]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[2]].image}">
                                    <p class="altern-text">${questao.answers[ordem[2]].text}</p>
                                </article>

                                <article onclick="selecAltern(this)" class="uma-altern ${questao.answers[ordem[3]].isCorrectAnswer}">
                                    <img src="${questao.answers[ordem[3]].image}">
                                    <p class="altern-text">${questao.answers[ordem[3]].text}</p>
                                </article>
                            </section>
                        </section>
                    </div> 
                </section>   
        `
    }
    let title_color = document.querySelectorAll(".cor");
    for (let k = 0; k < title_color.length; k++){
        title_color[k].style.cssText = `background-color: ${questao.color}`;
    }
}