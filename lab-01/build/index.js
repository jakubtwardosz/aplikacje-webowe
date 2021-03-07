var StatsApp = /** @class */ (function () {
    function StatsApp() {
        this.startApp();
    }
    StatsApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
        console.log("Hello world!");
    };
    StatsApp.prototype.watchInputValues = function () {
        throw new Error("Method not implemented.");
    };
    StatsApp.prototype.getInputs = function () {
        throw new Error("Method not implemented.");
    };
    return StatsApp;
}());
