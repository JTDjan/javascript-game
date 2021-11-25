// Aim to build a quiz 
//importing questions 
import {questionArr} from "./assets/questions/questions.js";

// link selected HTML elements to java script using queryselects / getElementbyID 

const imageDisplay = document.querySelector('#quiz-image');
const image = document.querySelector('#qImg');
const quizQuestion = document.querySelector("#quiz-question")
const scoreCard = document.querySelector("#score")
const userBtn = document.querySelectorAll(".userChoice");
const reset = document.querySelector('#resetBtn');
const nextQuestion = document.getElementById("next-question-btn")



let currentRound = -1;
let score = 0;

const getNewRound = (currentRound) => {
  // a question header that changes everytime the next question is clicked 
  //question change
  quizQuestion.innerHTML = questionArr[currentRound].question
  scoreCard.innerHTML = `${score}/10`
  
  // image display    
  image.src =  questionArr[currentRound].image
  console.log(imageDisplay);
  
  //changing selection of answers
  
  // target - try to randomanize the userBTn index numbers within the function?????(math.in)
  
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
    
    
    // checks answer 
    if (buttonValue  === questionArr[currentRound].rightAnswer) {
      score = score + 1;   
      // console.log(score);
      scoreCard.innerHTML = `${score}/10`
      return alert("You’re Right!!! Let move onto the next question")
    } else {
      return alert("Incorrect! Let try the next question");
    }
  })
}
nextQuestion.addEventListener("click", () => {
  currentRound = currentRound + 1
  getNewRound(currentRound)
})

// a timer to answer the question. at which point when it ends, the user can't select an answer



// Reset button
const handleResetGame = () => {
  document.location.reload();
}
reset.addEventListener ("click",handleResetGame)
