// mainTable,colorRow defined in HTMLelements

function populateMainTable() {

    const numRows = 3;

    for (var i = 0; i < numRows; i++) {
        mainTable.insertRow();
        for (var j = 0; j < numColumns; j++) {
            mainTable.rows[i].insertCell();
        }
    }

    for (var i = 0; i < numRows; i++) {
        for (var j = 1; j < numColumns; j++) {
            var cell = mainTable.rows[i].cells[j];

            var boxList;

            switch (i) {
                case 0:
                    createInput(cell, oldDigitBoxes);
                    break;
                case 1:
                    createInput(cell, offsetDigitBoxes);
                    break;
                case 2:
                    createInput(cell, outPutDigitBoxes);
                    break;
                default:
                    console.log("Unknown row number: " + i);
            }
        }
    }

    mainTable.rows[0].cells[0].innerHTML = "Old number:";
    mainTable.rows[1].cells[0].innerHTML = "Offset:";
    mainTable.rows[2].cells[0].innerHTML = "New number:";
}

function createInput(cell, boxList) {
    var input = document.createElement("input");
    input.type = "number";
    input.min = 0;
    input.max = 9;
    cell.append(input);
    boxList.push(input);
}


function addMoreDigits(mainTable) {

    //TODO: add more input boxes

}