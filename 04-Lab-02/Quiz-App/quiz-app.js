
// class Question {

// }


function Question (questionId, questionText) {
 
  this.questionId = questionId;
  this.questionText = questionText;
}

const question1 = new Question(1, "Javascript Supports")
// Question - 2, 
// Question- 3,
// Question-4, and Question-5


function Answer (answerText){

  this.answerText = answerText;
}

function AnswerOption (answerOptionText){

  // questionId
  this.answerOptionText = answerOptionText
}

const answerOption1 = new AnswerOption("Functions");
const answerOption2 = new AnswerOption("XHTML");
const answerOption3 = new AnswerOption("CSS");
const answerOption4 = new AnswerOption("HTML");


const correctAnswer1 = new Answer("Functions")

// Answer-2, Answer-3, Answer-4 and 5


const qaCombination1 = new QACombination(
  question1, correctAnswer1, [answerOption1, answerOption2, answerOption3, answerOption4]
)