import { Ui } from './ui';

const ui = new Ui();

export class App {
    opwApiKey = '51069f88456216e76d29bc1c50d8e00f';
    cities: string[] = [];

    constructor() {
        // Wywołać po kilknięciu przycisku dodaj
        // this.getCityInfo(city: string);
        //this.getData();
        //console.log(this.getData());
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
        return weather;
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&units=metric`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json(); // JSON.parse()
        //console.log(weatherResponse);
        
        return weatherData;
    }
    saveData(data: any) {
        // Sprawdzić jeśli null, albo literówka w mieście

        if(this.cities.includes(data.name)) return;
        this.cities.push(data.name);
        localStorage.setItem('cities', JSON.stringify(this.cities));
    }

    getData() {
        const data : string[] = [...JSON.parse(localStorage.getItem('cities'))];

        console.log(typeof(data));

        data.forEach(city => this.getCityInfo(city).then((data : any) =>{
                 ui.populateUi(data);
             })
        );        
    }
}

// Wrócić do nagrania lab