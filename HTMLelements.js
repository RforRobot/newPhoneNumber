//const mainTable = document.getElementsByTagName('table'); 
const mainTable = document.getElementById('main');

numColumns = 8;

// boxes for digits of old phone number
var oldDigitBoxes = [];
// boxes for digits of offset
var offsetDigitBoxes = [];
// boxes for digits of output
var outPutDigitBoxes = [];

populateMainTable();

for(const box of outPutDigitBoxes) {
    box.disabled='true';
}


