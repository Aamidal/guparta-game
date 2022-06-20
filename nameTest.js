const Pachei = {characterName: "Pachei", inventory: [],};

let chapterOneStage = 0;

let chapterOne = [
    {

    }
]

function checkName() {
    let nameHint = Pachei.characterName
    let responsePara = document.getElementById("nameTestResponse");
    let answerPara = document.getElementById("nameTestAnswer");
    let submitButton = document.getElementById("submitName");
    let nameEntry = document.getElementById("nameTest");
    let nameInput = document.getElementById("nameTest").value;
    let nameFail = false;

    answerPara.innerHTML = `${nameInput}.`;
    if (nameInput === Pachei.characterName) {
        if (nameFail === false) {
            responsePara.innerHTML = "Yes, that is your name.";
        }
        else {
            responsePara.innerHTML = `Well. You may not have remembered
            your name immediately, but at least you have an eye for
            detail.`
        }
        submitButton.remove();
        nameEntry.remove();
        let nextScene = document.createElement("button");
        nextScene.innerHTML = "Examine your room";
        let gameSpace = document.getElementById("gameChoice");
        gameSpace.appendChild(nextScene);
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
