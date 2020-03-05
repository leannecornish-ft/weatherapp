
const submit = document.getElementById('button');
const weatherKey = '014de69db2b0b78116006b5a3fb13332'
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='

const getData = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=leeds&appid=014de69db2b0b78116006b5a3fb13332');
    const post = await response.json()
    console.log(post)
    return post

    // const city = 'leeds'
    // const urlToFetch = `${weatherURL}${city}&appid=${weatherKey}`;
    // let response;
    // try {
    //     response = await fetch(urlToFetch);
    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         console.log(jsonResponse);
    //         return jsonResponse
    //         } 
    //     throw new Error('Request failed!');
    //     }
    // catch(error) {
    //     console.log(error);
    // }
}


const displayWeather = (event) => {
    getData();
}

//submit.addEventListener('click', displayWeather);

submit.click(displayWeather)

//getData();