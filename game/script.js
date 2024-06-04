const questions = [
  {
    question:
      "Que color de luz de semaforo permite el avance de los vehiculos?",
    choices: ["Rojo", "Amarillo", "Verde"],
    correct: 2,
  },
  {
    question: "Puedo estacionar al lado de la vereda pintada de rojo?",
    choices: ["Si", "No", "No se"],
    correct: 1,
  },
  {
    question:
      "Se puede sobrepasar un vehiculo cuando la linea central de la calle es amarilla y continua?",
    choices: ["Si", "No", "No se"],
    correct: 1,
  },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correcto!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrecto!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>Le diste a ${correctAnswers} de ${questions.length} preguntas.</p>`;
    }
  }, 1000);
}

showQuestion();
