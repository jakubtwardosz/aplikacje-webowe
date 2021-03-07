class StatsApp {
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

        console.log("Hello world!");
    }
    watchInputValues() {
        throw new Error("Method not implemented.");
    }
    getInputs() {
        throw new Error("Method not implemented.");
    }



    
}