// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //output =true
// console.log("02" > 1);  //output =true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true 
//as working of = and >or< works differently in js

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// === 

console.log("2" === 2); //false as it check the data type also
console.log("2" == 2);//true



//always try to avoid the above comparisions as they are confusing and we know that we also avoid confusing codes