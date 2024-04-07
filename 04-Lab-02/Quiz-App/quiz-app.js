
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

  // check the user Answer
  // verifyUserAnswer(userAnswerText)

  this.verifyUserAnswer = function(userSuppliedAnswer){

    if (userSuppliedAnswer == correctAnswerObj.correctAnswerText){

      console.log("TRUE -> User Supplied Answer -> " + userSuppliedAnswer)
      return true;
    }else{

      console.log("FALSE -> User Supplied Answer -> " + userSuppliedAnswer)
      return false;
    }
  }
}

function VerifyUserAnswerFromQACombinations(qaCombination) {

  this.qaCombination = qaCombination;

  this.verifyUserAnswer = function(userSuppliedAnswer){

    if (userSuppliedAnswer == qaCombination.correctAnswerObj.correctAnswerText){

      console.log("TRUE -> User Supplied Answer -> " + userSuppliedAnswer)
      return true;
    }else{

      console.log("FALSE -> User Supplied Answer -> " + userSuppliedAnswer)
      return false;
    }
  }

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

// function Result {

// }

function QuizApp (qaCombinations) {

  this.qaCombinations = qaCombinations;

  // Task-
    // To define PageNo/PageIndex Property
  
  this.pageIndex = 0;

  // Task
    // GetScore
  
  this.score = 0;
  this.getScore = function(){
    return this.score;
  } 

  // Task
    // incrementScore()

  this.incrementScore = function(){

    this.score = this.score + 1;
  }

  // Task
    // calculateScorePercentage()

  this.calculateScorePercentage = function(){

    // (2 / 5) * 100

    const totalNoOfQuestions = qaCombinations.length;
    const scorePercentage = (this.getScore() / totalNoOfQuestions) * 100;

    return scorePercentage;
  }

  // Task
    // Check for the lastQACombination
    // isLastQACombination
    // [1 / 5] -> false
    // [5 / 5] -> true

  this.isLastQACombination = function(){

    const totalNoOfQuestions = qaCombinations.length;

    if (this.pageIndex == totalNoOfQuestions - 1){

      return true;
    }else{
      return false;
    }
  }

  // Task
    // updateFooter

  this.updateFooter = function (){

    const progressElement = document.getElementById("progress");
  
    const qaCombination = qaCombinations[this.pageIndex];

    const questionId = qaCombination.questionObj.questionId;
    const totalNoOfQuestions = qaCombinations.length;
    
    const content = `Question ${questionId} of ${totalNoOfQuestions}`;
    progressElement.innerHTML = content;
  }

  // 

  this.addListeners = function (){

    // Iterate over all the button objects
    // Add the onclick listener
    // Have a dummy implementation as part of event handling

    // 4 can be retrived through qaCombinations[pageIndex].answerOptions.length
    for (let index = 0; index < 4; index ++){

      const buttonId = "btn" + index;

      const buttonObj = document.getElementById(buttonId);

      console.log("THIS 1 -> " + JSON.stringify(this));      
      const QUIZ_APP_OBJ = this;

      buttonObj.onclick = function(event){

        console.log("THIS 2 -> " + JSON.stringify(this));      
        const target = event.currentTarget;
        console.log("Target is " + JSON.stringify(target));

        const answerChoiceSpanElement 
          = target.children[0];
        const userSuppliedAnswer = answerChoiceSpanElement.innerHTML;
        console.log("User Answer ->" + userSuppliedAnswer);

        const qaCombination = QUIZ_APP_OBJ.qaCombinations[QUIZ_APP_OBJ.pageIndex];

        const outcome = qaCombination.verifyUserAnswer(userSuppliedAnswer);
        if (outcome){
          QUIZ_APP_OBJ.incrementScore();
        }

        // Load the Next Page
        QUIZ_APP_OBJ.loadNextPage();


        // Button Text -> userSuppliedAnswer          
          // target [button].children[0]
        // Verify this answer
        // if (correct_answer)
          // increment_score

      }
    }
  }

  this.loadNextPage = function(){

        // loadTheNextPage
          // increment -> pageIndex 
          // attachListeners
          // displayQuizPage

    if (this.isLastQACombination()){
      this.displayResultPage();
    }else{

      this.pageIndex ++;
      this.addListeners();
      this.displayQuizPage();  
    }
  }

  this.displayResultPage = function(){

    const content = 
      `
      <h1>Result</h1>
      <h2 class='score'>Your Score : ${this.getScore()}. Percentage is ${this.calculateScorePercentage()} </h2>
      `
      const quizHtmlElement = document.getElementById("quiz");
      quizHtmlElement.innerHTML = content;
  }

  this.displayQuizPage = function(){

    this.displayQACombinationSection();
    this.displayFooter();
  }

  this.displayQACombinationSection = function(){

    const qaCombination = this.qaCombinations[this.pageIndex];

    // Question
    const questionHtmlElement = document.getElementById("question");
    questionHtmlElement.innerHTML = 
      qaCombination.questionObj.questionText;

    // Answer Choices

    for (let index = 0; index < 4; index ++){

      const answerOptionValue = 
        qaCombination.answerOptions[index].answerOptionText;

      const answerOptionId = "choice" + index;
      const answerOptionHtmlElement = document.getElementById(answerOptionId);

      answerOptionHtmlElement.innerHTML = answerOptionValue
    }
  }

  this.displayFooter = function(){

    this.updateFooter();
  }

  // displayQuizPage
    // displayQACombinationSection
      // QACombinationObj -> pageIndex

      // update question-object
      // 
    // displayFooter
    
    
  this.load = function(){

    this.addListeners();
    this.displayQuizPage();
  }
  
}


const quizApp = new QuizApp([
  qaCombination1, qaCombination2, qaCombination3, qaCombination4, qaCombination5
])

quizApp.load();

