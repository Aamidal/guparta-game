const sceneTitle = document.getElementById("title");
const sceneDesc = document.getElementById("desc");
const sceneAction = document.getElementById("action");

const Pachei = {
    name: "Pachei",
    money: 0,
    inventory: [],
    currentLocation: null,
    reputation: {
        nazanin: 0,
        sudanis: 0,
        jesrai: 0,
        goldie: 0,
        mojgan: 0,
        tavalas: 0,
        cahiid: 0,
        chatecis: 0,
        asema: 0,
        autarch: 0,
        cursecube: 0,
    }
}

const Locations = {
    DreamingKingdoms: {
        name: "Somewhere in the Dreaming Kingdoms",
        description: "What's your name?",
        visits: 0,
        onEnter() {
            if (!Locations.DreamingKingdoms.visits++) {
                const names = {
                    'pachei': `Hmph. While that is technically correct, it 
                            suggests a certain young woman does not have an eye 
                            for detail or has not taken her grammar lessons to 
                            heart.`,
                    'sudanis jesrai': `No, she is your sister student.`,
                    'nazanin': 'No, she is your hosalira.',
                    'atena zareii': 'No, she is your deyzalira.',
                    'mhasrin': 'No, that is the Autarch, blessed be her name.',
                    'ranis rin': 'No, she is the Sunbird of Teraat.'
                    };
                const unknownName = `No, that's not your name! Let me show you
                        how to use the text entry field.`;
                const nameCorrection = "Let's try it like this."
                const correctName = "Yes, that is your name."

                let name = ""

                function checkName(answer) {
                    console.log(answer)
                    if (answer == "Pachei") {
                        createText(correctName);
                        name = answer
                    }
                    else if (answer.toLowerCase() in names) {
                        createText(names[answer]);
                        createText(nameCorrection);}
                    else {
                        createText(unknownName);
                    }
                }

                if (name != Pachei.name) {
                    createInput("Try writing your name");
                    let answer = document.querySelector("answer").value;
                    createButton("Submit Name", () => checkName(answer));
                }
            }
        },
        commands: [],
        objects: [],
    },

    Dorm: {
        name: "Your Room",
        description: "Your dorm is much nicer now that it is cleaned up.",
        visits: 0,
        onEnter() {
            if (!Locations.Dorm.visits++) {
                sceneDesc.textContent = "Your dorm is gross! Clean it up!";
                createButton("Clean it up!", ()=>Go(Locations.Dorm))
            }
            else {
                createInput('Do you like your dorm?');
                createButton('Tell me!', ()=> {
                    let input = document.querySelector(".answer")
                    let button = document.querySelector("button");
                    let answer = document.querySelector(".answer").value;
                    if (answer.toLowerCase() != 'yes') {replaceText('Oh :(')}
                    else {
                        replaceText('Yay!');
                        input.remove();
                        button.remove();
                        createButton("Next scene, please!",
                        () => Go(Locations.DreamingKingdoms))
                    }
                })
            }

        },
        commands: [],
        objects: [],
    },

}

const Items = {
    dancers_shoes: {
        name: "a pair of red-soled shoes"
    }
}

function createText(text) {
    let newText = document.createElement("p");
    newText.textContent = text;
    sceneDesc.appendChild(newText);
}

function replaceText(text) {
    sceneDesc.textContent = text;
}

function createInput(placeholder) {
    let input = document.createElement("input");
    input.placeholder = placeholder;
    input.autocomplete = "off";
    input.className = "answer";
    sceneAction.appendChild(input);
}

function createButton(text, listener) {
    let button = document.createElement("button");
    button.textContent = text;
    button.onclick = listener
    sceneAction.appendChild(button);
}

function Go(location) {
    Pachei.currentLocation = location;
    sceneTitle.innerHTML = location.name;
    sceneDesc.innerHTML = location.description;
    sceneAction.innerHTML = location.commands;
    location.onEnter();
    
}

function Take(item) {
    Pachei.inventory.push(item);
    createText(`You picked up ${item.take}!`)
}

function Drop(item) {
    invID = Pachei.inventory.indexOf(item);
    Pachei.inventory.splice(invID, 1);
    createText(`You dropped your ${item.drop}!`)
}


Go(Locations.Dorm);