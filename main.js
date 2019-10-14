import {questionsArray} from './questions.js'

const append = document.querySelector('.append');
const resultButton = document.querySelector('.result-button')
const answer = document.getElementsByClassName('question-wrapper')
const form = document.querySelector('form')


//Display question to the DOM

let counter = 1;

const addQuestionToDOM = () => {

  const randomNumber = Math.floor(Math.random() * questionsArray.length)
  const randomQuestion = questionsArray[randomNumber];

  append.innerHTML += `
  <div class=' question question-wrapper p-4' data-answer='${randomQuestion.correctAnswer}'>
    <h4>${counter}. ${randomQuestion.question}</h4>
    <div>
      <input type='radio' id='q${counter}A' name='q${counter}' value='A' class='mr-2'></input>
      <label for='q${counter}A'>${randomQuestion.optionA}</label>
    </div>
    <div>
      <input type='radio' id='q${counter}B' name='q${counter}' value='B' class='mr-2'></input>
      <label for='q${counter}B'>${randomQuestion.optionB}</label>
    </div>
    <div>
      <input type='radio' id='q${counter}C' name='q${counter}' value='C' class='mr-2'></input>
      <label for='q${counter}C'>${randomQuestion.optionC}</label>
    </div>
  </div>  
  `
  questionsArray.splice(randomNumber, 1);
  counter++
  if (questionsArray.length === 0) {
    clearInterval(count)
  }
}

const count = setInterval(addQuestionToDOM, 1);


//Outputing result

const checkResult = () => {
  let result = 0;
  const correctAnswersArray = [];
  const userAnswersArray = [form.q1, form.q2, form.q3, form.q4, form.q5, form.q6, form.q7, form.q8, form.q9, form.q10];

  Array.from(answer).forEach(item => {
    correctAnswersArray.push(item.getAttribute('data-answer'));
  });

  userAnswersArray.forEach((item,index) => {
    if (item.value === correctAnswersArray[index]) {
      result +=10;
    }
  })

  window.scrollTo(0, 0)
  document.querySelector('.output').classList.remove('d-none');

  let iterator = 0;
  const displayTestResult = setInterval( () => {
    iterator++;
    document.querySelector('span').textContent = `${iterator}%`;
    if (iterator === result) clearInterval(displayTestResult)
  },20)
}

resultButton.addEventListener('click', checkResult)