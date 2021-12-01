//Add questions here//
var quizQuestions = [
    {
     title: "Commonly used data types DO NOT include:",
     choices: ["strings", "booleans", "alerts", "numbers"],
     answer: "alerts"
    },
    {
     title: "The condition in an if / else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
     answer: "parentheses"
    }
   ]


//add global variables for html elements state and time//
var timerdiv= document.querySelector(".timer")
var displaytime=document.querySelector(".display-time")
var startscreen=document.querySelector(".start-screen")
var questions=document.querySelector("#questions")
var questionstitle=document.querySelector("#question-title")
var choices=document.querySelector("#choices")
var endscreen=document.querySelector("#endscreen")
var submit=document.querySelector("#submit")
var finalscore=document.querySelector("#finalscore")
var initials=document.querySelector("#initials")
var timerstate;
var quiztime=60
var questionsindex=0







var buttonEl = document.querySelector("#start-quiz");


//Start quiz//

function startquiz (){}

function starttimer(){}




//questions//

function getquestion(){}


function checkanswer(){}

//submit and show results//

//all questions are answered or time reaches zero//

//game over//

function gameover(){}

//Save initials and score//
function savescore(){}

function displayscore(){}