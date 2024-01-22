const apikey="2a52388787f5a8674b0d8fe99da08307";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weattherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const responce =await fetch(apiUrl+ city + `&appid=${apikey}`);

    if(responce.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    
    }
    else{
        var data= await responce.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";

    if(Array.isArray(data.weather) && data.weather.length > 0){
        let weatherMain = data.weather[0].main;
        if(weatherMain=="Clouds"){
            weattherIcon.src="images/clouds.png";
        } else if(weatherMain=="Clear"){
            weattherIcon.src="images/clear.png";
        }
        else if(weatherMain=="Rain"){
            weattherIcon.src="images/rain.png";
        }
        else if(weatherMain=="Drizzle"){
            weattherIcon.src="images/drizzle.png";
        }
        else if(weatherMain=="Mist"){
            weattherIcon.src="images/mist.png";
        }
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }


        
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); 
})