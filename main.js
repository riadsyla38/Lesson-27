// function showMessage(){
//     alert("This message is inside the function");
// }
// showMessage();

function sum(number1, number2){
    return number1+number2;
}
console.log(sum(5, 10));

//-----------------------------
// var arrowfunction = () => alert("Hellow world");
// arrowfunction();

// function dsFunction(){
//     var localvar = "Digital School"
//     alert(localvar);
// }

// dsFunction();
//alert(localvar);

function minToSec(minutes){
    return minutes * 60;
}
console.log(minToSec(5));

function toCelcius(f){
    return(5/9) * (f-32);
}
console.log("54 fahrenheit is equal to"+toCelcius(54) + "celcius")

var car = {
    name:"Mercedes",
    color:"red",
    year:2020,
    kilometers:0,
    startEngine : function(){
        alert("vrooooooom");
    },
    get getKilometers(){
        return this.kilometers;
    },
    set setKilometers(km){
        this.kilometers = km;
    }
};

alert(car.name);
alert(car['color']);
car.startEngine();
console.log(car.getKilometers);