// Aim to build a quiz 


// a question header that changes everytime the next question is clicked 

// a display screen that changes question & images everytime next question button is pressed

// a timer to answer the question. at which point when it ends, the user can't select an answer

//importing questions 
import {questionArr} from "./assets/questions/questions.js";

// link selected HTML elements to java script using queryselects / getElementbyID 

const imageDisplay = document.querySelector('#quiz-image');
const quizQuestion = document.querySelector("#quiz-question")
const scoreCard = document.querySelector("#score")
const userBtn = document.querySelectorAll(".userChoice");
const reset = document.querySelector('#resetBtn');
const nextQuestion = document.getElementById("next-question-btn")



let currentRound = 0;
let isUserBtn;
let score = 0;

const getNewRound = (currentRound) => {
  //question change
  quizQuestion.innerHTML = questionArr[currentRound].question
      scoreCard.innerHTML = `${score}/10`

  // image display    
      // imageDisplay.innerHTML = questionArr[currentRound].image

    //changing selection of answers

    // try to randomanize the userBTn index numbers within the function?????(math.in)

    userBtn[0].innerHTML = questionArr[currentRound].rightAnswer
    userBtn[1].innerHTML = questionArr[currentRound].wrongAnswer1
    userBtn[2].innerHTML = questionArr[currentRound].wrongAnswer2
    userBtn[3].innerHTML = questionArr[currentRound].wrongAnswer3
}

    // user buttons
    for (let i = 0; i < userBtn.length; i++) {
      const button = userBtn[i]

      button.addEventListener("click", ()=>{
        let buttonValue = button.innerHTML;

        if (buttonValue  === questionArr[currentRound].rightAnswer) {
          score = score + 1;   
          console.log(score);
          scoreCard.innerHTML = `${score}/10`
          return alert("You’re Right!!!")
        } else {
          return alert("Wrong move to the next question");
        }
      })
    }
    nextQuestion.addEventListener("click", () => {
    currentRound = currentRound + 1
    getNewRound(currentRound)
    })


    // Reset button
    const handleResetGame = () => {
      document.location.reload();
    }
      reset.addEventListener ("click",handleResetGame)
