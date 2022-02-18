function responderQuizz(quizzID){
    //Como mudar a cor pelo CSS
    // let ab = document.querySelector('.questao');
    // ab.style.cssText = 'background-color: blue';
    const quizInfo = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizzID}`);
    quizInfo.then(printa);
}

function printa(resposta){
    console.log(resposta.data)
}