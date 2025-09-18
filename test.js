const Questions = [
  {
    category: "JavaScript",
    data: [
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
      }
    ]
  },
  {
    category: "HTML",
    data: [
      {
        id: 1,
        question: 'Which HTML element is used to define the title of a document?',
        answers: ['<meta>', '<title>', '<head>', '<header>'],
        correctAnswers: ['<title>'],
      },
      {
        id: 2,
        question: 'Which HTML elements are self-closing?',
        answers: ['<img>', '<br>', '<input>', '<div>'],
        correctAnswers: ['<img>', '<br>', '<input>'],
      },
      {
        id: 3,
        question: 'What is the correct HTML element for the largest heading?',
        answers: ['<heading>', '<h1>', '<h6>', '<header>'],
        correctAnswers: ['<h1>'],
      },
      {
        id: 4,
        question: 'Which attributes are required for an img element?',
        answers: ['src', 'alt', 'width', 'height'],
        correctAnswers: ['src', 'alt'],
      },
      {
        id: 5,
        question: 'What does HTML stand for?',
        answers: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Home Tool Markup Language',
          'Hyperlink Text Management Language'
        ],
        correctAnswers: ['Hyper Text Markup Language'],
      },
      {
        id: 6,
        question: 'Which HTML elements are used for creating lists?',
        answers: ['<ul>', '<ol>', '<li>', '<list>'],
        correctAnswers: ['<ul>', '<ol>', '<li>'],
      },
      {
        id: 7,
        question: 'What is the correct HTML element for inserting a line break?',
        answers: ['<break>', '<br>', '<lb>', '<newline>'],
        correctAnswers: ['<br>'],
      },
      {
        id: 8,
        question: 'Which HTML element defines navigation links?',
        answers: ['<navigation>', '<nav>', '<navigate>', '<menu>'],
        correctAnswers: ['<nav>'],
      },
      {
        id: 9,
        question: 'Which input types are valid in HTML5?',
        answers: ['email', 'date', 'color', 'phone'],
        correctAnswers: ['email', 'date', 'color'],
      },
      {
        id: 10,
        question: 'What is the purpose of the alt attribute in img elements?',
        answers: [
          'Alternative text for accessibility',
          'Alternate source for the image',
          'Image alignment',
          'Image animation'
        ],
        correctAnswers: ['Alternative text for accessibility'],
      }
    ]
  },
  {
    category: "CSS",
    data: [
      {
        id: 1,
        question: 'Which CSS property is used to change the text color?',
        answers: ['color', 'text-color', 'font-color', 'background-color'],
        correctAnswers: ['color'],
      },
      {
        id: 2,
        question: 'Which CSS selectors target elements by class?',
        answers: ['.classname', '#idname', 'tagname', '[attribute]'],
        correctAnswers: ['.classname'],
      },
      {
        id: 3,
        question: 'What does CSS stand for?',
        answers: [
          'Cascading Style Sheets',
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets'
        ],
        correctAnswers: ['Cascading Style Sheets'],
      },
      {
        id: 4,
        question: 'Which CSS properties control spacing?',
        answers: ['margin', 'padding', 'border', 'spacing'],
        correctAnswers: ['margin', 'padding'],
      },
      {
        id: 5,
        question: 'What is the default value of the position property?',
        answers: ['static', 'relative', 'absolute', 'fixed'],
        correctAnswers: ['static'],
      },
      {
        id: 6,
        question: 'Which CSS properties are used for flexbox?',
        answers: ['display: flex', 'justify-content', 'align-items', 'flex-direction'],
        correctAnswers: ['display: flex', 'justify-content', 'align-items', 'flex-direction'],
      },
      {
        id: 7,
        question: 'How do you select an element with id="demo"?',
        answers: ['#demo', '.demo', 'demo', 'id.demo'],
        correctAnswers: ['#demo'],
      },
      {
        id: 8,
        question: 'Which CSS property controls the text size?',
        answers: ['font-size', 'text-size', 'font-style', 'text-style'],
        correctAnswers: ['font-size'],
      },
      {
        id: 9,
        question: 'Which values are valid for the display property?',
        answers: ['block', 'inline', 'flex', 'visible'],
        correctAnswers: ['block', 'inline', 'flex'],
      },
      {
        id: 10,
        question: 'What is the correct syntax for a CSS comment?',
        answers: ['/* comment */', '// comment', '<!-- comment -->', '# comment'],
        correctAnswers: ['/* comment */'],
      }
    ]
  }
];
// Récupérer la catégorie à exclure
// const excludeCategory = localStorage.getItem("excludeCategory");
// console.log(excludeCategory);

// // Filtrer les questions
// const filteredQuestions = Questions
//     .filter(cat => cat.category !== excludeCategory)
//     .flatMap(cat => cat.data); // pour avoir un seul tableau avec toutes les questions

// console.log(filteredQuestions); // toutes les questions sauf celle de la catégorie cliquée

// console.log(Questions);
// let variable=Questions.filter(cat=>cat.category==="JavaScript");
// console.log(variable);
// console.log(Questions[0].data[0].question);

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


function compareAnswers(userAnswers, correctAnswers) {
    if (userAnswers.length !== correctAnswers.length) return false;
    return userAnswers.every(ans => correctAnswers.includes(ans));
}

afficherQuestions(QuestionActuelIndex);
