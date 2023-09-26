const a1: number = 5;
let a: number = 4;
let b: string = "string";
let c = true;

// const d = a + c; 

let d: string[] = ["sdf", "2", "third"];

let r: any = 3;

let f: any = "5";

const sum = r + f;
console.log(sum)

function test(a: string): string | number {
    return ""
}

const test2 = (a: number): number => { return a * 2 }

d = d.map(x => x.toLocaleLowerCase())

function countCoord(coord: { lat: number, long?: number }) { }//? - не обязательный параметр (то же самое что и запись: long: number | undefined)

function printIt(id: number | string) {
    if (typeof id === "number") console.log(id.toString());
    else id.toUpperCase()
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {             //после явной проверки на тип (здесь Array) можно применять соответствующие методы у а (здесь для массива)
        a.forEach(() => { })
    }
}

const reternNoneFunction = (a: number): void => { } //функция ничего не возвращает (необъодимо писать void)

const x: undefined = undefined;
const z: null = null;



