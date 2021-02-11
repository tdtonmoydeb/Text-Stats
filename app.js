var textBox, words, letters;
var textBoxValue, wordsInTextBox;
textBox = document.getElementById('text-box');
words = document.getElementById('words');
letters = document.getElementById('letter');

function updateValue() {
    words.innerHTML = wordsInTextBox + " Words";
    letters.innerHTML = textBoxValue + " Letters";
}

function loadData() {
    if (textBox.value == "") {
        wordsInTextBox = 00;
        textBoxValue = 00;
    } else {
        textBoxValue = textBox.value;
        wordsInTextBox = textBoxValue.match(/\w+/g);
        console.log(wordsInTextBox);
        textBoxValue = textBoxValue.replace(/\s/g, '');
        wordsInTextBox = (wordsInTextBox.length < 10)? "0"+wordsInTextBox.length : wordsInTextBox.length;
        textBoxValue = (textBoxValue.length < 10)? "0"+textBoxValue.length : textBoxValue.length;
    }
    
    updateValue()
}

function clearText() {
    if(textBox.value != ""){
    let confirmClear = confirm("Do You Want Clear All Text??");
    if(confirmClear){ 
    textBox.value = "";
    textBoxValue = 00;
    wordsInTextBox = 00;

    updateValue();
    }
}
}
