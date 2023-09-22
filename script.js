/*
document.querySelector(".message").textContent="correct number";

document.querySelector(".number").textContent=13;
document.querySelector(".score").textContent=17;

document.querySelector("guess").value=23;
*/

let secretNumber = Math.floor(Math.random()*20)+1;
let score = 20;
let highScore = 0;


document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);

    if(!guess){
        document.querySelector(".message").textContent="Please enter a number";
//if guess is correct          
    }else if(guess === secretNumber){
        document.querySelector(".message").textContent="✌️ correct number";
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";  
        
        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
//if guess is wrong           
    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent=guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="You lost the game!";
            document.querySelector(".score").textContent=0;
        }
    }
    //if guess is high  
//     else if(guess > secretNumber){
//         if(score > 1){
//             document.querySelector(".message").textContent="📈 Too high!";
//             score--;
//             document.querySelector(".score").textContent=score;
//         }else{
//             document.querySelector(".message").textContent="You lost the game!";
//             document.querySelector(".score").textContent=0;
//         }
// //if guess is less    
//     }else if(guess < secretNumber){
//         if(score > 1){
//             document.querySelector(".message").textContent="📉 Too low!";
//             score--;
//             document.querySelector(".score").textContent=score;
//         }else{
//             document.querySelector(".message").textContent="You lost the game!";
//             document.querySelector(".score").textContent=0;
//         }
//     }
});

/*Reset all with again button*/
document.querySelector(".again").addEventListener("click",function(){
    document.querySelector(".score").textContent=20;
    document.querySelector(".guess").value="";
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".number").textContent="?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";  
});