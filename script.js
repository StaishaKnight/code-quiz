//Add questions here//
var quizQuestions = [
    {
     title: "Where is Peter Parker from?",
     choices: ["Queens", "Brooklyn", "Philadelphia", "The Bronx"],
     answer: "Queens"
    },
    {
     title: "What is Captain Americas real name?",
     choices: ["Bruce Wayne", "Peter Parker", "Steve Rogers", "Bucky Rogers"],
     answer: "Steve Rogers"
    },
    {
     title: "Before Tony Stark became Iron Man, what did Stark Industries primarily make?",
    choices: ["Consumer Technology", "Weapons", "Electric Cars", "Candy"],
    answer: "Weapons"
    },
    {
    title: "What is Black Widows real name? ",
    choices: ["Natalia Rimsky-Korsakov", "Natasha Shostakovich", "Natasha Romanoff", "Nadia Rachmaninoff"],
    answer: "Natasha Romanoff"
    },
    {
 title: "What rare metal is banned in Wakanda?",
        choices: ["Gold", "Unobrainium", "Vibranium", "Axiotanium"],
        answer: "Vibranium"
        },  
      
   ]


//add global variables for html elements state and time//
var timerdiv= document.querySelector(".timer")
var displaytime=document.querySelector(".display-time")
var startscreen=document.querySelector(".start-screen")
var questions=document.querySelector("#questions")
var questiontitle=document.querySelector("#question-title")
var choices=document.querySelector("#choices")
var endscreen=document.querySelector("#endscreen")
var submit=document.querySelector("#submit")
var finalscore=document.querySelector("#finalscore")
var initials=document.querySelector("#initials").value.trim()
var timerstate;
var quiztime=60
var questionsindex=0
var buttonEl = document.querySelector("#start-quiz");
var showfeedback=document.querySelector("#feedback")
function timerinterval(){
    quiztime=quiztime -1
    displaytime.textContent = quiztime
    if (quiztime <=0){
        console.log("quiz-is-over")
        gameover ()
    }
}

//Start quiz//
// On start button click hide start screen unhide questions screen set interval and call get questions function//
function startquiz (){
    startscreen.setAttribute("class","hide")
    questions.removeAttribute("class")
//first argument is what we want to happen, second argument is what we want to happen in miliseconds//

    timerstate=setInterval(timerinterval,1000)
    displaytime.textContent= quiztime
 //call get question function here//  
 
 getquestion()
}

//questions//

function getquestion(){
    //get current question index
    var displayedquestion= quizQuestions[questionsindex]
//grab title of current question index and display onscreen
    questiontitle.textContent= displayedquestion.title
   //clear out any old answer buttons if necessary
    choices.innerHTML=""

    //render choice buttons based on the current question indexes choice array with a forEach; add attributes 
    //such as class, value or on click, append to choices class on html
    displayedquestion.choices.forEach(function(choice, i) {
        // create new button for each choice
        var choicebutton = document.createElement("button");
        choicebutton.setAttribute("class", "choice");
        choicebutton.setAttribute("value", choice);
        choicebutton.textContent = i + 1 + ". " + choice;
        // attach click event listener to each choice
        choicebutton.onclick = checkanswer;
        // display on the page
        choices.appendChild(choicebutton);
      });
}


function checkanswer(){
    //checks to see if value of the clicked button matches the answer of the current question index
    //"this" is the button that we click on, and we that check the value is equal to the current questionIndex answer
    if (this.value === quizQuestions[questionsindex].answer) {

        console.log ("Correct!")
//show feedback 
showfeedback.textContent="Correct!"
} else {
    console.log ("Incorrect!")
    quiztime=quiztime-10
    displaytime.textContent=quiztime
    showfeedback.textContent="Incorrect!"
}
showfeedback.setAttribute("class", "feedback");
  setTimeout(function() {
    showfeedback.setAttribute("class", "feedback hide");
  }, 1000);
//once answer is checked, increment question index by one 
//(still need to call getquestion to re-render the new index)
//[0] the getquestion(), it checks answer, then incremements the question index and getquestion is called again
//updates the data, getquestion() updatess the screen
questionsindex= questionsindex + 1


if (questionsindex === quizQuestions.length) {
    gameover ()

} else {

getquestion()

}

}

//submit and show results//
function showresults () {
var score=quiztime
finalscore.textContent= displayfinalscore
}




//all questions are answered or time reaches zero//

//game over//

function gameover(){
clearInterval(timerstate)
//hide questions div unhide endscreen/initials div set score and score dive that is left//
}

//Save initials and score//
function savescore(){}

function displayscore(){}




buttonEl.onclick= startquiz
submit.onclick = savescore;