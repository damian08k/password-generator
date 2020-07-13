const passwordBtn = document.querySelector(".generator-left__generate-password");
const inputCharacters = document.querySelector(".generator-left__input--characters");
const inputSpecials = document.querySelectorAll(".generator-left__input--special");
const labelsSpecials = document.querySelectorAll(".generator-left__label--special");

const passwordSigns = {
    smallLetters: ["abcdefghijklmnopqrstuvwxyz"],
    bigLetters: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    specialSigns: ["!@#$%^&*()<>?=+"]
}

const checkInputsValues = () => {
    let counter = 0;
    const maxCounterValue = 5;

    if (inputCharacters.value === "") {
        alert("Number of characters area cannot be empty!");
    } else if (inputCharacters.value < 8 || inputCharacters.value > 14) {
        alert("You wrote too many number of characters. It should be 8 - 14");
    } else {
        counter++;
    }

    inputSpecials.forEach((input, index) => {
        if (input.value === "") {
            alert(`${labelsSpecials[index].innerText.slice(0, -1)} cannot be empty!`);
        } else if (input.value < 1 || input.value > 10) {
            alert(`You wrote too many ${labelsSpecials[index].innerText.slice(0, -1).toLowerCase()}.`);
        } else {
            counter++;
        }
    })
    return counter === maxCounterValue ? true : false;
}

const createPassword = () => {
    const canCreate = checkInputsValues();
    if (canCreate) {
        // ...
    }
}

passwordBtn.addEventListener("click", createPassword);