const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const offset = urlParams.get('offset');

// without this, the offsetter func was not ready before used
window.addEventListener('load', function () {
    offsetter();
})


// Transforming string to numbers
const offsetValue = [];

for (const char of offset) {
    offsetValue.push(parseInt(char));
}

// Transfer offset data to boxes

function offsetter() {
    var boxIndexer = 0;
    for (const box of offsetDigitBoxes) {
        box.value = offsetValue[boxIndexer];
        boxIndexer++;
    }
}



