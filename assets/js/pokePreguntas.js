
const quizQuestions = [
  {
    question: "¿Cuál de estos Pokémon se vería más afectado por el movimiento? Hidrobomba?",
    a:"Charizard",
    b:"Ónix",
    c:"Lapras",
    rigthAns:"ans2"
  },
  {
    question: "¿Cómo se llama la enfermera en el anime que dirige todos los Centros Pokémon? ",
    a:"Enfermera Fun",
    b:"Enfermera Merry",
    c:"Enfermera Joy",
    rigthAns:"ans3"
  },
  {
    question: "¿Qué Pokémon atacó al profesor Birch en Pokémon Ruby y Sapphire?",
    a:"Poochyena",
    b:"Aron",
    c:"Zigzagoon",
    rigthAns:"ans1"
  },
  {
    question: "De los siguientes Pokémon, ¿cuál es el más pequeño?",
    a:"Ralts",
    b:"Roselia",
    c:"Joltik",
    rigthAns:"ans3"
  }
  ,
  {
    question: "¿Cuál de estos no es un movimiento de tipo psíquico?",
    a:"Más Psique",
    b:"Agilidad",
    c:"Arrumaco",
    rigthAns:"ans1"
  },
  {
    question: "¿Cuál de estos Pokémon es parte del tipo volador?",
    a:"Dragonair",
    b:"Flygon",
    c:"Tropius",
    rigthAns:"ans3"
  }
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  let list = quizQuestions[questionCount];
  question.innerText = list.question;
  option1.innerText = list.a;
  option2.innerText = list.b;
  option3.innerText = list.c
};
loadQuestion();

const getCheckedAnswer = () => {
  let ans
  answers.forEach((i) => {
    if (i.checked) {
      ans = i.id
    }
  });
  return ans;
};
const uncheckAnswers = () => {
  answers.forEach((i) => { i.checked = false; })
};
submit.addEventListener("click", () => {
  const x = getCheckedAnswer();
  if (x === quizQuestions[questionCount].rigthAns) {
    score++;
  }
  questionCount++;
  uncheckAnswers();
  if (questionCount<quizQuestions.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = ` <h3 class="h3">puntuacion ${score}/${quizQuestions.length}</h3> 
    <button class="btn btnPA border bg-white" onClick="location.reload()">Jugar Otra ves</button> `
    showScore.classList.remove("score");
    formRelleno()
  }
})
console.log(quizQuestions)
console.log(quizQuestions.lenght)


function formRelleno() {
 
  /* if (upBtnCount == 0) {
       document.querySelector("#btn-elegir").disabled = false
   } else {
       document.querySelector("#btn-elegir").disabled = true
   }*/
  //OPERADOR TERNARIO IF------------------------------------------------------------------------------------------------------------------------------------------------
  questionCount == 6 ? document.querySelector("#submit").disabled = true : document.querySelector("#submit").disabled = false;
}
