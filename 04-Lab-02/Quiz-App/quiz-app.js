
// class Question {

// }


function Question (questionId, questionText) {
 
  this.questionId = questionId;
  this.questionText = questionText;
}

const question1 = new Question(1, "Javascript Supports")
const question2 = new Question(2, "Which language is used for styling web pages ?")
const question3 = new Question(3, "Which is not a Javascript Framework?")
const question4 = new Question(4, "Which is used to connect to Database ?")
const question5 = new Question(5, "Javascript is a ")


function CorrectAnswer (correctAnswerText){

  this.correctAnswerText = correctAnswerText;
}

const correctAnswer1 = new CorrectAnswer("Functions")
const correctAnswer2 = new CorrectAnswer("CSS")
const correctAnswer3 = new CorrectAnswer("Python Script")
const correctAnswer4 = new CorrectAnswer("PHP")
const correctAnswer5 = new CorrectAnswer("Programming Language")


function AnswerOption (answerOptionText){

  // questionId
  this.answerOptionText = answerOptionText
}

function QACombination (questionObj, correctAnswerObj, answerOptions){

  this.questionObj = questionObj;
  this.correctAnswerObj = correctAnswerObj;
  this.answerOptions = answerOptions;
}


const answerOption_Functions = new AnswerOption("Functions");
const answerOption_XHTML = new AnswerOption("XHTML");
const answerOption_CSS = new AnswerOption("CSS");
const answerOption_HTML = new AnswerOption("HTML");


const qaCombination1 = new QACombination(
  question1, correctAnswer1, [answerOption_Functions, answerOption_XHTML, answerOption_CSS, answerOption_HTML]
)

const answerOption_jQuery = new AnswerOption("JQuery");
const answerOption_XML = new AnswerOption("XML");

const qaCombination2 = new QACombination(
  question2, correctAnswer2, [answerOption_HTML, answerOption_jQuery, answerOption_CSS, answerOption_XML]
)

const answerOption_Python = new AnswerOption("Python Script");
const answerOption_Django = new AnswerOption("Django");
const answerOption_NodeJS = new AnswerOption("Node JS");

const qaCombination3 = new QACombination(
  question3, correctAnswer3, [answerOption_Python, answerOption_jQuery, answerOption_Django, answerOption_NodeJS]
)

const answerOption_PHP = new AnswerOption("PHP");
const answerOption_JS = new AnswerOption("JS");
const answerOption_All = new AnswerOption("All");

const qaCombination4 = new QACombination(
  question4, correctAnswer4, [answerOption_PHP, answerOption_HTML, answerOption_JS, answerOption_All]
)

const answerOption_Language = new AnswerOption("Language");
const answerOption_ProgrammingLanguage 
  = new AnswerOption("Programming Language");
const answerOption_Development 
  = new AnswerOption("Development");

const qaCombination5 = new QACombination(
  question5, correctAnswer5, [answerOption_Language, answerOption_ProgrammingLanguage, answerOption_Development, answerOption_All]
)
