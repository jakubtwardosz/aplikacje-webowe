var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.inputArray = [];
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    StatsApp.prototype.addInputs = function () {
        var container = document.querySelector('.input-data');
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for (var index = 0; index < +this.inputCounter.value; index++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.setAttribute('id', 'data' + (index + 1));
            input.className = 'data';
            container.appendChild(input);
        }
    };
    StatsApp.prototype.getInputs = function () {
        this.inputCounter = document.querySelector('#inputsCounter');
        this.addButton = document.querySelector('#addInputs');
        this.inputArray = [];
        var dataInputs = document.querySelectorAll('.data');
        this.data1Input = document.querySelector('#data1'); // Jak z tego zrobić tablicę?
        this.data2Input = document.querySelector('#data2');
        this.data3Input = document.querySelector('#data3');
        this.data4Input = document.querySelector('#data3');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    StatsApp.prototype.watchInputValues = function () {
        var _this = this;
        this.addButton.addEventListener('click', function () { return _this.addInputs(); });
        this.data1Input.addEventListener('input', function () { return _this.computeData(); }); // Jak z tego zrobić pętlę?
        this.data2Input.addEventListener('input', function () { return _this.computeData(); });
        this.data3Input.addEventListener('input', function () { return _this.computeData(); });
        this.data4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
        var data1 = +this.data1Input.value; // +zmienia na typ number
        var data2 = +this.data2Input.value;
        var data3 = +this.data3Input.value;
        var data4 = +this.data4Input.value;
        var sum = data1 + data2 + data3 + data4; // Przepisać to
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
