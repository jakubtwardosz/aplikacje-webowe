import { App } from './app';
import { Ui } from './ui';
import './main.scss';

const app = new App();
const ui = new Ui();

class Main {

    constructor() {
        this.inputEvents();
        app.getData();
    }

    inputEvents() {

        const form = document.querySelector('form');
        const inputText = document.querySelector('form input') as HTMLInputElement;


        form.addEventListener('submit', (event) => {    
            event.preventDefault();

            const currentVal = inputText.value;

            app.getCityInfo(currentVal).then((data : any) =>{
                ui.populateUi(data);
            })
        })         
    }
}

new Main();