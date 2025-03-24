document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("predictBtn").addEventListener("click", predictWeather);
});

function predictWeather() {
    let city = document.getElementById("city").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    // Simulating a weather prediction response (Replace with actual API or ML model)
    let predictions = ["Sunny", "Rainy", "Cloudy", "Stormy", "Windy"];
    let randomWeather = predictions[Math.floor(Math.random() * predictions.length)];

    document.getElementById("result").innerHTML = `Predicted Weather in ${city}: <strong>${randomWeather}</strong>`;

    // If using a real ML model, make an API call like this:
    /*
    fetch(`https://your-api-endpoint.com/predict?city=${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `Predicted Weather in ${city}: <strong>${data.weather}</strong>`;
        })
        .catch(error => console.error("Error:", error));
    */
}
