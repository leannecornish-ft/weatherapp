//Get HTML Elements from index.html
let button = document.getElementById('button');
let form = document.getElementById('send-form');
let locationInput = document.getElementById('location-input');
let userText = document.getElementById('input'); 
let forecast = document.getElementById('forecast'); 
let description = document.getElementById('description');
let reset = document.getElementById('reset');


//link the button and change color when roll over

// const mouseOverColour = (source) => {
//   source.style.backgroundColor = 'slategray';
// }

// const mouseOutColour = (source) => {
//   source.style.backgroundColor = 'darkslategray';
// }

button.onmouseover = () => { 
    button.style.backgroundColor = 'slategray';
}

button.onmouseout = () => { 
    button.style.backgroundColor = 'darkslategray';
}


//removes value from input field when typing 
let inputField = document.getElementById('input');

inputField.onblur = () => {
    inputField.value = 'enter city'
    inputField.style.color = 'lightgray'
}

inputField.onfocus = () => {
    inputField.value = ''
    inputField.style.color = 'black'
}

//hide the weather results secion until form submitted
forecast.hidden = true;
reset.hidden = true;



//API variables 

const weatherKey = '014de69db2b0b78116006b5a3fb13332'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='


//AJAX request
const getData = async () => {
  const city = userText.value
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

//Selecting items to display  
  const renderWeather = (item) => {
    let temperature = Math.floor(item.main.temp - 273.15)
    let feelsLike = Math.floor(item.main.feels_like - 273.15)
    let date = Date.now();
    return `<h1>The weather in ${item.name}, ${item.sys.country}</h1>
    <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
    <h2>Conditions: ${item.weather[0].description}</h2>
    <h2>Temperature: ${temperature}&deg</h2>
    <h2>Feels like: ${feelsLike}&deg</h2>
    <h2>Wind speed: ${item.wind.speed}mph</h2>`
  }


//Calling getData() to make the API call. Adding rendered return to page.
const displayWeather = (event) => {
  event.preventDefault();
  getData().then(item => {
    forecast.hidden = false;
    reset.hidden = false;
    locationInput.hidden = true;
    return forecast.innerHTML = (renderWeather(item))
  })
}


//Reset 
const resetPage = () => {
  locationInput.hidden = false;
  forecast.hidden = true;
  reset.hidden = true;
  userText.value = 'enter city'
  userText.style.color = 'lightgray'
}

//Listener for submitting the form and resetting
form.addEventListener("submit", displayWeather);
reset.addEventListener("click", resetPage);




