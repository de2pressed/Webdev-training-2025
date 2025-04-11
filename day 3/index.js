// console.log("--Welcome in JS----");

// console.log("---c:", c);

// const a = 51; 
// let b = 6;
// var c = 989;
// console.log("---starting with variables-----", a, b, c);

// console.log("----sum:", a+b+c, "------");


// const marks = 80;

// if(a > b & a>c) {
//     console.log("A is biggest");
// } else {
//     if(b > a & b>c){
//         console.log("B is biggest");
//     } else {
//         console.log("C is biggest");
//     }
// }

// console.log("----For loop-------");

// let a = 0;
// console.log("---multiples of 3---")
// for(let i = 0; i < 30; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
//     } 
// }   

// console.log("---odd nnumbers---")
// for(let i = 0; i < 20; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     } 
// }   

// //  Question : Find max value from 4 numbers.

// let a = 2;
// let b = 23;
// let c = 6;
// let d = 97;

// while()

// console.log("-----Array------");

// const arr = [1,2,3,4,5,6,6,6];

// console.log(arr);
// console.log("First value: ", arr[0]);
// console.log("Middle value: ", arr[3]);
// console.log("Last value: ", arr[7]);
// console.log("Values in reverse order:");
// i = arr.length-1
// while(i!=-1){
//     console.log(arr[i]);
//     i--
// }
// i = 0
// console.log("Even values:");

// while(i!=arr.length){
//     if(arr[i]%2 == 0){
//         console.log(arr[i])
//     }
//     i++
// }

// arr.splice(5, 0, 7, 4, 5);
// arr.splice(2, 1);
// console.log(arr);

// const arr2 = [4, 7, 5, 3, 1, 1];

// const myFun = (element) => {
//     console.log(element);
// }

// arr2.forEach(myFun);

// console.log("---objects---");

// const obj = {
//     name:"Jayant", 
//     RollNo:311,
//     result:"pass"
// };

// console.log(obj.name, obj["result"]);

// obj.id = 2;
// obj.city = "delhi"
// obj.result = "fail"
// delete obj.result

// console.log(obj);

// const data = [
//     {
//         id:1, 
//         name:"a",
//     },    {
//         id:2, 
//         name:"b",
//     },
//     {
//         id:3, 
//         name:"c",
//     },
//     {
//         id:4, 
//         name:"d",
//     },
//     {
//         id:5, 
//         name:"e",
//     }
// ];

// n = data.length;
// for(let i = 0; i!=n;) {
//     data[i].rollno = i+1;
//     i++;
// }

// console.log(data)



// const arr = [];
// for(i = 0; i!= data.length; i++){
//         const obj = {};
//         //if(data[i].name.common == "South Georgia"){
//             obj.name = data[i].name.common;
//             obj.tld = data[i].tld;
//             obj.independent = data[i].independent;
//             obj.capital = data[i].capital;
//         arr.push(obj);
//        // }
    
// }
// console.table(arr);

const arr= [];
for(i = 0; i != data.length; i++){
    const obj = {};
    obj.name = data[i].name.common;
    obj.cca2 = data[i].cca2;
    obj.capital = data[i].capital;
    arr.push(obj);
}

console.table(arr);