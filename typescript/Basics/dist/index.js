"use strict";
// let a:string = "sidharth shukla"
// let num:number = 32
/**
// type and interfacekeywords
interface objj  {
    height: number,
    weight: number,
    gender?: boolean  // ye optional haii
}

type Funct = (n:number,m:number) => void

interface Newobjj extends objj {
  scolar:boolean
  func?: Funct
}

const helloobj:Newobjj = {
   scolar: true,
   height:23,
   weight:43,
   func: (n,m) => {
    console.log(n*m)
   }
}
// helloobj.func(2,3)
if (helloobj.func) {
    helloobj.func(2,3);
  }

type Obj = {
    height: number,
    weight: number,
    gender?: boolean  // ye optional haii
}

const obj1 = {
    height: 23,
    weight: 23,
    gender: false
}
const obj2 = {
    height: 25,
    weight: 23,
}
*/
// function in typescript
// const func = (m:number,n:number) => {
//     return m*n;
// }
// console.log(func(2,3))
// example 2:-
// type fun = (n:number, m:number, l?:number) => number
// const func:fun = (m,n,l=2) => {
//     return (m*n*l);
// }
// console.log(func(2,4));
// rest operator example here:-
// type funType =(...a:number[]) => number[]
// const func:funType = (...a) => {
//     return a;
// }
// func(4,3,4,5)
// --------------------------------------------------
// function with object
