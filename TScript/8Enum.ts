enum arrows {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

enum Desision {
    Yes = 1,
    No = calcEnum(),
}

function calcEnum() {
    return 2
}

function runEnum(obj: { UP: string }) { }

runEnum(arrows);

enum Test {
    A
}

let testEnumName = Test.A;
let nameA = Test[testEnumName] //A

const enum ConstEnum {
    A,
    B,
}

let enumC = ConstEnum.A

//NEVER

enum Dice {
    One = 1,
    Two,
    Tree,
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One: return "один";
        case Dice.Two: return "два";
        case Dice.Tree: return "три";
        default: const neverVar: never = dice; // выдас ошибку если попадет сюда. используется для отлавливания ошибок
    }
}