export class App {
    opwApiKey = '51069f88456216e76d29bc1c50d8e00f';
    constructor() {
        // Wywołać po kilknięciu przycisku dodaj
        // this.getCityInfo(city: string);
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
        console.log(weatherResponse);
        
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}

// Wrócić do nagrania lab