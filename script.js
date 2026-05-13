async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Enter a city name");
        return;
    }

    let apiKey = "c320be9dfb63074953e600f63363bc97";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("API Error: " + response.status);
        }

        let data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}</h3>
            <p>Temp: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.log(error);
        document.getElementById("weatherResult").innerHTML =
            "Error: " + error.message;
    }
}