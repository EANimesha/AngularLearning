// in js we can assign any type of value to a declared vaariable
//but in ts we have to give the type and that variable can not use for multiple type variables

let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number []=[1,2,3,4,5];
let f:any[]=[1,true,'k'];


const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2;

enum Color {Red,Green, Blue}
let backgroundcolor=Color.Green;