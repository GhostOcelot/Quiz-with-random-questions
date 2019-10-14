const append = document.querySelector('.append');
const addQuestionButton = document.querySelector('input[type="button"]')

class Question {
  constructor(question, optionA, optionB, optionC, correctAnswer) {
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.correctAnswer = correctAnswer
  }
}

const question1 = new Question('Jak nazywamy znak diakrytyczny używany do zaznaczenia długiej sylaby (ā, ē)?', 'cyrkumfleks', 'akut', 'makron', 'C')
const question2 = new Question('Jak na Tajwanie nazywa się język mandaryński, będący tam językiem urzędowym?', 'guoyu', 'putonghua', 'huayu', 'A')
const question3 = new Question('Który z języków nie należy do rodziny indoeuropejskiej?', 'tadżycki', 'fiński', 'norweski', 'B')
const question4 = new Question('Jaką nazwę nosi japoński sylabariusz służący do zapisywania zapożyczeń z języków obcych?', 'katakana', 'hiragana', 'yomigana', 'A')
const question5 = new Question('Który z wymienionych języków nie należy do grupy języków irańskich?', 'urdu', 'kurdyjski', 'tadżycki', 'A')

const questionsArray = [question1, question2, question3, question4, question5];
let counter = 1;

const addQuestionToDOM = () => {

  const randomNumber = Math.floor(Math.random() * questionsArray.length)
  const randomQuestion = questionsArray[randomNumber];
  console.log(counter)

  append.innerHTML += `
    <h3>${counter}. ${randomQuestion.question}</h3>
      <div>
        <input type='radio' id='q${counter}A' name='q${counter}' value='A'></input>
        <label for='q${counter}A'>${randomQuestion.optionA}</label>
      </div>
      <div>
        <input type='radio' id='q${counter}B' name='q${counter}' value='B'></input>
        <label for='q${counter}B'>${randomQuestion.optionB}</label>
      </div>
      <div>
        <input type='radio' id='q${counter}C' name='q${counter}' value='C'></input>
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

const count = setInterval(addQuestionToDOM, 1)



//addQuestionButton.addEventListener('click', addQuestionToDOM)