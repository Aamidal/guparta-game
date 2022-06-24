const Pachei = {characterName: "Pachei", inventory: [],};
const shipName = 'Tranquil Cloud'
const shipPrefix ='LRSS'
const yourShip = `${shipPrefix} ${shipName.italics()}`


let sceneUI = document.getElementById("gameScene");
let questionUI = document.getElementById("gameQuestion");
let choiceUI = document.getElementById("gameChoice");
let checkName = false;

if (checkName === false) {
    runNameTest();
}
else {
    examineRoom();
}

function clearScene() {
    sceneUI.textContent = '';
    choiceUI.textContent = '';
    questionUI.textContent = '';
}

function runNameTest() {
    let nameFail = false
    let nameCorrection = false;
    let sceneDesc = document.createElement("p");
    sceneDesc.textContent = `You stand in your quarters on the ${yourShip}
    You are a young woman and it is not your birthday.`;
    sceneUI.appendChild(sceneDesc);
    let sceneQuestion = document.createElement('p');
    sceneQuestion.textContent = 'What is your name?';
    questionUI.appendChild(sceneQuestion);
    let scenePrompt = document.createElement('input');
    scenePrompt.placeholder = "Try writing your name";
    scenePrompt.id = "nameTest";
    scenePrompt.autocomplete = "off";
    choiceUI.appendChild(scenePrompt);
    let sceneButton = document.createElement('button');
    sceneButton.textContent = "Submit";
    sceneButton.id = 'submitName'
    sceneButton.addEventListener('click', checkName);
    choiceUI.appendChild(sceneButton);

    function checkName() {
        let nameHint = Pachei.characterName.toLowerCase()
        let responsePara = document.createElement("p");
        let answerPara = document.createElement("p");
        let submitButton = document.getElementById("submitName");
        let nameEntry = document.getElementById("nameTest");
        let nameInput = document.getElementById("nameTest").value;;

        answerPara.textContent = '';
        responsePara.textContent= '';
        questionUI.appendChild(answerPara);
        questionUI.appendChild(responsePara);

        answerPara.textContent = `${nameInput}`;
        if (nameInput === Pachei.characterName) {

            if (nameFail === true) {
                responsePara.textContent = `Well, you may not have remembered
                your name immediately, but at least you got there in the end.`;
                nextScene();

            } else {
                responsePara.textContent = 'Yes, you are Pachei.';
                nextScene();
            }

        }
        else if (nameInput.toLowerCase() === Pachei.characterName.toLowerCase()) {
            nameHint = Pachei.characterName;
            if (nameCorrection === false) {
                nameCorrection = true;
                responsePara.textContent = `Hmph. While that is technically 
                correct, it suggests a certain young woman does not have an eye 
                for detail or has not taken her grammar lessons to heart. 
                <br><br> Let's try it like this.`
                writeHint();
            }
            else {
                responsePara.textContent = `…Is it really necessary to play around
                with something as important as your name? That's a good way to get 
                lost in the Dreaming Kingdoms, young lady.
                <br><br>Let's try that again.`

                nameEntry.value = ''
                submitButton.style.display = "none";
                submitButton.textContent = "Try Again";
                nameEntry.style.display = "none";
                setTimeout(() => {submitButton.style.display = "inline"}, 1500);
                setTimeout(() => {
                    nameEntry.style.display = "block";
                    nameEntry.disabled = true;
                    for (let i = 0; i < nameHint.length; i++) {
                        setTimeout(() => {
                            nameEntry.value += nameHint[i];
                        }, i * 200);
                    }
                }, 500)
            }
            
        }
        // Edit between these lines!!! //
        else if (nameInput.toLowerCase() === 'mojgan') {
            nameFail = true;
            responsePara.textContent = `No, Mojgan is your Hosalira. Let me help you.`;
            writeHint();
        }

        else if (nameInput.toLowerCase() === 'tavalas') {
            nameFail = true;
            responsePara.textContent = `No, Tavalas is your physician. Let me help you.`;
            writeHint();
        }

        else if (nameInput.toLowerCase() === 'nihn') {
            nameFail = true;
            responsePara.textContent = `No, Nihn is your pilot and princess. Let me help you.`;
            writeHint();
        }


        else if (nameInput.toLowerCase() === 'gunner') {
            nameFail = true;
            responsePara.textContent = `No, Gunner is a good boy. Let me help you.`;
            writeHint();
        }

        else if (nameInput.toLowerCase() === 'bahareh') {
            nameFail = true;
            responsePara.textContent = `...You don't know anyone by that name. Let me help you.`;
            writeHint();
        }

        else if (nameInput.toLowerCase() === 'nazanin') {
            nameFail = true;
            responsePara.textContent = `No, Nazanin is your former Hosalira. Let me help you.`;
            writeHint();
        }

        // Edit between these lines!!!//

        else {
            nameFail = true;
            responsePara.textContent = `No, that's not your name!
            Here, let me show you how to use the text entry field.`;
            writeHint();
        }

        function writeHint() {
        nameEntry.value = ''
        submitButton.style.display = "none";
        submitButton.textContent = "Try Again";
        nameEntry.style.display = "none";
        setTimeout(() => {submitButton.style.display = "inline"}, 1500);
        setTimeout(() => {
            nameEntry.style.display = "block";
            for (let i = 0; i < nameHint.length; i++) {
                setTimeout(() => {
                    nameEntry.value += nameHint[i];
                }, i * 200);
            }
        }, 500)
        }
    
        function nextScene() {
            submitButton.remove();
            nameEntry.remove();
            let goToRoom = document.createElement("button");
            goToRoom.textContent = "Examine your room";
            goToRoom.addEventListener('click', examineRoom);
            choiceUI.appendChild(goToRoom), checkName = true;
        }
    }

}

function examineRoom() {
    clearScene();
    let sceneDesc = document.createElement('p');
    sceneDesc.textContent = `
    Your room is one of four private cabins on the ${yourShip}. It is a standard
    size stateroom for a Type-S scout. It is also the most square footage that's
    ever been yours, and most of the time you don't have to share it with
    anybody at all. The room isn't exactly messy, but it is a strange amalgam of
    the belongings from the old inhabitants, your few possessions, and some 
    things your sometimes-roommate has left behind.`;
    sceneUI.appendChild(sceneDesc);
    let sceneQuestion = document.createElement('p');
    sceneQuestion.textContent = "It is a good place to think.";
    questionUI.appendChild(sceneQuestion);
    let sceneButton = document.createElement('button');
    sceneButton.textContent = "Consider your thoughts"
    sceneButton.addEventListener('click', roomThink);
    choiceUI.appendChild(sceneButton);

    function roomThink() {
        choiceUI.textContent = 'You consider your thoughts.';
        let answerPara = document.createElement('p');
        answerPara.textContent = "There is a lot to think about.";
        choiceUI.appendChild(answerPara);
    }
}
