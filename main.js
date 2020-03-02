//main.js

//link the button and change color when roll over
let button = document.getElementById('button');

button.onmouseover = () => { 
    button.style.backgroundColor = 'slategray';
}

button.onmouseout = () => { 
    button.style.backgroundColor = 'darkslategray';
}


//removes value from input field when typing 
let inputField = document.getElementById('input');

// inputField.onblur = () => {
//     inputField.value = 'Enter City'
//     inputField.style.color = 'lightgray'
// }

inputField.onfocus = () => {
    inputField.value = ''
    inputField.style.color = 'black'
}

//hide the weather results secion until form submitted
document.getElementById('forecast').hidden = true;


//submit 

const weatherKey = '014de69db2b0b78116006b5a3fb13332'
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='

// const getData = async () => {
//     try {
//       const city = inputField.value  
//       const response = await fetch(`${weatherURL}${city}&appid=${weatherKey}`)
//       console.log(response.ok)
//       if (response.ok) {
//         const jsonResponse = await response.json()
//         return jsonResponse;
//       }
//       throw new Error('Request ### failed!')
//     }
//     catch(error) {
//       console.log(error)
//     }
//   }

const getData = async () => {
      const city = "paris"  
      const response = await fetch(`${weatherURL}${city}&appid=${weatherKey}`)
      const jsonResponse = await response.json()
      return jsonResponse;
      }


getData().then(jsonResponse => console.log(jsonResponse))

//   button.onclick = () => { 
//       getData()
    // getData().then(jsonResponse => console.log(jsonResponse))
//}



// const getData = () => {
//     console.log('getData')
//     const city = inputField.value
//     const request = `${weatherURL}${city}&appid=${weatherKey}`
//     fetch(request).then(response => {
//         if (response.ok) {
//             console.log(response.json());
//         }})   
// }

