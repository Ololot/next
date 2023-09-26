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
var testEnumName = Test.A;
var nameA = Test[testEnumName]; //A
var enumC = 0 /* ConstEnum.A */;
