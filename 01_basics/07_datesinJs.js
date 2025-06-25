let myDate=new Date;
// console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);


let myCreatedDate = new Date("12-12-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate.getFullYear())
// console.log(newDate.getDay());
newDate.toLocaleString("default",{
    weekday: "long",
    
})


