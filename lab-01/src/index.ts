class StatsApp{
    
    dataInputsValues: Array<number> = [];
    countNumber: number = 1;
    addButton: HTMLButtonElement;

    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;

    inputArray: HTMLInputElement[];
    dataInputs: HTMLInputElement[];

    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    
    constructor(){
        const inputsCounter: HTMLElement = document.getElementById('inputsCounter');

        // Checking values in #inputsCounter 

        inputsCounter.addEventListener('input', () => {
            const target = event.target as HTMLInputElement;
            this.countNumber = Number(target.value);
            console.log(this.countNumber);
        });

        // this.inputArray.forEach(input => {
        //     console.log(input);
        //     input.addEventListener('input', () => this.computeData())
        // })        

        this.startApp();
    }
    startApp(){
        this.addInputs(); 
        this.getInputs();
        this.watchInputValues();        
    }

    addInputs(){
        const container = document.querySelector('.input-data');
        this.addButton = document.querySelector('#addInputs');
        
        // Returns true if the specified node has any child nodes

        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            this.inputArray = []; 

        }

        for (let index = 0; index < this.countNumber.valueOf(); index++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('id', 'data' + (index + 1));
            input.className = 'data';
            container.appendChild(input);            
            this.inputArray.push(input);
            input.addEventListener('input', () => this.computeData());            
        }
        console.log(this.inputArray);
        this.addButton.addEventListener('click', () => this.addInputs());
    }

    calculate


    getInputs(){
        // this.inputArray = []; 
        // const dataInputs = document.querySelectorAll(".data");
        // dataInputs.forEach(input => this.inputArray.push(input as HTMLInputElement));

        
        // console.log(dataInputs);


        // for (let i = 1; i < this.countNumber.valueOf(); i++) {
        //     this.dataInputs[i] = document.querySelector('#data' + (i+1));
        // }
        
        // this.data1Input = document.querySelector('#data1');
        // this.data2Input = document.querySelector('#data2');
        // this.data3Input = document.querySelector('#data3');
        // this.data4Input = document.querySelector('#data4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }
    watchInputValues(){ 
        
        this.inputArray.forEach(input => {
            console.log(input);
            input.addEventListener('input', () => this.computeData())
        })
        
 
        // this.data1Input.addEventListener('input', () => this.computeData());
        // this.data2Input.addEventListener('input', () => this.computeData());
        // this.data3Input.addEventListener('input', () => this.computeData());
        // this.data4Input.addEventListener('input', () => this.computeData());
    }

    computeData(): void{
        const inputsLength = this.inputArray.length;
        let sum = 0;
        this.inputArray.forEach(input => sum += +input.value);
        
        const avg: number = sum / inputsLength;


        // 

        const inputValues: number[] = this.inputArray
            .filter((el) => el.value && !isNaN(Number(el.value)))
            .map((el) => Number(el.value)); 
        const min: number = Math.min(...inputValues);
        const max: number = Math.max(...inputValues); 

        this.showData(sum, avg, min, max)
    }

    showData(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
 

    // computeData(){
    //     const data1 = +this.data1Input.value;
    //     const data2 = +this.data2Input.value;
    //     const data3 = +this.data3Input.value;
    //     const data4 = +this.data4Input.value;
    //     const sum = data1 + data2 + data3 + data4;
    //     const avg = sum / 4;
    //     const min = Math.min(data1,data2,data3,data4);
    //     const max = Math.max(data1,data2,data3,data4);
    //     this.showStats(sum,avg,min,max);
    // }
   

}

const app =  new StatsApp();