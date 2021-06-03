class StatsApp {
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
  
    constructor() {
      const inputsCounter: HTMLElement = document.getElementById("inputsCounter");
  
      // Checking values in #inputsCounter
  
      inputsCounter.addEventListener("input", () => {
        const target = event.target as HTMLInputElement;
        this.countNumber = Number(target.value);
        console.log(this.countNumber);
      });
  
      this.startApp();
    }
    startApp() {
      this.addInputs();
      this.getInputs();
      this.watchInputValues();
    }
  
    addInputs() {
      const container = document.querySelector(".input-data");
      this.addButton = document.querySelector("#addInputs");
  
      // Returns true if the specified node has any child nodes
  
      while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
        this.inputArray = [];
      }
  
      for (let index = 0; index < this.countNumber.valueOf(); index++) {
        const input = document.createElement("input");
        input.type = "text";
        input.setAttribute("id", "data" + (index + 1));
        input.className = "data";
        container.appendChild(input);
        this.inputArray.push(input);
        input.addEventListener("input", () => this.computeData());
      }
      console.log(this.inputArray);
      this.addButton.addEventListener("click", () => this.addInputs());
    }
  
    getInputs() {
      this.sumInput = document.querySelector("#sum");
      this.avgInput = document.querySelector("#avg");
      this.minInput = document.querySelector("#min");
      this.maxInput = document.querySelector("#max");
    }
    watchInputValues() {
      this.inputArray.forEach((input) => {
        console.log(input);
        input.addEventListener("input", () => this.computeData());
      });
    }
  
    computeData(): void {
      const inputsLength = this.inputArray.length;
      let sum = 0;
      this.inputArray.forEach((input) => (sum += +input.value));
  
      const avg: number = sum / inputsLength;
  
      const inputValues: number[] = this.inputArray
        .filter((el) => el.value && !isNaN(Number(el.value)))
        .map((el) => Number(el.value));
      const min: number = Math.min(...inputValues);
      const max: number = Math.max(...inputValues);
  
      this.showData(sum, avg, min, max);
    }
  
    showData(sum: number, avg: number, min: number, max: number) {
      this.sumInput.value = sum.toString();
      this.avgInput.value = avg.toString();
      this.minInput.value = min.toString();
      this.maxInput.value = max.toString();
    }
  }
  
  const app = new StatsApp();
  