const firstNumber = document.querySelector(".n1");
const secondNumber = document.querySelector(".n2");
const thirdNumber = document.querySelector(".n3");
const fourthNumber = document.querySelector(".n4");
const fiveNumber = document.querySelector(".n5");
const sixthNumber = document.querySelector(".n6");
const button = document.querySelector(".sortButton");

function sortNumber() {


        firstNumber.textContent === '';
        firstNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));

        secondNumber.textContent === '';
        secondNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));

        thirdNumber.textContent === '';
        thirdNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));

        fourthNumber.textContent === '';
        fourthNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));

        fiveNumber.textContent === '';
        fiveNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));


        sixthNumber.textContent === '';
        sixthNumber.innerHTML = fixZero(Math.floor(Math.random() * 60));
}

for (let c = 0; c < 10; c++) {
        if (firstNumber == 0) {
                fiveNumber = c++;
        } 
}
for (let a = 0; a < 10; a++) {
        if (secondNumber == 0) {
                secondNumber = a++;
        } 
}
for (let i = 0; i < 10; i++) {
        if (thirdNumber == 0) {
                thirdNumber = i++;
        } 
}
for (let k = 0; k < 10; k++) {
        if (fourthNumber == 0) {
                fourthNumber = k++;
        } 
}
for (let e = 0; e < 10; e++) {
        if (fiveNumber == 0) {
                fiveNumber = e++;
        } 
}
for (let g = 0; g < 10; g++) {
        if (sixthNumber == 0) {
                sixthNumber = g++;
        } 
}

function fixZero(number) {
        return number < 10 ? `0${number}` : number;
}

button.addEventListener('click', sortNumber);