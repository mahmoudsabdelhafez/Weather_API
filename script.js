
async function fetchData(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=76fadf6dec75dd5a274ec298bc176fd1&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        displayWeatherData(data); 
    } catch (error) {
        console.error(error.message);
        document.getElementById("weatherData").innerHTML = "Error fetching data.";
    }
}

function displayWeatherData(data) {
    const weatherDiv = document.getElementById("weatherData");

    weatherDiv.innerHTML = `
        <h2 id="dataHeader">Weather in  ${data.name}</h2>
        <p>Temperature: <span id="temp"> ${data.main.temp}°C </span> </p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;


    const temp = document.getElementById("temp");
    temp.style.fontWeight ='bold';


    const dataHeader = document.getElementById("dataHeader");
    dataHeader.classList.add('text-primary');
    weatherDiv.classList.add('border' , 'border-primary-subtle', 'p-3', 'col-md-6' ,'col-lg-4');
}




document.getElementById("cityForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   

    const cityName = document.getElementById("city-name").value; 
    fetchData(cityName); 
});










  



