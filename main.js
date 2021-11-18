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
    wrongAnswer3 : "Sucre",

  } ,

  {
    question: "Who won the world cup in 2018?",
    rightAnswer : "France",
    wrongAnswer1 : "Brazil",
    wrongAnswer2 : "Spain",
    wrongAnswer3 : "Germany",

  }

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
    quizQuestion.innerHTML = questionArr[2].question
    //changing selection of answers
    userBtn[0].innerHTML = questionArr[2].rightAnswer
    userBtn[1].innerHTML = questionArr[2].wrongAnswer1
    userBtn[2].innerHTML = questionArr[2].wrongAnswer2
    userBtn[3].innerHTML = questionArr[2].wrongAnswer3
  })

