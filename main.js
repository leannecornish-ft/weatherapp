//main.js

// //link the button and change color when roll over
let button = document.getElementById('button');

// button.onmouseover = () => { 
//     button.style.backgroundColor = 'slategray';
// }

// button.onmouseout = () => { 
//     button.style.backgroundColor = 'darkslategray';
// }


// //removes value from input field when typing 
// let inputField = document.getElementById('input');

// inputField.onblur = () => {
//     inputField.value = 'Paris'
//     inputField.style.color = 'lightgray'
// }

// inputField.onfocus = () => {
//     inputField.value = ''
//     inputField.style.color = 'black'
// }

//hide the weather results secion until form submitted
document.getElementById('forecast').hidden = true;



//submit 

const weatherKey = '014de69db2b0b78116006b5a3fb13332'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='


const getData = async () => {
  const userText = document.getElementById('input').value  
  console.log('user text:' + userText)
  try {
    const response = await fetch(`${weatherURL}${userText}&appid=${weatherKey}`) 
    console.log(response.ok) 
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      return jsonResponse;
    }
    throw new Error('Request failed!')
  }
  catch(error) {
    console.log(error)
    }
  }

const displayWeather = () => {
  getData()
}

button.addEventListener('click', displayWeather) 

getData()









