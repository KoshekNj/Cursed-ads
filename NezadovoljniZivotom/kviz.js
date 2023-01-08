
const nextBtn = document.getElementById('next-btn');
const endBtn = document.getElementById('end-btn');


const questionElement = document.getElementById('question');
const answersElelement = document.getElementById('answers');
const answerFirst = document.getElementById('label_one');
const answerSecond = document.getElementById('label_two');
const answerThird = document.getElementById('label_three');
const answerFourth = document.getElementById('label_four');

nextBtn.addEventListener('click', () => {


    let check = false;
    check = checkRadioButtons();
    if (check === true) {
        indexNumber++;
        setNextQuestion();
    }


})
function start() {
    endBtn.classList.add('hide');
    indexNumber = 0;
    setNextQuestion()
}

const questions = [
    {
        question: "1. Kako bi ste se opisali  kao osobu?",
        optionA: "1)OptimistiÄna",
        optionB: "2)TuÅ¾na",
        optionC: "3)Perfekcionist",
        optionD: "4)Ne znam"
    },

    {

        question: "2. Kako se osjeÄ‡ate na svom poslu?",
        optionA: "1)OdliÄno",
        optionB: "2)Stresno",
        optionC: "3)Ljudi mi smetaju",
        optionD: "4)RavnoduÅ¡no"
    },

    {

        question: "3. Imate li prijatelje?",
        optionA: "1)Da",
        optionB: "2)Ne"
    },

    {

        question: "4. Kako biste opisali svoj ljubavni Å¾ivot?",
        optionA: "1)U sretna veza sam",
        optionB: "2)U nesretna veza sam",
        optionC: "3)Sam sam nedobrovoljno",
        optionD: "4)Sam sam dobrovoljno"

    },

    {

        question: "5. Gledate li puno televizije?",
        optionA: "1)Ne gledam nikad",
        optionB: "2)Da, gledam puno reality televizija",
        optionC: "3)Da, gledam puno vijesti",
        optionD: "4)Gledam ponekad"
    }

]



let indexNumber = 0 //will be used in displaying next question


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
        nextBtn.classList.add('hide');
        endBtn.classList.remove('hide');
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