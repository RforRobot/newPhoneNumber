for (input of oldDigitBoxes.concat(offsetDigitBoxes)) {
    input.addEventListener("input", inputHandler);
}

function inputHandler() {

    console.log("Input change")

    for (var i = 0; i < numColumns - 1; i++) {

        if (!oldDigitBoxes[i].value || !offsetDigitBoxes[i].value) {
            outPutDigitBoxes[i].value = '';
        } else {
            outPutDigitBoxes[i].value =(parseInt(oldDigitBoxes[i].value) + parseInt(offsetDigitBoxes[i].value)) % 10;
        }
    }

}