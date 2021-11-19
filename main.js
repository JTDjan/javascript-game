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

const questionArr = [
  {
    question: "What year did the first Harry Potter film release?",
    rightAnswer : "2001",
    wrongAnswer1 : "2000",
    wrongAnswer2 : "1997",
    wrongAnswer3 : "2002",

  } ,

  {
    question: "What year did Deathly Hallows Part 2 relase?",
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

let currentRound; 
let isUserBtn;

for (let i = 0; i < questionArr.length; i++){
  currentRound = i 
  //question change
  quizQuestion.innerHTML = questionArr[i].question
  
    //changing selection of answers
    userBtn[0].innerHTML = questionArr[i].rightAnswer
    userBtn[1].innerHTML = questionArr[i].wrongAnswer1
    userBtn[2].innerHTML = questionArr[i].wrongAnswer2
    userBtn[3].innerHTML = questionArr[i].wrongAnswer3
    let checkIfUserButton = setInterval(() => {
      console.log("loop")
      }
    }, 1000) 
  }

    
    // Add delay to wait for user choice/ timer - add interval to pause user choice. 
    //  checkUserChoice() =>{
    //    if (isUserBtn === true){
    //       setInterval(() => {
            
    //       }, 10000ms);
    //    } else 
    //  }
 
  
  // const checkUserChoice = () => {
    
  // }
  // // Next question Button 
  // nextQuestion.addEventListener("click", () => {
        
  //   })

    
    
    // user buttons 
    for (i = 0; i < userBtn.length; i++){
      const button = userBtn[i]
      button.addEventListener("click", ()=>{
        isUserBtn = true

        let buttonValue = button.innerHTML;
        if (buttonValue  === questionArr[i].rightAnswer) {
          return alert("You're Right!!!")
        } else {
          return alert("Sorry you're wrong move to the next question");
        }
        
      }) 
    }
    
    // Reset button 
    const handleResetGame = () => {
      document.location.reload();
    }
      reset.addEventListener ("click",handleResetGame)