//main.js

//link the button and change color when roll over
let button = document.getElementById('button');

button.onmouseover = () => { 
    button.style.backgroundColor = 'slategray';
}

button.onmouseout = () => { 
    button.style.backgroundColor = 'darkslategray';
}


//Removes value from input field when typing 
let inputField = document.getElementById('input');

inputField.onblur = () => {
    inputField.value = 'Enter City'
    inputField.style.color = 'lightgray'
}

inputField.onfocus = () => {
    inputField.value = ''
    inputField.style.color = 'black'
}

//Hide the weather results secion
document.getElementById('forecast').hidden = true;