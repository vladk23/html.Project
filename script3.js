window.addEventListener('DOMContentLoaded', main);

let inputElement
let textElement
let correct = 17
let finished = false
let guesscount = 0
let guessesleft = 3
let wrongmessage = 'You are just like the rest of them! You mindless savage! The maiden was 17 when they took her away! Now you will pay for what you petty little humans did to her!'

function toNumber(string) {
    let result = ''

    for (let i = 0; i < string.length; i++) {
        let digit = +string[i]
        if (digit || digit === 0){
            result +=digit
        }
    }
    return parseInt(result)
}

function keyPress2 (e) {

}

function keyPress1 (e) {



function main() {
    inputElement = document.getElementById('number_guess')
    textElement = document.getElementById('textbox2')

    document.addEventListener('keydown', keyPress1);
}}

