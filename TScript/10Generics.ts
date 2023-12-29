function logTime<T>(num: T): T {
    console.log(new Date())
    if (typeof num === "string") num.toLocaleUpperCase()
    return num
}

interface myInterface {
    transform: <T, F>(a: T) => F   // можно задавать несколько дженериков и использовать их где надо
}

class MyGenericClass<T>{
    constructor(classVal: T) {
        this.dsdfsd = classVal;
    }
    dsdfsd: T;
}

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(someVal: T): T {
    console.log(someVal.stamp)                                  //если говорим, что T унаследовано от чего то со свойством stamp, то можем его использовать здесь
    return someVal
}

