const Questions =[
  // question 1
    {
        id: 1,
        question: 'What is the data type returned by typeof null?',
        answers: ['null', 'object', 'undefined', 'boolean'],
        correctAnswer: 'object',
    },
    // question 2
    {
        id: 2,
        question: 'What is the correct way to declare a variable that cannot be changed?',
        answers: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'static x = 5;'],
        correctAnswer: 'const x = 5;',
    },
    // question 3
    {
        id: 3,
        question: 'What is the result of: console.log(2 + "2");',
        answers: ['4', '"22"', 'NaN', 'Error'],
        correctAnswer: '"22"',
    },
    // question 4
    {
        id: 4,
        question: 'Which method converts the string "123" into a number?',
        answers: ['parseInt("123")', 'string("123")', 'NumberToInt("123")', 'toInt("123")'],
        correctAnswer: 'parseInt("123")',
    },
    // question 5
    {
        id: 5,
        question: 'What is the value of Boolean(0)?',
        answers: ['true', 'false', '"0"', 'null'],
        correctAnswer: 'false',
    },
    // question 6
    {
        id: 6,
        question: 'Which method adds an element to the end of an array?',
        answers: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswer: 'push()',
    },
    // question 7
    {
        id: 7,
        question: 'What is the scope of a variable declared with let?',
        answers: ['Global', 'Function', 'Block', 'File'],
        correctAnswer: 'Block',
    },
    // question 8
    {
        id: 8,
        question: 'What is the result of: console.log([1, 2, 3].length);',
        answers: ['2', '3', 'undefined', 'Error'],
        correctAnswer: '3',
    },
    // question 9
    {
        id: 9,
        question: 'Which function executes an action after a delay?',
        answers: ['setInterval()', 'setTimeout()', 'delay()', 'sleep()'],
        correctAnswer: 'setTimeout()',
    },
    // question 10
    {
        id: 10,
        question: 'What does this expression return? console.log(typeof NaN);',
        answers: ['NaN', 'undefined', 'number', 'object'],
        correctAnswer: 'number',
    },
]

let Repences=[];
let QuestionActuelIndex=1;
let score=0;
let QuestionIncorrect=0;
let QuestionCorrect=0;
const QuestionContainer=document.getElementById('QuestionContainer')



function afficherQuestions(index){
QuestionContainer.innerHTML=`
<div>
<div class="QuestionEtTime">
<h2 class="titleQuestionTotal">Qestion <span>${index}</span></h2>
<div class="time" id"time" >20</div>
</div>
<p class="questionX">${Questions[index].question}</p>


<input type="radio" class="repence">${Questions[index].answers[0]}</input   >
<input type="radio" class="repence">${Questions[index].answers[1]}</input   >
<input type="radio" class="repence">${Questions[index].answers[2]}</input   >
<input type="radio" class="repence">${Questions[index].answers[3]}</input   >
<div class="NextButtonEtnbrQustion">
<h2>Question ${index} of ${Questions.length}</h2>
<button id="NextButton" class="NextButton">Next</button>
</div>
</div>

`

const NextButton = document.getElementById('NextButton');

NextButton.addEventListener('click', () => {
    QuestionActuelIndex++;
    console.log('hi');
    if (QuestionActuelIndex < Questions.length) {
        
        afficherQuestions(QuestionActuelIndex);
    } else {
console.log("Quiz terminé");

}
});
}
afficherQuestions(QuestionActuelIndex);