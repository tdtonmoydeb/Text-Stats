//SETTING UP ALL VARRIABLES
var textBox, words, letters;
var textBoxValue, wordsInTextBox;
textBox = document.getElementById('text-box');
words = document.getElementById('words');
letters = document.getElementById('letter');

// UPDATE THE LETTER AND WORD VALUE
function updateValue() {
    words.innerHTML = wordsInTextBox + " Words";
    letters.innerHTML = textBoxValue + " Letters";
}

// CONFIGURING THE TEXTAREA VALUE AND LOADING DATA FOR LETTER AND WORD
function loadData() {
    // VALIDATING FOR EMPTY TEXTAREA
    if (textBox.value == "") {
        // IF THERE WAS NO TEXT IN TEXTAREA THEN MAKING THE WORD AND LETTER VALUE TO ZERO
        wordsInTextBox = 00;
        textBoxValue = 00;
    } else {
        // IF THERE WAS SOME TEXT THEN
        // GETTING THE TEXT AND STORING IT 
        textBoxValue = textBox.value;
        // ERASING THE SPACES FORM TEXT AND STORING AS A ARRAY WITH REGEX FOR COUNTING WORD
        wordsInTextBox = textBoxValue.match(/\w+/g);
        // ERASING ALL SPACES FOR COUNTING LETTERS WITH REGEX
        textBoxValue = textBoxValue.replace(/\s/g, '');
        // DOING SOME BASIC STYLING
        wordsInTextBox = (wordsInTextBox.length < 10)? "0"+wordsInTextBox.length : wordsInTextBox.length;
        textBoxValue = (textBoxValue.length < 10)? "0"+textBoxValue.length : textBoxValue.length;
    }
    // UPDATING THE VALUE IN WORD AND LETTER BOX
    updateValue()
}

function clearText() {
    // VALIDATING THAT IS THERE ANY TEXT IN TEXTAREA
    if(textBox.value != ""){
        // CONFIRMING USER FOR CLEAR ALL DATA
        let confirmClear = confirm("Do You Want Clear All Text??");
        //VALIDATING THE CONFIRMATION
        if(confirmClear){ 
            // RESETING ALL VALUES
            textBox.value = "";
            textBoxValue = 00;
            wordsInTextBox = 00;
            // UPDATING THE VALUE IN WORD AND LETTER BOX
            updateValue();
        }
    }
}
