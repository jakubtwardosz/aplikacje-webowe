import { App } from './app';
import './main.scss';

const app = new App();

class Main {

    constructor() {
        this.inputEvents();
    }

    inputEvents() {
        // <input id="city-name" type="text">
        // <button id="add-button" type="submit">Dodaj</button>

        const addCityForm = document.getElementById('add-city-form');
        const addButton = document.getElementById('add-button');
        const cityName = document.getElementById('city-name') as HTMLInputElement;


        addCityForm.addEventListener('submit', (event) => {    
            event.preventDefault();
            console.log(cityName.value);
            console.log(app.getCityInfo(cityName.value));
        })        
    }
}

new Main();