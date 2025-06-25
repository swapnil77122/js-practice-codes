//Memory, stack primitive heap memory
let myYoutubeName=  "sdd"
let anothername=myYoutubeName
anothername = "ss"
console.log(myYoutubeName)
console.log(anothername)
let userOne = {
    email:"uss.com",
    upi: "ss.ybl",

}
let userTwo = userOne;
userTwo.email="hoor.com"
console.log(userOne.email)
console.log(userTwo.email)
//-------------------Strings-----------
const name="hitesh"
const repoCount=40;
console.log(name +" " + repoCount + " Value")
console.log(`Hello my name is  ${name} and my repo cout is ${repoCount}`)

const gameName  = new String("Teaandcoffee")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));
console.log(gameName);

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString =  gameName.slice(-1,4)
console.log((anotherString));

const newStringOne = "  Swapnil  "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());

const url ="www.google.com"
console.log(url.replace('google','-'));
console.log(url.includes('-'))

console.log

