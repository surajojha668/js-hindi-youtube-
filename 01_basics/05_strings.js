const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //outpue = hitesh50 Value

//string interpolation
//ye humlog isliye use krte h taki humolog different methods use kar sake name and repocount
//new syntax as + karke pehle likha jata tha
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  //another method of creating string

// console.log(gameName[0]);
// console.log(gameName.__proto__);//output ={}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //output =hite //neagative value dene pe default 0 se hi start karega
console.log(newString);

const anotherString = gameName.slice(-8, 4) //negative value me piche se start karega
console.log(anotherString);

const newStringOne = "   hitesh    "  //phaltu space hata dega
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//false as it not includes sundar string
console.log(gameName.split('-'));// ['hitesh','hc','com']