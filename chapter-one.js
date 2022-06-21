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
    sceneUI.innerHTML = '';
    choiceUI.innerHTML = '';
    questionUI.innerHTML = '';
}

function runNameTest() {
    let nameFail = false
    let nameCorrection = false;
    let sceneDesc = document.createElement("p");
    sceneDesc.innerHTML = `You stand in your quarters on the ${yourShip}
    You are a young woman and it is not your birthday.`;
    sceneUI.appendChild(sceneDesc);
    let sceneQuestion = document.createElement('p');
    sceneQuestion.innerHTML = 'What is your name?';
    questionUI.appendChild(sceneQuestion);
    let scenePrompt = document.createElement('input');
    scenePrompt.placeholder = "Try writing your name";
    scenePrompt.id = "nameTest";
    scenePrompt.autocomplete = "off";
    choiceUI.appendChild(scenePrompt);
    let sceneButton = document.createElement('button');
    sceneButton.innerHTML = "Submit";
    sceneButton.id = 'submitName'
    sceneButton.addEventListener('click', checkName);
    choiceUI.appendChild(sceneButton);

    function checkName() {
        let nameHint = Pachei.characterName
        let responsePara = document.createElement("p");
        let answerPara = document.createElement("p");
        let submitButton = document.getElementById("submitName");
        let nameEntry = document.getElementById("nameTest");
        let nameInput = document.getElementById("nameTest").value;;

        answerPara.innerHTML = '';
        responsePara.innerHTML= '';
        questionUI.appendChild(answerPara);
        questionUI.appendChild(responsePara);

        answerPara.innerHTML = `${nameInput}`;
        if (nameInput === 'Pachei') {

            if (nameFail === true) {
                responsePara.innerHTML = `Well. You may not have remembered
                your name immediately, but at least you have an eye for
                detail.`;
                nextScene();

            } else {
                responsePara.innerHTML = 'Yes. That is your name.';
                nextScene();
            }

        }
        else if (nameInput === "pachei") {
            if (nameCorrection === false) {
                nameCorrection = true;
                responsePara.innerHTML = `While that is technically correct, it 
                suggests a certain young woman does not have an eye for detail or 
                has not taken her grammar lessons to heart. 
                <br> Let's try it like this.`
                writeHint();
            }
            else {
                responsePara.innerHTML = `…Is it really necessary to play around
                with something as integral as your name? Playing about like that
                is a way to get lost in the dreaming kingdoms, young lady. <br>
                Let's try that again.`

                nameEntry.value = ''
                submitButton.style.display = "none";
                submitButton.innerHTML = "Try Again";
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
        else {
            nameFail = true;
            responsePara.innerHTML = `No, that's not your name!
            Here, let me show you how to use the text entry field.`;
            nameHint = 'pachei';
            writeHint();
        }

        function writeHint() {
        nameEntry.value = ''
        submitButton.style.display = "none";
        submitButton.innerHTML = "Try Again";
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
            goToRoom.innerHTML = "Examine your room";
            goToRoom.addEventListener('click', examineRoom);
            choiceUI.appendChild(goToRoom), checkName = true;
        }
    }

}

function examineRoom() {
    clearScene();
    let sceneDesc = document.createElement('p');
    sceneDesc.innerHTML = `
    Your room is one of four private cabins on the ${yourShip}. It is a standard
    size stateroom for a Type-S scout. It is also the most square footage that's
    ever been yours, and most of the time you don't have to share it with
    anybody at all. The room isn't exactly messy, but it is a strange amalgam of
    the belongings from the old inhabitants, your few possessions, and some 
    things your sometimes-roommate has left behind.`;
    sceneUI.appendChild(sceneDesc);
    let sceneQuestion = document.createElement('p');
    sceneQuestion.innerHTML = "It is a good place to think.";
    questionUI.appendChild(sceneQuestion);
    let sceneButton = document.createElement('button');
    sceneButton.innerHTML = "Consider your thoughts"
    sceneButton.addEventListener('click', roomThink);
    choiceUI.appendChild(sceneButton);

    function roomThink() {
        choiceUI.innerHTML = 'You consider your thoughts.';
        let answerPara = document.createElement('p');
        answerPara.innerHTML = "There is a lot to think about.";
        choiceUI.appendChild(answerPara);
    }
}
