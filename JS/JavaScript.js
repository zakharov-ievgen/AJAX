fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".city").innerHTML = "City" + " is " + JSON.stringify(data.name);
        document.querySelector(".temp").innerHTML = "Temperature" + " is " + JSON.stringify(data.main.temp) + " C ";
        document.querySelector(".pressure").innerHTML =
            "Pressure" + " is " + JSON.stringify(data.main.pressure) + " hPa ";
        document.querySelector(".humidity").innerHTML =
            "Humiditi" + " is " + JSON.stringify(data.main.humidity) + " % ";
        document.querySelector(".speed").innerHTML = "Wind speed" + " is " + JSON.stringify(data.wind.speed) + " Km/h ";
        document.querySelector(".deg").innerHTML = "Wind deg" + " is " + JSON.stringify(data.wind.deg);
        document.querySelector(".description").innerHTML =
            "Description" + " : " + JSON.stringify(data.weather[0].description);
        document.querySelector(".js-img").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    });
