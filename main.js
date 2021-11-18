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
    question: "What year did Deathly Hallows Part 2?",
    rightAnswer : "2011",
    wrongAnswer1 : "2010",
    wrongAnswer2 : "2012",
    wrongAnswer3 : "2009",

  } ,

  {
    question: "What was the name of the actor that played Albus Dumbledore from year 3 to 8?",
    rightAnswer : "Michael Gambon",
    wrongAnswer1 : "Richard Harris",
    wrongAnswer2 : "Jude Law",
    wrongAnswer3 : "Toby Regbo",

  },

  {
  question: "What is the killing curse in Harry Potter Universe?",
    rightAnswer : "Avada Kedavra",
    wrongAnswer1 : "Crucio",
    wrongAnswer2 : "Imperio",
    wrongAnswer3 : "Sectumsempra",

  },

  {
    question: "How many staircases are in Hogwarts?",
      rightAnswer : "142",
      wrongAnswer1 : "97",
      wrongAnswer2 : "694",
      wrongAnswer3 : "183",
  
    },

]




// Display question & it related image on screen 
const questionToDisplayArr = []
const correctAnswerArr = []

 for (let i = 0; i < questionArr.length ; i++){
    questionToDisplayArr.push(questionArr[i].question);
    // to show my question in the display screen
    // quizQuestion.innerHTML = questionArr[i].question;
  }
  
  console.log(correctAnswerArr);
  
  
  
  
  quizQuestion.innerHTML = questionArr[0].question
  
  
  // Validate the user choice is correct. 
  // event listener on buttons to take in the user choice & compare it to the right answer array.
  
  // display selection of answer within my buttons
 
  
  // for loop method
  // for (let i = 0; i < userBtn.length; i++){

    // userBtn[0].innerHTML = questionArr[0].rightAnswer
    // userBtn[1].innerHTML = questionArr[0].wrongAnswer1

  // }


  userBtn[0].innerHTML = questionArr[0].rightAnswer
  userBtn[1].innerHTML = questionArr[0].wrongAnswer1
  userBtn[2].innerHTML = questionArr[0].wrongAnswer2
  userBtn[3].innerHTML = questionArr[0].wrongAnswer3

  
  for (i = 0; i < userBtn.length; i++){
   const button = userBtn[i]
     button.addEventListener("click", ()=>{
      let buttonValue = button.innerHTML;
        if (buttonValue  === questionArr[0].rightAnswer) {
       return alert("You're Right!!!")
      } else {
        return alert("Sorry you're wrong move to the next question");
      }

     }) 
  }

  // Next question Button 

  nextQuestion.addEventListener("click", () => {
    //question change
    quizQuestion.innerHTML = questionArr[1].question

    //changing selection of answers
    userBtn[0].innerHTML = questionArr[1].rightAnswer
    userBtn[1].innerHTML = questionArr[1].wrongAnswer1
    userBtn[2].innerHTML = questionArr[1].wrongAnswer2
    userBtn[3].innerHTML = questionArr[1].wrongAnswer3
  })

// Reset button 
const handleResetGame = () => {
  document.location.reload();
}

reset.addEventListener ("click",handleResetGame)

