"use strict";
var arrows;
(function (arrows) {
    arrows["UP"] = "UP";
    arrows["DOWN"] = "DOWN";
    arrows["LEFT"] = "LEFT";
    arrows["RIGHT"] = "RIGHT";
})(arrows || (arrows = {}));
var Desision;
(function (Desision) {
    Desision[Desision["Yes"] = 1] = "Yes";
    Desision[Desision["No"] = calcEnum()] = "No";
})(Desision || (Desision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) { }
runEnum(arrows);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let testEnumName = Test.A;
let nameA = Test[testEnumName]; //A
let enumC = 0 /* ConstEnum.A */;
//NEVER
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Tree"] = 3] = "Tree";
})(Dice || (Dice = {}));
function ruDice(dice) {
    switch (dice) {
        case Dice.One: return "один";
        case Dice.Two: return "два";
        case Dice.Tree: return "три";
        default: const neverVar = dice; // выдас ошибку если попадет сюда. используется для отлавливания ошибок
    }
}
