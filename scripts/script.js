var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure(l, w) {
        this.length = l;
        this.width = w;
    }
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(l, w) {
        return _super.call(this, l, w) || this;
    }
    Rectangle.prototype.countPerimeter = function () {
        this.res = (this.length + this.width) * 2;
        return this.res;
    };
    Rectangle.prototype.countArea = function () {
        this.res = this.length * this.width;
        console.log(this.res);
        return this.res;
    };
    return Rectangle;
}(Figure));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(l, w) {
        return _super.call(this, l, w) || this;
    }
    Square.prototype.countPerimeter = function () {
        this.res = this.width * 4;
        return this.res;
    };
    Square.prototype.countArea = function () {
        this.res = Math.pow(this.width, 2);
        console.log(this.res);
        return this.res;
    };
    return Square;
}(Figure));
var selector = document.getElementById("selector");
var actionSelector = document.getElementById("actionSelector");
function getSelectedOption(slctr) {
    var opt;
    for (var i = 0, len = slctr.options.length; i < len; i++) {
        opt = slctr.options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt.value;
}
var submit = document.getElementById("subm");
var result = document.getElementById("result");
submit.addEventListener('click', function () {
    var len;
    var wid;
    len = parseInt(document.getElementById("length").value);
    wid = parseInt(document.getElementById("width").value);
    if (isNaN(len) || isNaN(wid)) {
        window.alert("Enter values");
    }
    else {
        if (getSelectedOption(selector) == "square" && getSelectedOption(actionSelector) == "area") {
            if (len != wid) {
                window.alert("check width and length");
            }
            else {
                var square = new Square(len, wid);
                result.style.height = len.toString() + "px";
                result.style.width = len.toString() + "px";
                result.innerText = square.countArea().toString() + "пикс²";
            }
        }
        else if (getSelectedOption(selector) == "square" && getSelectedOption(actionSelector) == "perimeter") {
            if (len != wid) {
                window.alert("check width and length");
            }
            else {
                var square = new Square(len, wid);
                result.style.height = wid.toString() + "px";
                result.style.width = wid.toString() + "px";
                result.innerText = square.countPerimeter().toString() + "пикс";
            }
        }
        else if (getSelectedOption(selector) == "rectangle" && getSelectedOption(actionSelector) == "area") {
            var rectangle = new Rectangle(len, wid);
            result.style.height = len.toString() + "px";
            result.style.width = wid.toString() + "px";
            result.innerText = rectangle.countArea().toString() + "пикс²";
        }
        else if (getSelectedOption(selector) == "rectangle" && getSelectedOption(actionSelector) == "perimeter") {
            var rectangle = new Rectangle(len, wid);
            result.style.height = len.toString() + "px";
            result.style.width = wid.toString() + "px";
            result.innerText = rectangle.countPerimeter().toString() + "пикс";
        }
    }
});
