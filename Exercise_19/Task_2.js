let globalVar = "I am global variable";

function sayHello() {
  let innerVar = "I am Inner variable of sayHello function";
  function sayHi() {
    let innerSayHiVar = "I am Inner variable of sayHi function";
    console.log("Global variable :", globalVar); // can be accessed
    console.log("SayHello variable :", innerVar); // can be accessed
    console.log("sayHi variable :", innerSayHiVar); // can be accessed
  }
  console.log("Global variable :", globalVar); // can be accessed
  console.log("SayHello variable :", innerVar); // can be accessed
  console.log("sayHi variable :", innerSayHiVar); // cannot be accessed : Gives Error
  return sayHi;
}
sayHello()();
console.log("Global variable :", globalVar); // can be accessed
console.log("SayHello variable :", innerVar); // cannot be accessed : Gives Error
console.log("sayHi variable :", innerSayHiVar); // cannot be accessed : Gives Error
