abstract class Figure{
    length: number;
    width: number;
    constructor(l: number, w: number){
        this.length = l;
        this.width = w;
    }
}

class Rectangle extends Figure implements IActions{
    private res : number;
    constructor(l: number, w : number){
        super(l,w);
    }

    countPerimeter(): number {
        this.res = (this.length + this.width) * 2;
        return this.res;
    }

    countArea(): number {
        this.res = this.length * this.width;
        console.log(this.res);
        return this.res;
    }
}

class Square extends Figure implements IActions{
    private res : number;
    constructor(l: number, w : number){
        super(l,w);
    }

    countPerimeter(): number {
        this.res = this.width*4;
        return this.res;
    }

    countArea(): number {
        this.res = this.width**2;
        console.log(this.res);
        return this.res;
    }
}

interface IActions{
    countArea(len: number, wid: number):number;
    countPerimeter(len: number, wid: number) : number
}


let selector = document.getElementById("selector");
let actionSelector = document.getElementById("actionSelector");

function getSelectedOption(slctr) {
    var opt;
    for(var i = 0, len = slctr.options.length; i< len; i++){
        opt = slctr.options[i];
        if(opt.selected === true){
            break;
        }
    }
    return opt.value;
}

let submit = document.getElementById("subm");
let result = document.getElementById("result");


submit.addEventListener('click', function(){
    let len: number;
    let wid: number;
    len = parseInt((<HTMLInputElement>document.getElementById("length")).value);
    wid = parseInt((<HTMLInputElement>document.getElementById("width")).value);

    if(isNaN(len) || isNaN(wid)){
        window.alert("Enter values");
    }

    else{
        if(getSelectedOption(selector) == "square" && getSelectedOption(actionSelector) == "area"){
            if(len != wid){
                window.alert("check width and length");
            }
    
            else{
                const square = new Square(len, wid);
                result.style.height = len.toString() + "px";
                result.style.width = len.toString() + "px";
                result.innerText = square.countArea().toString() + "пикс²";
            }
    
        }
    
        else if(getSelectedOption(selector) == "square" && getSelectedOption(actionSelector) == "perimeter"){
            if(len != wid){
                window.alert("check width and length");
            }
    
            else{
                const square = new Square(len, wid);
                result.style.height = wid.toString() + "px";
                result.style.width = wid.toString() + "px";
                result.innerText = square.countPerimeter().toString() + "пикс";
            }
        }
    
    
        else if (getSelectedOption(selector) == "rectangle" && getSelectedOption(actionSelector) == "area"){
            const rectangle = new Rectangle(len, wid);
            result.style.height = len.toString() + "px";
            result.style.width = wid.toString() + "px";
            result.innerText = rectangle.countArea().toString() + "пикс²";
        }
    
    
        else if(getSelectedOption(selector) == "rectangle" && getSelectedOption(actionSelector) == "perimeter"){
            const rectangle = new Rectangle(len, wid);
            result.style.height = len.toString() + "px";
            result.style.width = wid.toString() + "px";
            result.innerText = rectangle.countPerimeter().toString() + "пикс";
        }
    }

})


