export class Ui {
    constructor(){
        // this.uiContainer = document.getElementById('content');
        // this.city;
    }

    populateUi(weatherData : any){

        const uiContainer = document.querySelector('.cities');

        const printWeather = async () => {           
        
            let a = await weatherData;           
            
            uiContainer.innerHTML = `
                
                
                <li class="city">

                    <h2 class="city-name">
                        <span>Kraków</span>
                        <sup>PL</sup>
                    </h2>

                    <figure>
                        <img class="city-icon" src="http://openweathermap.org/img/w/01d.png" alt="Clouds">
                        <figcaption>Clouds</figcaption>
                    </figure>

                    <div class="city-temperature">19 <sup>°C</sup> </div>
                    <div class="city-pressure">1018 <sup>hPA</sup> </div>
                    <div class="city-humidity">40 <sup>%</sup></div>
            
                </li>


                
            `;
        }
        
        printWeather();


        
    }
}

new Ui();