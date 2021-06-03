var StatsApp = /** @class */ (function () {
    function StatsApp() {
        var _this = this;
        this.dataInputsValues = [];
        this.countNumber = 1;
        var inputsCounter = document.getElementById('inputsCounter');
        // Checking values in #inputsCounter 
        inputsCounter.addEventListener('input', function () {
            var target = event.target;
            _this.countNumber = Number(target.value);
            console.log(_this.countNumber);
        });
        // this.inputArray.forEach(input => {
        //     console.log(input);
        //     input.addEventListener('input', () => this.computeData())
        // })        
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.addInputs();
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.addInputs = function () {
        var _this = this;
        var container = document.querySelector('.input-data');
        this.addButton = document.querySelector('#addInputs');
        // Returns true if the specified node has any child nodes
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
            this.inputArray = [];
        }
        for (var index = 0; index < this.countNumber.valueOf(); index++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('id', 'data' + (index + 1));
            input.className = 'data';
            container.appendChild(input);
            this.inputArray.push(input);
            input.addEventListener('input', function () { return _this.computeData(); });
        }
        console.log(this.inputArray);
        this.addButton.addEventListener('click', function () { return _this.addInputs(); });
    };
    StatsApp.prototype.getInputs = function () {
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
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.inputArray.forEach(function (input) {
            console.log(input);
            input.addEventListener('input', function () { return _this.computeData(); });
        });
        // this.data1Input.addEventListener('input', () => this.computeData());
        // this.data2Input.addEventListener('input', () => this.computeData());
        // this.data3Input.addEventListener('input', () => this.computeData());
        // this.data4Input.addEventListener('input', () => this.computeData());
    };
    StatsApp.prototype.computeData = function () {
        var inputsLength = this.inputArray.length;
        var sum = 0;
        this.inputArray.forEach(function (input) { return sum += +input.value; });
        var avg = sum / inputsLength;
        // 
        var inputValues = this.inputArray
            .filter(function (el) { return el.value && !isNaN(Number(el.value)); })
            .map(function (el) { return Number(el.value); });
        var min = Math.min.apply(Math, inputValues);
        var max = Math.max.apply(Math, inputValues);
        this.showData(sum, avg, min, max);
    };
    StatsApp.prototype.showData = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var app = new StatsApp();
