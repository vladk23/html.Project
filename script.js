window.addEventListener('DOMContentLoaded', main);

let inputElement
let textElement
let correct = 17
let finished = false
let guessesleft = 3
let Won = {
    'text':
        'You were listening! You really aren\'t like the rest of them. Come on! I have something to show you.'

}


let story321112 =

    {
        'text':
            'She was already perfect. They ruined her! Ever since that day I swore I would make the humans pay for what they did to her. Now it\'s your turn to pay! "Die you human wretch! Die! *The Vampiress transforms into a could of bats and flies at you. You try to ATTACK her with you WEAPON, but she is impervious to your desperate attempts at defending yourself. She swoops down over you, extinguishing the candles and transforms back into her human-like form, with her teeth deep inside the neck on your skin.* [2]',
        'choice1': '',
        'choice2': '',
        'choice3': '',

    }
let Lost = {
    'text':
    'You are just like the rest of them! You mindless savage! The maiden was 17 when they took her away! Now you will pay for what you petty little humans did to her!',
    'choice1': '',
    'choice2': '',
    'choice3': '',
}


let story32112 = {
    'text':
        '',
    'choice1': '',
    'choice2': '',
    'choice3': '',
}

let story32111 = {
    'text':
        'You drop down on all fours and start gulping water. Its coolness floods your body, giving you a momentary brain freeze from the shock after being in the heat for so long.',
    'choice1': 'GUESS 1',
    'choice2': 'DIE 2',
    'choice3': '',

    'press2': story321112

}

let story3211 = {
    'text':
        'You let go of the extended wood planks and plunge into the darkness. You find yourself barrelling down a moist, steep tunnel, a couple meters deep. You land with a muddy splash into' +
        ' an ice cold pool of water. You find it lucky that your fall was softened by the mud because the water line is barely above your knees. You feel dizzy from the drop and fall over on the pile' +
        ' of mud and debris. You doze off...' +
        '<br>' +
        '<br>' +
        'When you regain concsiousness, you are dawned with the realization that if you don\'t satisfy your thirst soon you may not wake up the next time.',
    'choice1': 'Drink the water around you. [1]',
    'choice2': 'Don\'t risk drinking the water. [2]',
    'choice3': '',

    'press1': story32111,
    'press2': story32112


}

let story3212 = {
    'text':
        '',
    'choice1': '',
    'choice2': '',
    'choice3': '',
}

let story321 = {
    'text':
        'You approach the shack. it appears to be completely grown over. You try the door and it opens with an eerie groan.' +
        ' The inside presents barren, muddy plank walls and a moldy floor. The only two objects inside were a small stool with an old, dusty music box.' +
        ' You walk towards the music box. Even through the dust and aging, you can see the gold plating on its outside. You cautiously open it, but it emits no sound.' +
        ' The inside has a metal mechanism that supports two figures that appear to be dancing and be entwined with one another.' +
        ' In the center is a 12 karat diamond in the shape of a heart. Realizing the music box probably hasn\'t been wound in years,' +
        ' you turn it over, to find an old flintlock, a little larger than your palm attached via a belt casing. You take the gun off the music box and set it on the stool.' +
        ' On the side of the music box, you locate a cogwheel and begin to wind, being careful with the aged gears. All of a sudden, your finger slips on account of the fatigue.' +
        ' The gearing releases and the music box begins to play a calm and soothing melody. Abruptly, you feel movement beneath your feed and the ground begins to shift.' +
        ' As you feel the ground beneath you give way, you clasp the shack\'s foundation. The stool clatters out of sight into the dark hole that is widening by the second.',
    'choice1': 'Go after the stool. [1]',
    'choice2': 'Try to get out of the shack. [2]',
    'choice3': '',

    'press1': story3211,
    'press2': story3212,
}

let story31 = {
    'text':
        'Too afraid to utter a word, you slip quietly through the tall grass, dried out grass in the yard. You approach the door,' +
        ' now noticing the scratch marks all around the front of the house.',
    'choice1': '',
    'choice2': '',
    'choice3': '',
}

let story32 = {
    'text':
        'You sneak out from behind the statue and enter the rear of the property. Amongst the scattered belongings there is a small shack' +
        ' behind an outstretched oak tree with a few broken branches. Out of the tree trunk sticks out a rusted axe. The head can only be seen halfway,' +
        ' with its blade firmly tucked into the thick, messy bark.',
    'choice1': 'Look in the shack. [1]',
    'choice2': 'Attempt to pull the axe out. [2]',
    'choice3': 'See if there is a back entrance to the cabin. [3]',

    'press1': story321,

}

let story11 = {
    'text':
        'xyz',
    'choice1': '',
    'choice2': '',
    'choice3': '',

}

let story1 = {
    'text':
        'You rush out of the heat into the cabin to find water and see why the man is in distress. The inside of the cabin is not in much better condition than the outside.' +
        ' The windows and door frame are fortified with sandbags and sticks. In the middle of the main room, on the floor, is a stack of provisions and supplies. The man looks to be in his 50s, with a receding, darkgray hairline.' +
        ' He is sitting by the fireplace, which is also barred up, with a pump action rifle across his lap.',
    'choice1': 'Ask the man what happened. [1]',
    'choice2': 'Ask for water. [2]',
    'choice3': '',

    'press1': story11,
}
let story2 = {
    'text':
        'You exclaim, "There is no one here but you and me. Sir, are you all right?" ' +
        'You hear shuffling inside. In a hushed tone the man gasps, "Get inside, hurry!',
    'choice1': 'Approach the cabin. [1]',
    'choice2': 'Be quiet and look around. [2]',
    'choice3': 'Talk to the man. [3]',
}

let story3 = {
    'text':
        'You duck under a small iron statue with a missing head. Observant, you listen closely to the noises inside of the house.' +
        ' You hear shuffling on the roof. Suddenly you see a horrendous dark creature with 6 limbs crawl inside of the crack between the door.' +
        ' The cabin shakes and you hear the man screaming as gunshots go off. As the commotion seems to cease you peak out from your hiding spot' +
        ' just as a monstrous screech erupts from the innards of the cabin. You understand your chances of surviving the heat if you run.' +
        ' You have to stay in the vicinity of the cabin and look for water to regain your strength.',
    'choice1': 'Approach the cabin. [1]',
    'choice2': 'Look around for a weapon. [2]',
    'choice3': '',


    'press1': story31,
    'press2': story32,
}

let story0 = {'text': "ou are lost deep in the countryside of Louisiana. You are on foot." +
        " The weather is very moist and a scolding 98 degrees. You have been walking in the sun for hours" +
        " and you are exhausted and thirsty. You come upon a small grove and decide to rest in the shade." +
        " But you know you need to get shelter soon and look for water. You lay yourself by a tree just for" +
        " a few minutes to catch your breath before moving on. As you lay in the shade and begin to close your" +
        " eyes, a large swarm of mosquitoes pack the air around you and descend hungrily upon your skin, sticking to your sweat." +
        " You jump up and shake them off, with a few leaving bites on your neck and arms. The bites seem irritating, but are not" +
        " your main concern. With a renewed wave of strength and adrenaline from the mosquito fight, you leave the cool," +
        " shady grove and set foot once more in search of any signs of freshwater or civilization. Feeling heavily parched," +
        " and with your exhaustion taking over again you don't know how much longer you can last in your current predicament." +
        " You tread forward, feeling weaker with each step, you start thinking \"this is the end.\" Just as you think you cannot go" +
        " any further, you come upon an overgrown woodpile. As you walk towards it, to the left of the mossy wood, you see a" +
        " small, stone cabin upon your approach, you notice missing glass in the windows that have been barricaded" +
        " with wooden planks. The front door is slightly ajar. As you look some more around the property, you hear a noise inside." +
        " A man's deep voice shouts, \"Demons! They will come! Demons!\"",


        'choice1': 'Run inside to help the man [1]',
        'choice2': 'You callout to the man. [2]',
        'choice3': 'You stay silent and hide. [3]',


        'press1': story1,
        'press2': story2,
        'press3': story3
}



let currentStory = story0

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

    if (!finished && e.code === 'Enter') {
        let guess = toNumber(inputElement.value)
        guessesleft -= 1

        if (guess === correct) {
            window.addEventListener('keydown', keyPress2)
            window.removeEventListener('keydown', keyPress1)
            document.getElementById('text2').classList.add('hidden')
            document.getElementById('text2').classList.remove('text2display')
            document.getElementById('textbox2').classList.remove('display')
            document.getElementById('textbox2').classList.add('hidden')
            document.getElementById('storymain').classList.remove('hidden')
            currentStory = Won
            updateStory()


        }
        else {
            if (guessesleft === 0) {
                window.addEventListener('keydown', keyPress2)
                window.removeEventListener('keydown', keyPress1)
                document.getElementById('text2').classList.add('hidden')
                document.getElementById('text2').classList.remove('text2display')
                document.getElementById('textbox2').classList.remove('display')
                document.getElementById('textbox2').classList.add('hidden')
                document.getElementById('storymain').classList.remove('hidden')
                currentStory = Lost
                updateStory()
                document.getElementById('button').classList.remove('hidden')
                document.getElementById("button").addEventListener('click', Replay);
                return
            }

            else if (guess > correct)
                textElement.innerText = 'She wasn\'t that old!'
            else if (guess < correct) {
                textElement.innerText = 'Not that young!'
            }

        }

        inputElement.value = ''


    }

}
function Replay (e) {
    window.location = "index.html";
}
function keyPress1 (e) {

    if (e.code === 'Digit2' && currentStory === story321112) {
        document.getElementById('button').classList.remove('hidden')
        document.getElementById("button").addEventListener('click', Replay);
        return
    }
    if (e.code === 'Digit1' && currentStory === story32111) {
        window.removeEventListener('keydown', keyPress1)
        window.addEventListener('keydown', keyPress2)
        document.getElementById('text2').classList.remove('hidden')
        document.getElementById('text2').classList.add('text2display')
        document.getElementById('textbox2').classList.remove('hidden')
        textElement.innerText = 'Prove it then. Prove you are any different. If you are not a mindless savage let\'s find out if you were listening to me. Tell me what the maiden\'s age was.'
        document.getElementById('textbox2').classList.add('display')
        document.getElementById('storymain').classList.add('hidden')
        return
    }

    else if (e.code === 'Digit1') {
        currentStory = currentStory.press1

    }    else if (e.code === 'Digit2') {
        currentStory = currentStory.press2

    }
        else if (e.code === 'Digit3') {
        currentStory = currentStory.press3


    }

        else {
            return;
    }

        const letterBox = document.getElementById('letter1')
        if (letterBox) {
            letterBox.remove()
        }

updateStory()
    {}


}



function main(){
    updateStory()
    document.addEventListener('keydown', keyPress1);
    document.getElementById('button').classList.add('hidden')
    document.getElementById('storymain').classList.remove('hidden')
    document.getElementById('textbox2').classList.remove('display')
    document.getElementById('text2').classList.add('hidden')
    document.getElementById('text2').classList.remove('text2display')
    inputElement = document.getElementById('number_guess')
    textElement = document.getElementById('text2')

}

function updateStory(){
    document.getElementById('storyStart').innerHTML = currentStory.text;
    document.getElementById('choiceStart1').innerText = currentStory.choice1;
    document.getElementById('choiceStart2').innerText = currentStory.choice2;
    document.getElementById('choiceStart3').innerText = currentStory.choice3;
}
