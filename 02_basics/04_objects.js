const tinderUser=new Object()
console.log(tinderUser);


tinderUser.id="1222";
tinderUser.name="Swapnil";
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"someday@gmail.com",
    fullname:{
        userfullname:{
            firstname:"swapnil",
            lastname:"Dhage"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"s",6:"f"}
// const obj3=Object.assign(obj1,obj2,obj4)

const obj3={...obj1,...obj2}
console.log(obj3);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js in hindi",
    price : "3333",
    courseInstructor:"Swpanol"

}

const {courseInstructor :instructor}=course

console.log(instructor);



// const navbar = ({company}) =>{
     
// }


