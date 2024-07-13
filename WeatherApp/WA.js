const apiKey="cb75efacd58899d67efb463b7badca5f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const weatherStatus=document.querySelector(".weather p");
const weather=document.querySelector(".weather");
const err=document.querySelector(".error");
async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data= await response.json();
    
    
    if(response.status==404){
        err.style.display="block";
        weather.style.display='none';

    }
    else{
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML= data.wind.speed+ "km/hr";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
            weatherStatus.innerText="Cloudy";
     }
     else if(data.weather[0].main == "Clear")
         {
             weatherIcon.src="images/clear.png";
             weatherStatus.innerText="Clear";
         }
     else if(data.weather[0].main == "Rain")
         {
             weatherIcon.src="images/rain.png";
             weatherStatus.innerText="Rain";
         }
     else if(data.weather[0].main == "Drizzle")
         {
             weatherIcon.src="images/drizzle.png";
             weatherStatus.innerText="Drizzle";
         }
     else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src="images/mist.png";
            weatherStatus.innerText="Mist";
        }
        weather.classList.remove("hide");
        err.style.display="none";
    }
    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        searchBtn.click();
    }
});