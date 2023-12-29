"use strict";
function logTime(num) {
    console.log(new Date());
    if (typeof num === "string")
        num.toLocaleUpperCase();
    return num;
}
class MyGenericClass {
    constructor(classVal) {
        this.dsdfsd = classVal;
    }
}
function logTimeStamp(someVal) {
    console.log(someVal.stamp); //если говорим, что T унаследовано от чего то со свойством stamp, то можем его использовать здесь
    return someVal;
}
