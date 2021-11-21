# javascript-game

## Objective 
The objective of this project was to create a Javascript game using the skills accumluated from Nology week 1- 4 to show a good understanding off: 1) HTML 2) CSS/SCSS 3)JavaScript

The game choosen to make was a Quiz.

live demo - https://jtdjan.github.io/javascript-game/

## TechStack used 
- HTML
- CSS/SCSS
- JavaScript


## How is works
The user starts of the quiz by clicking the next question button, which in turn displays the question & selection of potential answers. It then up for the user to select the correct answer. If correct the user will gain a point & will be alerted & advise to click the next question button to repeat the process.

## Known Bugs 
- the correct answer is always assigned to userBtn 0 
- If the user chooses the correct answer, they could select the correct answer again which will increment their score until they select the next question (thereby cheating the game). 
- The the user reaches the end of the game, they can still press the next question button which causes a Uncaught Type error within the console. 

## Features I hope to implement
- countdown timer that once it runs down, it forces the unser onto the next question & disable the buttons for the user to select them. 
- Starting page, where the user will have to click a button to start the quiz. 
- Summary page that shows the users total score and a list of all the previous questions & the users selection. 
- Visual feedback that when a user is right or wrong the button change background color accordingly. 
- To get the pictures to display with their question.  