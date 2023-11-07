let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score)); //dono tarike se likh sakte h

let valueInNumber = Number(score)  //score ko number me convert kar diya
//console.log(typeof valueInNumber); //gave output "number"
//console.log(valueInNumber); //gave output Nan that is not a number when score ="33abc"


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false //boolean me 1 likhenge to true output dega and 0 likhne pe false output dega
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)  //number ko string me convert kar diye
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //2 kar power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); //hello hitesh

// console.log("1" + 2); //output //12
// console.log(1 + "2"); //output //12
// console.log("1" + 2 + 2);//output //122
// console.log(1 + 2 + "2");//output //32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //output = 1
// console.log(+"");//output =0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //output =101
gameCounter++;
console.log(gameCounter); //output =101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// For example, given the expression "foo" + 1, the Number 1 is implicitly converted into a String 
// and the expression returns "foo1". Given the instruction Number("0x11"), the string "0x11" is explicitly 
// converted to the number 17.