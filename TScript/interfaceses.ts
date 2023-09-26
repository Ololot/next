type Point = { x: number, y: number }

type D3Point = Point & { z: number }

interface IPoint { x: number, y: number }

interface I3DPoint extends IPoint { z: number; }

interface addingProperty {
    a: number
}
interface addingProperty {
    b: number
}
//теперь у addingProperty есть два свойства (a и b)


function print(coord: Point) { }

type stringOrNumber = string | number;