const Questions = [
    {
        id: 1,
        question: 'What is the data type returned by typeof null?',
        answers: ['null', 'object', 'undefined', 'boolean'],
        correctAnswers: ['object'],
    },
    {
        id: 2,
        question: 'Which declarations create a variable that cannot be changed?',
        answers: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'static x = 5;'],
        correctAnswers: ['const x = 5;'],
    },
    {
        id: 3,
        question: 'Which of these will output "22"?',
        answers: [
            'console.log(2 + "2")',
            'console.log("2" + 2)',
            'console.log(2 + 2)',
            'console.log("2" + "2")'
        ],
        correctAnswers: [
            'console.log(2 + "2")',
            'console.log("2" + 2)',
            'console.log("2" + "2")'
        ],
    },
    {
        id: 4,
        question: 'Which methods can convert the string "123" into a number?',
        answers: ['parseInt("123")', 'Number("123")', 'string("123")', 'toInt("123")'],
        correctAnswers: ['parseInt("123")', 'Number("123")'],
    },
    {
        id: 5,
        question: 'What is the value of Boolean(0)?',
        answers: ['true', 'false', '"0"', 'null'],
        correctAnswers: ['false'],
    },
    {
        id: 6,
        question: 'Which methods can add elements to an array?',
        answers: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctAnswers: ['push()', 'unshift()'],
    },
    {
        id: 7,
        question: 'What is the scope of a variable declared with let?',
        answers: ['Global', 'Function', 'Block', 'File'],
        correctAnswers: ['Block'],
    },
    {
        id: 8,
        question: 'What is the result of: console.log([1, 2, 3].length);',
        answers: ['2', '3', 'undefined', 'Error'],
        correctAnswers: ['3'],
    },
    {
        id: 9,
        question: 'Which functions execute code repeatedly or after a delay?',
        answers: ['setInterval()', 'setTimeout()', 'delay()', 'sleep()'],
        correctAnswers: ['setInterval()', 'setTimeout()'],
    },
    {
        id: 10,
        question: 'What does this expression return? console.log(typeof NaN);',
        answers: ['NaN', 'undefined', 'number', 'object'],
        correctAnswers: ['number'],
    },
];

let QuestionActuelIndex = 0;
let score = 0;

const QuestionContainer = document.getElementById('QuestionContainer');

function afficherQuestions(index) {
    const q = Questions[index];

    QuestionContainer.innerHTML = `
    <div>
      <div class="QuestionEtTime">
        <h2 class="titleQuestionTotal">Question <span>${index + 1}</span></h2>
        <div class="time" id="time">20</div>
      </div>
      <p class="questionX">${q.question}</p>
      
      <div class="answers">
        ${q.answers
            .map(
                (answer, i) =>
                    `<label>
       <input type="checkbox" name="repence" class="repanceCocher" id="repanceCocher" value="${answer}">
       <span>${answer}</span>
     </label>`
            )

            .join('')}
      </div>

      <div class="NextButtonEtnbrQustion">
        <h2>Question ${index + 1} of ${Questions.length}</h2>
        <button id="NextButton" class="NextButton">Next</button>
      </div>
    </div>
  `;

    const NextButton = document.getElementById('NextButton');

    const repanceCocher = document.getElementById('repanceCocher');
    NextButton.addEventListener('click', () => {
        // atharzzar min cochir 
        const checkboxes = document.querySelectorAll('input[name="repence"]:checked');
        const userAnswers = Array.from(checkboxes).map(cb => cb.value);
        console.log(userAnswers);

        // anarza ini nichan ini la 
        if (compareAnswers(userAnswers, q.correctAnswers)) {
            console.log(checkboxes);

            checkboxes.forEach(cb => {
                cb.nextElementSibling.style.backgroundColor = 'green';
            });

            score++;

        } else {
            // alert("❌ Mauvaise réponse !");
            checkboxes.forEach(cb => {
                cb.nextElementSibling.style.backgroundColor = 'red';
            });

        }

        // Passer à la prochaine question
        setTimeout(() => {
            QuestionActuelIndex++;
            if (QuestionActuelIndex < Questions.length) {
                afficherQuestions(QuestionActuelIndex);
            } else {
                QuestionContainer.innerHTML = `<h2>Quiz terminé 🎉</h2>
            <p>Score final : ${score} / ${Questions.length}</p>`;
            }
        }, 2000)
    });
}

// Fonction qui compare deux tableaux (ordre non important)
function compareAnswers(userAnswers, correctAnswers) {
    if (userAnswers.length !== correctAnswers.length) return false;
    return userAnswers.every(ans => correctAnswers.includes(ans));
}

afficherQuestions(QuestionActuelIndex);
