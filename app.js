//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key: "71d31b6fca33ea9028fd5d4f20445380",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}
// anonyumous function

const searchInputBox = document.getElementById('input-box');


// Event listner function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode==13){

        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
        document.querySelector('.Name').style.display = "block";
    }
});

// Get Weather Report
function getWeatherReport(city){
  
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
   

    .then(weather =>{
        return weather.json();

    }).then(showWeatherReport);


}

// show weather report 
function  showWeatherReport(weather){
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let cityName = document.getElementById('CityName');
    cityName.innerText = `Todays Weather in ${searchInputBox.value} is ${weather.weather[0].main} right now!!`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('images/Sunny.jpg')";
    }
    else if(weatherType.textContent == 'Clouds')
    {
        document.body.style.backgroundImage = "url('images/Clouds.jpg')";
    }
    else if(weatherType.textContent == 'Rain')
    {
        document.body.style.backgroundImage = "url('images/Rainny.jpg')";
    }
    else if(weatherType.textContent == 'Haze')
    {
        document.body.style.backgroundImage = "url('images/Haze.jpg')";
    }
    else if(weatherType.textContent == 'Snow')
    {
        document.body.style.backgroundImage = "url('images/Snow.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm')
    {
        document.body.style.backgroundImage = "url('images/thunder.jpg')";
    }
    else if(weatherType.textContent == 'Mist')
    {
        document.body.style.backgroundImage = "url('images/Mist.jpg')";
    }

}
//date manage
function dateManage(dateArg)
{
    let days = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday', 'Saturday'];

    let months = ['January','February','March','April','May', 'June','July','August','September', 'october','November','December'];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
