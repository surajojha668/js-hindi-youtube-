//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//primitive data types are call by value that is kahi bhi hum primitive data type
// ko call karte h to uska copy call hota h aur jo bhi changes hota ha wo uske copy me change hota h


//Javascript is a dynamic typing language. 
//When you declare a variable, you do not need to specify what type this variable is.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //symbol ka kaam hi yahi h ki same value bhi mile to bhi dono alag hoga

console.log(id === anotherId);  //OUTPUT = false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; ///arrays

//objects -(curly braces ke andar jo v value hota h objects j)
let myObj = {
    name: "hitesh",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//-----------------------------------------------------------------------------------------

//Stack (Primitive),  Heap (Non-primitive)

//jitni v primitive value ha wo stack me jati ha ,
let myYoutubeName ="hitesh"
let anothername= myYoutubeName
anothername="chai aur code"

console.log(myYoutubeName);//hitesh
console.log(anothername);//chai aur code


//jitni v non-primitive datatype ha wo heap me store hota ha aur usme data k reference milta h uska copy nahi
let userOne={
    email :"surajojha@gmail.com",
    upi: "user@ybl"
}
let userTwo=userOne

userTwo.email ="hitesh@gmail.com"

console.log(userOne.email); //output =surajojha@gmail.com
console.log(userTwo.email);//output =surajojha@gmail.com