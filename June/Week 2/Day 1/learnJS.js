console.log("This is my external page")
// let a=10;
// console.log(a)
// let A=20;
// console.log(A)


// let name="kaibalya";
// console.log(name)

// let lastName="sahoo";

// let _Id=123;
// console.log(_Id)

// let $FullName="abc dhinchak";
// console.log($FullName)

// let function="dknfs"

//  How to declare a variable
// ans :var ,let ,const

// Using var
// global level
var a=30;
// local level
console.log(a)

// block level
{
    console.log(a)
}

// function level
function printValue(){
    console.log(a);
}
printValue()

// declare in block level using var
{
    var b=40;
    console.log(b)
}
console.log(b)

function A(){
    console.log(b)
}
A()

// function level declaration
// if you declared a variable 
// inside a function you can't access outside 
// of the function
// function declareA(){
//     var role="Student";
//     console.log(role)
// }
// declareA()
// console.log(role)

// let declaration
// global level
let mark=20;
console.log("mark",mark)

{
    console.log(mark)
}

// block level declaration
{
    let st="xyz";
    console.log(st)
}
// console.log(st)

// function level
function printSt(){
    let role="Student";
    console.log(role)
}
printSt()

// function B(){
//     var xyc=50;
// }
// console.log(xyc)

// const declaration
// global level
const pi=3.14;
console.log(pi)

// block level declaration
{
 const st="abc";
 console.log(st)
}
// console.log(st)


// declaration and initialization
var c=20;
c=40;
var c=60
console.log(c)

let n=90;
n=70;
// let n=30;

console.log(n)

const m=90;
// m=34290;
// const m;
console.log(m)

// data types
// 1.primitive
    // =>number
    // =>string
    // =>boolean
    // =>undefined
    // =>null
    // =>NAN (not a number)
    // BIGINt
    // Symbol
// 2.non primitive
    // object
    // Array
    // Reg ex

    let passed=BigInt("0823094");
    console.log(typeof passed)

    let sy=Symbol("@");
    console.log(typeof sy)