window.addEventListener('DOMContentLoaded', main);
let namefinished = false;

function keyPress(e) {


    document.getElementById('title').classList.add('flash');
    if (namefinished) {
        if (e.code === 'Digit1') {
            window.location = "story.html";
        }
    } else if (e.code === 'Enter') {
        namefinished = true;
        let name = document.getElementById('nameEntry').value;
        let message = "Hey " + name + ". Enjoy your time with us, although you may not remember who you are by the time we're done with you! <br> *Paradoxical laughter* <br> Are you ready to begin your journey? Remember, there is no going back once you choose your path. <br> [Press 1 to start]"
        document.getElementById('textbox').remove();
        console.log(name)
        document.getElementById('hiddendiv').innerHTML = message;
        document.getElementById('hiddendiv').classList.remove('hidden');
        document.getElementById('title2').remove();
    }

}

function keyRelease(e) {
    document.getElementById('title').classList.remove('flash');
}


function main() {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('keyup', keyRelease);
}