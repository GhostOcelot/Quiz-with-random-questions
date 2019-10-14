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
const question6 = new Question('Który język nigdy nie był zapisywany znakami chińskimi?', 'wietnamski', 'tajski', 'koreański', 'B')
const question7 = new Question('Wskaż grupę, w której występują tylko języki romańskie', 'lombardzki, hiszpański, baskijski', 'luksemburski, francuski, włoski', 'kataloński, galicyjski, portugalski', 'C')
const question8 = new Question('Wybierz kraj, w którym angielski nie jest językiem urzędowym', 'Namibia', 'Filipiny', 'Czad', 'C')
const question9 = new Question('W którym języku gato znaczy coś innego niż kot?', 'portugalskim', 'galicyjskim', 'w jednym i drugim znaczy kot', 'C')
const question10 = new Question('W jakim kraju możemy powiedzieć "hakuna matata" w języku urzędowym?', 'w Kongo', 'w Kenii', 'w Beninie', 'B')

export const questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]