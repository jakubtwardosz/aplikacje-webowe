export class Ui {
    constructor(){
    }

    populateUi(weatherData : any){

        const uiContainer = document.querySelector('.cities');       

        const printWeather = async () => {           
        
            let city = await weatherData;
            
            // Wyrzucić mathround  
            uiContainer.innerHTML += `
                <li class="city">
                    <div>
                        <span class="city-name">${city.name}</span>
                        <div class="city-temperature-main">
                            <span class="city-temperature">${Math.round(city.main.temp)}&deg;</span>
                            <img class="city-icon" src="http://openweathermap.org/img/w/${city.weather[0].icon}.png" alt="${city.weather[0].main}">                            
                        </div>
                        <span class="city-main">${city.weather[0].main}</span>                        
                    </div>
                    <div class="city-stats">
                        <span class="city-humidity">${city.main.humidity}%</span>
                        <span class="city-pressure">${city.main.pressure}hPa</span>
                        <span class="city-wind">${city.wind.deg}m/s</span>
                    </div>
                </li>
            `;
        }        
        printWeather();
    }
}

new Ui();