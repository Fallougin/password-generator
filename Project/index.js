
//32-41 47-57 65-93 97-125 DEC ASCII character numbers used in the password
let passwordLength = Math.floor(Math.random()*10)+11 // Generate password length from 10 to 20 characters

const generatedText = document.getElementById("generatedText")
const textPass = document.getElementById("textPass")

textPass.addEventListener("click", function(){  // Reset the value of the form so that when you press it again it doesn’t stack on top
    generatedText.value = ""                         // using the for loop, we simply stack the characters one after the other
    for (let i = 0; i<passwordLength; i++){
      generatedText.value += generateRandomChar()
    }
})


function generateRandomChar() { //first we take 1 of 4 ranges, and then in this range we take a random number
    let ranges = [              //which then goes to ASCII
      { min: 32, max: 41 },
      { min: 47, max: 57 },
      { min: 65, max: 93 },
      { min: 97, max: 125 }
    ];
  
    let randomRange = ranges[Math.floor(Math.random() * ranges.length)];
    let randomNumber = Math.floor(Math.random() * (randomRange.max - randomRange.min + 1)) + randomRange.min;
  
    return String.fromCharCode(randomNumber);
  }
  