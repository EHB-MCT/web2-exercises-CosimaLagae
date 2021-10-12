"use strict"

//document.getElementById("gues").innerHTML = Math.floor(Math.random() * 11);

let y = Math.floor(Math.random() * 21);
let guess = 1;
document.getElementById("submitguess").onclick = function(){

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve( result =>{
            let x = document.getElementById("guessField").value;

            if(x == y){    
            alert("You have guessed the mystery number!");
            }
            else if(x > y) {    
            guess++;
            alert("The mystery number is lower. Guess again!");
            }
            else{
            guess++;
            alert("The mystery number is higher. Guess again!")
            }
        }), 1000);
    });

    // resolve runs the first function in .then
    promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
    );
}

