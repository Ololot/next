"use strict";
const a1 = 5;
let a = 4;
let b = "string";
let c = true;
// const d = a + c; 
let d = ["sdf", "2", "third"];
let r = 3;
let f = "5";
const sum = r + f;
console.log(sum);
function test(a) {
    return "";
}
const test2 = (a) => { return a * 2; };
d = d.map(x => x.toLocaleLowerCase());
function countCoord(coord) { } //? - не обязательный параметр (то же самое что и запись: long: number | undefined)
function printIt(id) {
    if (typeof id === "number")
        console.log(id.toString());
    else
        id.toUpperCase();
}
function getSum(a) {
    if (Array.isArray(a)) { //после явной проверки на тип (здесь Array) можно применять соответствующие методы у а (здесь для массива)
        a.forEach(() => { });
    }
}
const reternNoneFunction = (a) => { }; //функция ничего не возвращает (необъодимо писать void)
const x = undefined;
const z = null;
