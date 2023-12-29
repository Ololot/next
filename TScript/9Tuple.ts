const arrTuple: [number, string, number] = [1, "a", 5];

arrTuple.push(78) //не выдаст ошибки, но обратиться к этому элементу не получится (arrTuple[3] - ошибка)

arrTuple.map(s => { //перебор рабтает, но необходимо определять тип
    switch (typeof s) {
        case "string": console.log(s)
        case "number": console.log("number " + s)
    }
});

const [l, ...destructTuple] = arrTuple;  //деструкторизация тоже работает 