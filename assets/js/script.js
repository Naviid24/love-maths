
//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                 runGame(gameType);
            }
        })
        
    }  
    runGame("addition");     
    
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25)+1;
    let num2 = Math.floor(Math.random() * 25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting! `

    }
}

/**
 * Check the answer against the first element in
 * the returned calculateCorrectAnswer array.
 */

function checkAnswer(){
      let userAnswer = parseInt(document.getElementById("answer-box").value);
      let calculateAnswer = calculateCorrectAnswer();
      let isCorrect = userAnswer === calculateAnswer[0];

      if (isCorrect){
        alert("Hey! You got it right! :D");
      }else{
        alert(`awwww.... you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}!`);
      }
       
      runGame(calculateAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus,minus ect)
 * directly from the DOM, and returns the correct answer.
 */

function calculateCorrectAnswer(){
    let operand1 = pareInt(document.documentgetElementById("operand1").innerText);
    let operand2 = pareInt(document.documentgetElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

}



function incrementScore() {

}



function incrementWrongAnswer() {

}



function displayAdditionQuestion(operand1, operand2) {
        document.getElementById("operand1").textContent = operand1;
        document.getElementById("operand2").textContent = operand2;
        document.getElementById("operator").textContent = "+";
}



function displaySubtractQuestion() {

}



function displayMultiplyQuestion() {

}



function displayMinusQuestion() {

}