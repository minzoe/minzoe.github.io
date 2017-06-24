var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending": false
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 3
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting",
        "ending": false
    },
    {
        "id": 3,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending": true,
        "happy": false
    },
    {
        "id": 4,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Go Forward",
        "title": "A door",
        "description": "You hope this leads outside.",
        "ending": true,
        "happy": true
    }];



//updates the screen to show the current description and choices
//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);
    console.log(instruction);
    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints
    if (instruction.ending == true) {
        document.getElementById('choiceOne').innerHTML = "";
        document.getElementById('choiceTwo').innerHTML = "";
        //if endpoints then end the game
        if (instruction.happy == true) {
            document.getElementById('display').innerHTML = "Congrats on finding the door. Good luck in your next adventure."
        } else {
            document.getElementById('display').innerHTML = "Whoops, better luck next time."
        }
    }
    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
}

function getItem(instructions, id) {
    for (i = 0; i < instructions.length; i++) {
        if (id == instructions[i].id) {
            return instructions[i];
        }
    }
}

function updateElement(name, item) {
    document.getElementById(name).innerHTML = item;
}

function updateButton(buttonId, choiceId) {
    var button = document.getElementById(buttonId);
    button.setAttribute("onclick", "nextStep(" + choiceId + ")");
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element

//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.

//updateButton: sets the onclick event for a button with the id of the item it chooses

//2. then create and use a function to initialize the game to step 1
window.onload = function () {
    nextStep(1);
};
//3. other needed functions
//restart: resets the game back to the beginning.
function restart() {
    window.location.reload();
}
//happy ending: does whatever we want it to do when they end in a good place    

//sad ending: does whatever we want it to do if they end at a bad place

//Kienen Kotter
