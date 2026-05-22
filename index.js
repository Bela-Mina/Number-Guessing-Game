let random = Math.floor(Math.random() * 10 ) +1;
let attempts = 0;
function clickYourButton() {
    const input = Number(document.getElementById("guessWithYourOwnNumber").value);
    
    if(isNaN(input) || input < 1 || input >10) {
        document.getElementById("yourResult").textContent = 'Please enter a valid number between 1 and 10!';
        return // Decrease attempts for invalid input
    }
     // this method are set before the if condition because if the user win or lose the game will end and the attempts will return to                  
    attempts++;
    if(input === random) {
    document.getElementById("yourResult").textContent = 'congratulations You win!';
    random =Math.floor(Math.random() * 10) +1; // generate a new random number for the next game
    attempts = 0; // Reset attempts for the Next game;
    return// End the game if the user wins
        //console.log('congratualations you win!');
    } else if (input > random){
         document.getElementById("yourResult").textContent = 'Try again, the Number is too high!';
       // console.log('sorry you lose, try again its too high! ');
    } else if (input < random) {
        document.getElementById("yourResult").textContent = 'Try again, the Number is too low!';
        // console.log('soory you lose, try again its too low!');
   
    }     
    if(attempts >= 3) {
        document.getElementById("attempts").textContent = `Game Over! The correct number was ${random}`;
        random = Math.floor(Math.random() * 10) + 1; // Generate a new random number for the next game
        attempts = 0; // Reset attempts for the next game
        return// End the game after 3 attempts
    }
    document.getElementById("attempts").textContent = `Attempts:  You have Three attempts ${3 - attempts} left`;

}
// corrections 
//  its work bbut there few mitske
// 1,  in the input field you use string guessWithYourOwnNumber but its number so you have to chanhge it to Number(documnet.getElementById)
// 2, the Math random we assign inside the function so its diffcult to got the correct Number so it must be out side the function
// 3,  you tell the user the answer by currly bracket but it not good to tell the answer to user 
/* 1. Validate input → stop if invalid
2. Increase attempts 
3. Check WIN → stop if win
4. Check GAME OVER → stop if lost
5. Otherwise → give hint */  //the order must be like this

function resetButton() {
    random = Math.floor(Math.random() * 10) +1; // Generate a new random number for the next game;
    attempts = 0; // reset attempts for the next game;
    document.getElementById("yourResult").textContent = 'You have restarted the game.';// show the user that the game has been restarted/ 
    document.getElementById('attempts').textContent = 'Attempts: You have Three atempts left';
    document.getElementById("guessWithYourOwnNumber").value = '';
}