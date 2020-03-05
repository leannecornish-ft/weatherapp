//main.js

//Get HTML Elements from index.html
let button = document.getElementById('button');
let form = document.getElementById('send-form');
let locationInput = document.getElementById('location-input')

// //link the button and change color when roll over
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
  //const userText = document.getElementById('input').value  
  const city = 'London'
  const urlToFetch = `${weatherURL}${city}&appid=${weatherKey}`
  try {
    const response = await fetch(urlToFetch)
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

  const renderWeather = (item) => {
    return `${item.weather[0].description}`
  }


const displayWeather = (event) => {
  event.preventDefault();
  getData().then(item => {
    forecast.hidden = false;
    locationInput.hidden = true;
    return forecast.append(renderWeather(item))
  })
}

// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
//   getSuggestions();
// };

// submit.addEventListener('click', displaySuggestions);

// function handleForm(event) { event.preventDefault();

form.addEventListener("submit", displayWeather)




//getData()