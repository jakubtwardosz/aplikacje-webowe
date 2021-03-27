class StatsApp {

    addButton: HTMLButtonElement;
    inputCounter: HTMLInputElement;

    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp() {
        this.getInputs();
        this.watchInputValues();
    }
    
    addInputs(){

        const container = document.querySelector('.input-data');

        
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }

        for (let index = 0; index < +this.inputCounter.value; index++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('id', 'data' + index);

            container.appendChild(input);
            
        }

    }
   
    getInputs() {
        this.inputCounter = document.querySelector('#inputsCounter');
        this.addButton = document.querySelector('#addInputs');

        this.data1Input = document.querySelector('#data1');
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data3');

        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }

    watchInputValues() {
        this.addButton.addEventListener('click', () => this.addInputs());
        
        this.data1Input.addEventListener('input', () => this.computeData());
        this.data2Input.addEventListener('input', () => this.computeData());
        this.data3Input.addEventListener('input', () => this.computeData());
        this.data4Input.addEventListener('input', () => this.computeData());
    }

    computeData(){
        const data1 = +this.data1Input.value;
        const data2 = +this.data2Input.value;
        const data3 = +this.data3Input.value;
        const data4 = +this.data4Input.value;

        const sum = data1 + data2 + data3 + data4;
        const avg = sum / 4;
        const min = Math.min(data1, data2, data3, data4);
        const max = Math.max(data1, data2, data3, data4);

        this.showStats(sum, avg, min, max);

    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }   
}

const statsApp = new StatsApp();