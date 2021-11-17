// Aim to build a quiz 


// a question header that changes everytime the next question is clicked 

// a display screen that changes question & images everytime next question button is pressed

// a timer to answer the question. at which point when it ends, the user can't select an answer



// link selected HTML elements to java script using queryselects / getElementbyID 

const imageDisplay = document.querySelector('#quiz-image');

const quizQuestion = document.querySelector("#quiz-question")

const userBtn = document.querySelectorAll(".userChoice");

const reset = document.querySelector('#resetBtn');

const nextQuestion = document.getElementById("next-question-btn")



// Questions database - created with array / array of objects containing keys of: Questions & Multiple answer

questionArr = [
  {
    question: "What year did the first Harry Potter film release?",
    rightAnswer : "2001",
    wrongAnswer1 : "2000",
    wrongAnswer2 : "1997",
    wrongAnswer3 : "2002",

  } ,

  {
    question: "What is the capital of Cuba?",
    rightAnswer : "Havana",
    wrongAnswer1 : "Kula Lumpur",
    wrongAnswer2 : "Vara",
    wrongAnswer3 : "2002",

  }
]




// Display question & it related image on screen 
const questionToDisplayArr = []
const correctAnswer = []

 for (let i = 0; i < questionArr.length ; i++){
    questionToDisplayArr.push(questionArr[i].question);
  // to show my question in the display screen
  // quizQuestion.innerHTML = questionArr[i].question;
 }

 console.log(questionToDisplayArr);

 


 quizQuestion.innerHTML = questionToDisplayArr[0]


// Validate the user choice is correct. 
// event lister on buttons to take in the user choice 7 compare it to the right answer array.

