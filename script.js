const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let sumOneEL = document.getElementById("sumOne-el");
let sumTwoEL = document.getElementById("sumTwo-el");


function randomPassword() { 
    sumOneEL.textContent = ""
    sumTwoEL.textContent = ""

    for (let i = 0; i <= 15; i++) {
        let randomIndexOne = Math.floor( Math.random() * characters.length) 
        let randomIndexTwo = Math.floor( Math.random() * characters.length)
        sumOneEL.textContent += characters[randomIndexOne] 
        sumTwoEL.textContent += characters[randomIndexTwo]
 }
}
