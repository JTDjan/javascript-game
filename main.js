// Aim to build a quiz 


// a question header that changes everytime the next question is clicked 

// a display screen that changes question & images everytime next question button is pressed

// a timer to answer the question. at which point when it ends, the user can't select an answer

//importing questions 
import {question} from "./assets/questions/questions.js";

// link selected HTML elements to java script using queryselects / getElementbyID 

const imageDisplay = document.querySelector('#quiz-image');

const quizQuestion = document.querySelector("#quiz-question")

const scoreCard = document.querySelector("#score")


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
    image: "./assets/images/stone.jpg",

  } ,

  {
    question: "What year did Deathly Hallows Part 2 relase?",
    rightAnswer : "2011",
    wrongAnswer1 : "2010",
    wrongAnswer2 : "2012",
    wrongAnswer3 : "2009",
    image: "./assets/images/DeathlyHallowsPt2.jpeg",

  } ,

  {
    question: "What was the name of the actor that played Albus Dumbledore from year 3 to 8?",
    rightAnswer : "Michael Gambon",
    wrongAnswer1 : "Richard Harris",
    wrongAnswer2 : "Jude Law",
    wrongAnswer3 : "Toby Regbo",
    image: "./assets/images/dumbledore.jpeg",

  },

  {
  question: "What is the killing curse in Harry Potter Universe?",
    rightAnswer : "Avada Kedavra",
    wrongAnswer1 : "Crucio",
    wrongAnswer2 : "Imperio",
    wrongAnswer3 : "Sectumsempra",
    image: "./assets/images/spells.jpeg",

  },

  {
    question: "How many staircases are in Hogwarts?",
      rightAnswer : "142",
      wrongAnswer1 : "97",
      wrongAnswer2 : "694",
      wrongAnswer3 : "183",
      image: "./assets/images/staircase.jpeg",
  
    },

    {
      question: "Which class has a different teacher every year?",
        rightAnswer : " Defence against the dark arts",
        wrongAnswer1 : "Herbology",
        wrongAnswer2 : "Potions",
        wrongAnswer3 : "Care of Magical Creaturesless",
        image: "./assets/images/lesson.jpeg",
    
      },

      {
        question: "Who was flying with Mad Eye Moody when he died?",
          rightAnswer : "Mundungus Fletcher",
          wrongAnswer1 : "Kingsley Shacklebolt",
          wrongAnswer2 : "Remus Lupin",
          wrongAnswer3 : "Fred Wealsey",
          image: "./assets/images/madEyeMoody.jpeg",
      
        },


        {
          question: " What is Tom Riddle’s middle name?",
            rightAnswer : " Marvolo",
            wrongAnswer1 : "Avalovo",
            wrongAnswer2 : "Marolo",
            wrongAnswer3 : "Amarolo",
            image: "./assets/images/Voldemort.jpeg",
        
          },


          {
            question: " What is Snape’s Patronus?",
              rightAnswer : "Doe",
              wrongAnswer1 : "Deer",
              wrongAnswer2 : "Stag",
              wrongAnswer3 : "Fox",
              image: "./assets/images/patronus.jpeg",
          
            },

            {
              question: " What is the name of the potion which can change a person's appearance into that of someone else?",
                rightAnswer : "Polyjuice potion",
                wrongAnswer1 : "Girding Potion",
                wrongAnswer2 : "Felix Felicis",
                wrongAnswer3 : "Oculus Potion",
                image: "./assets/images/PotionsClassroom_lab.jpeg",
            
              },

]

let currentRound = 0;
let isUserBtn;
let score = 0;
const getNewRound = (currentRound) => {
  //question change
  quizQuestion.innerHTML = questionArr[currentRound].question
      scoreCard.innerHTML = `${score}`

  // image display    
      imageDisplay.innerHTML = questionArr[currentRound].image

    //changing selection of answers

    // try to randomanize the userBTn index numbers within the function?????(math.in)

    userBtn[0].innerHTML = questionArr[currentRound].rightAnswer
    userBtn[1].innerHTML = questionArr[currentRound].wrongAnswer1
    userBtn[2].innerHTML = questionArr[currentRound].wrongAnswer2
    userBtn[3].innerHTML = questionArr[currentRound].wrongAnswer3
}
    // user buttons
    for (i = 0; i < userBtn.length; i++){
      const button = userBtn[i]
      button.addEventListener("click", ()=>{
        let buttonValue = button.innerHTML;
        if (buttonValue  === questionArr[currentRound].rightAnswer) {
          score = score + 1;   
          console.log(score);
          scoreCard.innerHTML = `${score}`
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
