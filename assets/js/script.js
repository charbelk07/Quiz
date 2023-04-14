//add variables that target html ids or classes
    //Div for each question with possible answers
var questionsDiv = document.getElementById("questionsDiv")
var questionTitle =document.getElementById("questionTitle")
var answerChoices = document.getElementById("answerchoices")
var startBtn = document.getElementById("startBtn")
//var for time
//var for endscreen
var questionIndex = 0 //question changes when this increments

var questions = [
    {
        title: "what is an array",
        choices: ["a","b","c", "d"],
        correctAnswer: "b"
    },
    {
        title: "what is an object",
        choices: ["a","b","c"],
        correctAnswer: "a"
    },
    {
        title: "what is an array",
        choices: ["a","b","c"],
        correctAnswer: "a"
    },
]

// create start function

function startQuiz(){
    console.log("started");
// hide startScreen
//unhide questionsDiv
//start timer

//display questions called
displayQuestion();
}

function displayQuestion(){
console.log("here is a question")
//current question index that we are on
var currentQuestion = questions[questionIndex]
//update title and answer choices to match current question
questionTitle.textContent = currentQuestion.title

currentQuestion.choices.forEach(function(choice){
    var choiceBtn = document.createElement("button")
    choiceBtn.textContent = choice
    choiceBtn.setAttribute("value", choice)
    //attach check answer event
    choiceBtn.onclick = checkAnswer
    answerChoices.append(choiceBtn)
})
// append answer choices to answerChoices div
}

function checkAnswer(){
    if(this.value === questions[questionIndex].correctAnswer){
        console.log("correct")
    }
    else{
        console.log("incorrect")
    }
    questionIndex++
    answerChoices.textContent = ""
    displayQuestion()
}

//
//endquiz function that hides questions div
//unhides endscreen

//function to save score to local storage

//function to display high scores on page 



startBtn.addEventListener("click",startQuiz);