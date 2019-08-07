// Weather API
const url = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";


// Filters the data to get the name, temperature, icon and shortForecast
const getNeededData = (data) => {
    neededData = [];

    for (let i = 0; i < data.length; i+=2) {
        const info = {};
        info.name = data[i].name;
        info.temp = data[i].temperature;
        info.icon = data[i].icon;
        info.forecast = data[i].shortForecast;
        neededData.push(info);
    }

    return neededData;
}


const createForecastCards = (data) => {
    const weatherForecast = document.querySelector(".weather-forecast");

    for (let info of data) {
        // Div to display all the data
        const forecast = document.createElement("div");
        forecast.className = "forecast-card";

        // Day of the week
        const name = document.createElement("h1");
        name.innerText = `${info.name}`;

        // List to display data
        const infoList = document.createElement("ul");

        // Temperature data
        const temperature = document.createElement("li");
        temperature.innerText = `${info.temp} F`;
        
        // Forecast data
        const shortForecast = document.createElement("li");
        shortForecast.innerText = `${info.forecast}`;

        // Image 
        const img = document.createElement("img");
        img.src = info.icon;

        // Appending li to infoList
        infoList.appendChild(temperature);
        infoList.appendChild(shortForecast);

        // Appending data to div
        forecast.appendChild(name);
        forecast.appendChild(img);
        forecast.appendChild(infoList);

        // Appending div to weather forecast
        weatherForecast.appendChild(forecast);
    }
}



fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){
    const data = json.properties.periods;
    const filteredData = getNeededData(data);


    createForecastCards(filteredData);

    console.table(filteredData);

});