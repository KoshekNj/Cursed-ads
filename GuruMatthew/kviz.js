const nextBtn = document.getElementById("next-btn");
const endBtn = document.getElementById("end-btn");

const questionElement = document.getElementById("question");
const answersElelement = document.getElementById("answers");
const answerFirst = document.getElementById("label_one");
const answerSecond = document.getElementById("label_two");
const answerThird = document.getElementById("label_three");
const answerFourth = document.getElementById("label_four");

nextBtn.addEventListener("click", () => {
  let check = false;
  check = checkRadioButtons();
  if (check === true) {
    indexNumber++;
    setNextQuestion();
  }
});
function start() {
  endBtn.classList.add("hide");
  indexNumber = 0;
  setNextQuestion();
}

const questions = [
  {
    question: "1. How would you describe yourself?",
    optionA: "1)Optimist",
    optionB: "2)Sad",
    optionC: "3)Perfectionist",
    optionD: "4)I don't know",
  },

  {
    question: "2. How do you feel at your job?",
    optionA: "1)Great",
    optionB: "2)Stressed",
    optionC: "3)People bother me",
    optionD: "4)Numb",
  },

  {
    question: "3. Do you have any friends?",
    optionA: "1)Yes",
    optionB: "2)No",
  },

  {
    question: "4. How would you describe your love life?",
    optionA: "1)In a happy realtionship",
    optionB: "2)In an unhappy relationship",
    optionC: "3)I am single involuntary",
    optionD: "4)I am single voluntary",
  },

  {
    question: "5. Do you watch a lot of tv?",
    optionA: "1)Never",
    optionB: "2)Yes, I watch it a lot",
    optionC: "3)Yes, I watch a lot of news",
    optionD: "4)Sometimes",
  },
];

let indexNumber = 0; //will be used in displaying next question

function unCheckRadioButtons() {
  const options = document.getElementsByName("choice");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function checkRadioButtons() {
  const options = document.getElementsByName("choice");
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked === true) {
      return true;
    }
  }
  return false;
}

function setNextQuestion() {
  unCheckRadioButtons();
  showQuestion(questions[indexNumber]);

  if (indexNumber == 3) {
    nextBtn.classList.add("hide");
    endBtn.classList.remove("hide");
  }
}

function showQuestion(question) {
  console.log(indexNumber);
  questionElement.innerText = question.question;
  answerFirst.innerText = question.optionA;
  answerSecond.innerText = question.optionB;
  answerThird.innerText = question.optionC;
  answerFourth.innerText = question.optionD;
}
