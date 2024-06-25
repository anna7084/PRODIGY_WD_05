const apiKey ="14ccbb28b9d545f2f3b1478380e68967"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".ICON")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"Kmph";

    if(data.weather[0].main == "Clouds"){
        ICON.src = image/clouds.png
    }
    if(data.weather[0].main == "Clear"){
        ICON.src = image/clear.png
    }
    if(data.weather[0].main == "Rain"){
        ICON.src = image/rain.png
    }
    if(data.weather[0].main == "Drizzle"){
        ICON.src = image/drizzle.png
    }
    if(data.weather[0].main == "Mist"){
        ICON.src = image/mist.png
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();

// const apiKey = "14ccbb28b9d545f2f3b1478380e68967";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const cityElement = document.querySelector(".city");
// const tempElement = document.querySelector(".temp");
// const humidityElement = document.querySelector(".humidity");
// const windElement = document.querySelector(".wind");

// async function checkWeather(city) {
//     try {
//         const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
//         const data = await response.json();

//         console.log(data);

//         cityElement.innerHTML = data.name;
//         tempElement.innerHTML = Math.round(data.main.temp) + "°C";
//         humidityElement.innerHTML = data.main.humidity + "%";
//         windElement.innerHTML = data.wind.speed + "Kmph";
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });

// // Initial call to checkWeather with a default city (you may replace it with your desired default city)
// checkWeather("New York");
