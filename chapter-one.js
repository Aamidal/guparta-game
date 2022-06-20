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

function runNameTest() {
    let nameFail = false
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
    sceneButton.onclick = checkName;
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

            if (nameFail === false) {
                responsePara.innerHTML = "Yes, that is your name.";
            }
            else {
                responsePara.innerHTML = `Well. You may not have remembered
                your name immediately, but at least you have an eye for
                detail.`;
            }

            submitButton.remove();
            nameEntry.remove();
            let nextScene = document.createElement("button");
            nextScene.innerHTML = "Examine your room";
            nextScene.onclick = examineRoom;
            choiceUI.appendChild(nextScene), checkName = true;
        }
        else if (nameInput === "pachei") {
            nameFail = false;
            responsePara.innerHTML = `While that is technically correct,
            it suggests a certain young woman has not taken her grammar
            lessons to heart.`
            writeHint();

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
    }

}

function examineRoom() {
    sceneUI.innerHTML = '';
    choiceUI.innerHTML = '';
    questionUI.innerHTML = '';
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
    sceneButton.onclick = roomThink;
    choiceUI.appendChild(sceneButton);

    function roomThink() {
        choiceUI.innerHTML = 'You consider your thoughts.';
        let answerPara = document.createElement('p');
        answerPara.innerHTML = "There is a lot to think about.";
        choiceUI.appendChild(answerPara);
    }
}
