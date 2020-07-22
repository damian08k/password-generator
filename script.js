const passwordBtn = document.querySelector(".generator-left__generate-password");
const inputCharacters = document.querySelector(".generator-left__input--characters");
const generatorRightArea = document.querySelector(".generator-right");
const inputSpecials = document.querySelectorAll(".generator-left__input--special");
const labelsSpecials = document.querySelectorAll(".generator-left__label--special");

const passwordSigns = {
    smallLetters: "abcdefghijklmnopqrstuvwxyz",
    bigLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    digitals: "1234567890",
    specialSigns: "!@#$%^&*()<>?=+",
}

let password = "";
let inputPosition = 0;

const checkInputsValues = (numChars) => {
    let counter = 0;
    const maxCounterValue = 5;

    if (numChars === "") {
        alert("Number of characters area cannot be empty!");
    } else if (numChars < 8 || numChars > 14) {
        alert("You wrote too much or too little number of characters. It should be 8 - 14");
    } else {
        counter++;
    }

    inputSpecials.forEach((input, index) => {
        if (input.value === "") {
            alert(`${labelsSpecials[index].innerText.slice(0, -1)} cannot be empty!`);
        } else if (input.value < 1 || input.value > 10) {
            alert(`You wrote too much or too little ${labelsSpecials[index].innerText.slice(0, -1).toLowerCase()}.`);
        } else {
            counter++;
        }
    })
    return counter === maxCounterValue ? true : false;
}

const checkIsCorrectValues = (numChars, smallLet, bigLet, digitals, specSigns) => {
    const total = parseInt(smallLet) + parseInt(bigLet) + parseInt(digitals) + parseInt(specSigns);
    if (total < numChars || total > numChars) {
        alert("You want to create password which has too much or too little characters than you chose!");
        return false;
    } else {
        return true;
    }
}

const clearInputsValues = () => {
    inputCharacters.value = "";
    inputSpecials.forEach(input => input.value = "");
}

const drawingSigns = (value) => {
    let randomNumber = 0;

    for (let i = 1; i <= value; i++) {
        switch (inputPosition) {
            case 0:
                randomNumber = Math.floor(Math.random() * passwordSigns.smallLetters.length)
                password += passwordSigns.smallLetters[randomNumber];
                break;
            case 1:
                randomNumber = Math.floor(Math.random() * passwordSigns.bigLetters.length)
                password += passwordSigns.bigLetters[randomNumber];
                break;
            case 2:
                randomNumber = Math.floor(Math.random() * passwordSigns.digitals.length)
                password += passwordSigns.digitals[randomNumber];
                break;
            case 3:
                randomNumber = Math.floor(Math.random() * passwordSigns.specialSigns.length)
                password += passwordSigns.specialSigns[randomNumber];
                break;
        }

    }
    inputPosition++;
    return password;
}

const clearPasswordAndInputPosition = () => {
    password = "";
    inputPosition = 0;
}

const checkParagraphExist = () => {
    const passwordParagraph = document.querySelector(".generator-right__password");

    if (passwordParagraph !== null) {
        generatorRightArea.removeChild(passwordParagraph);
    }

}

const createPassword = () => {
    let numChars = inputCharacters.value;
    let smallLet = inputSpecials[0].value;
    let bigLet = inputSpecials[1].value;
    let digitals = inputSpecials[2].value;
    let specSigns = inputSpecials[3].value;
    const allValues = [smallLet, bigLet, digitals, specSigns];

    const canCreate = checkInputsValues(numChars);
    const isCorrect = checkIsCorrectValues(numChars, smallLet, bigLet, digitals, specSigns);

    if (canCreate && isCorrect) {
        allValues.forEach(value => drawingSigns(value));
    }

    checkParagraphExist();
    const paragraph = document.createElement("p");
    paragraph.classList.add("generator-right__password");
    paragraph.textContent = password.split('').sort(() => 0.5 - Math.random()).join('');
    generatorRightArea.appendChild(paragraph);

    clearInputsValues();
    clearPasswordAndInputPosition();
}

passwordBtn.addEventListener("click", createPassword);