var CountClass = /** @class */ (function () {
    function CountClass() {
        this;
        this._count = 0;
    }
    CountClass.prototype.countUp = function () {
        this._count++;
    };
    CountClass.prototype.getCount = function () {
        return this._rount;
    };
    return CountClass;
}());
var countInstance = new CountClass();
countInstance._count = 17;
