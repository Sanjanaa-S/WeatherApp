const apiKey = "";

async function getWeather(){
    const city = getElementById("cityInput").value.trim();
    const error = getElementById("error");
    const card = getElementById("weatherCard");
}

errorE1.textContent='';
card.classList
card.innerHTML

if (!city){
    errorE1.textContent = "Please enter city";
}

try{
    const response
    ('https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}')
    const data = response.json()

    if(data.error){
        throw data.error.message;
    }

    const{location, current} = data;
    card.innerHTML = `
    <h2> ${location.name}, ${location.country} </h2>
    <img src="https:${current.condition.icon}"alt ="weather icon"/>
    <p><strong> Condition:</strong> ${current.condition.text}</p>
    <p><strong> Temperature:</strong> ${current.temp_c}</p>
    <p><strong> Humidity:</strong> ${current.temp_c}
    <p><strong> Wind: </strong>${current.wind_kph}
    `

    card.classList.remove("header")
}
except{
    throw new error(data.error.message)
}