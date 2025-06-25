//singleton





const mySym=Symbol("key1")

//object literals

const JsUser = {
    name:"Swapnil",
    age:19,
    "fullname":"Howw",
    [mySym]: "mykey1",
    location:"pune",
    email: "gg.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser.name);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);


JsUser.email="dddd";
console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="rrrrr"
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting=function(){
    console.log(`HEllp js user ${this.name}`);
    
}


console.log(JsUser.greeting());
console.log(JsUser.greeting);




// myArray=["h","i"]