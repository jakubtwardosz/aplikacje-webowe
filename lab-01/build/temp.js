class StatsApp {
    
    constructor(){
        this.statsApp();
    }

    statsApp() {
        this.addInputs();
        this.getInputs();
        this.watchInputValues();
    }

    addInputs(){
        const container = document.querySelector('.input-data');
        const inputCounter = document.querySelector('#inputsCounter');        

        while(container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }

        for (let i = 0; i < inputCounter.value; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('id', 'data' + (i + 1));
            input.className = 'data';
            container.appendChild(input);
        }

    }

    getInputs(){        
        const container = document.querySelector('.input-data');
        const inputCounter = document.querySelector('#inputsCounter');  
        let inputArray = [];

        for (let i = 0; i < inputCounter.value; i++) {
            inputArray[i] = document.querySelector('#data' + (i+1));
                      
        }        

        let sumInput = document.querySelector('#sum');
        let avgInput = document.querySelector('#avg');
        let minInput = document.querySelector('#min');
        let maxInput = document.querySelector('#max');
    }

    watchInputValues(){
        const addButton = addEventListener('click', () => this.addInputs());
        // const inputCounter = document.querySelector('#inputsCounter');  

        // const dataInput = [];

        // for (let i = 0; i < inputCounter.value; i++) {
        //     dataInput[i] = addEventListener('input', () => this.computeData());
            
        // }
    }

    computeData(){

        console.log('Akuku');
        
        // const data = [];

        // for (let i = 0; i < array.length; i++) {
            
        //     data[i] = this.data[i]
            
        // }



        // const data1 = +this.data1Input.value; // +zmienia na typ number
        // const data2 = +this.data2Input.value;
        // const data3 = +this.data3Input.value;
        // const data4 = +this.data4Input.value;

        // const sum = data1 + data2 + data3 + data4; // Przepisać to
        // const avg = sum / 4;
        // const min = Math.min(data1, data2, data3, data4);
        // const max = Math.max(data1, data2, data3, data4);

        // this.showStats(sum, avg, min, max);

    }

    showStats(sum, avg, min, max){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }

}

const statsApp = new StatsApp();

