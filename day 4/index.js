// // console.log("Welcome to JS");
// // const myHTML =
// //             `<div style="border:4px solid yellow">
// //              <h1>Added from JS</h1>
// //              <h2> jayant </h2>
// //             </div>`
// //             ;
// // const htmlele = document.getElementById("container");
// // htmlele.innerHTML = myHTML;


// const cont2html = `    <div class="card">
//       <span class="icon">
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="1.2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"
//           />
//         </svg>
//       </span>
//       <h4>Products</h4>
//       <p>
//         Standard chunk of Lorem Ipsum used since the 1500s is showed below
//         for those interested.
//       </p>
//       <div class="shine"></div>
//       <div class="background">
//         <div class="tiles">
//           <div class="tile tile-1"></div>
//           <div class="tile tile-2"></div>
//           <div class="tile tile-3"></div>
//           <div class="tile tile-4"></div>
  
//           <div class="tile tile-5"></div>
//           <div class="tile tile-6"></div>
//           <div class="tile tile-7"></div>
//           <div class="tile tile-8"></div>
  
//           <div class="tile tile-9"></div>
//           <div class="tile tile-10"></div>
//         </div>
  
//         <div class="line line-1"></div>
//         <div class="line line-2"></div>
//         <div class="line line-3"></div>
//       </div>
//     </div>`;
// const cont2ele = document.getElementsByClassName("grid")[0];
// // cont2ele.innerHTML = cont2html;

// console.log(cont2ele);
// const container = document.getElementById("grid");

// for (let i = 0; i < data.length; i++){
//     const myObj = data[i];
//     const cont2html = `    <div class="card">
//     <span class="icon">
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         stroke-width="1.2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"
//         />
//       </svg>
//     </span>
//     <h4>${myObj.name.common}</h4>
//     <p>
//       Standard chunk of Lorem Ipsum used since the 1500s is showed below
//       for those interested.
//     </p>
//     <div class="shine"></div>
//     <div class="background">
//       <div class="tiles">
//         <div class="tile tile-1"></div>
//         <div class="tile tile-2"></div>
//         <div class="tile tile-3"></div>
//         <div class="tile tile-4"></div>

//         <div class="tile tile-5"></div>
//         <div class="tile tile-6"></div>
//         <div class="tile tile-7"></div>
//         <div class="tile tile-8"></div>

//         <div class="tile tile-9"></div>
//         <div class="tile tile-10"></div>
//       </div>

//       <div class="line line-1"></div>
//       <div class="line line-2"></div>
//       <div class="line line-3"></div>
//     </div>
//   </div>`;
//     cont2ele.innerHTML += cont2html;

// }

// // Dark & Light toggle

// document.querySelector(".day-night input").addEventListener("change", () => {
//     document.querySelector("body").classList.add("toggle");
//     setTimeout(() => {
//       document.querySelector("body").classList.toggle("light");
  
//       setTimeout(
//         () => document.querySelector("body").classList.remove("toggle"),
//         10
//       );
//     }, 5);
//   });
  


console.log("---functions---");



function sum(a,b) {
    const html1 = document.getElementsByClassName("container")[0];
    const result = a+b;
    console.log(result)
    const myhtml = `<h1>Sum = ${result}</h1>`;
    html1.innerHTML = myhtml;
    return result;
}

function multiply(a,b){
    const html2 = document.getElementsByClassName("container")[0];
    const result = a*b;
    console.log(result)
    const myhtml = `<h1>Multiplication = ${result}</h1>`;
    html2.innerHTML = myhtml;
    return result;
}
function divide(a,b){
    const html3 = document.getElementsByClassName("container")[0];
    const result = a/b;
    console.log(result)
    const myhtml = `<h1>Division = ${result}</h1>`;
    html3.innerHTML = myhtml;
    return result;
}
function subtract(a,b){
    const html4 = document.getElementsByClassName("container")[0];
    const result = a-b;
    console.log(result)
    const myhtml = `<h1>Subtraction = ${result}</h1>`;
    html4.innerHTML = myhtml;
    return result;
}


// console.log("multiplication");
// const and = multiply(9,8);
// console.log(and);
// console.log("sum");
// const ans = sum(6,7);
// console.log(ans);
// console.log("division");
// const anf = divide(9,3)
// console.log(anf);
// console.log("subtraction");
// const ank = subtract(19,3)
// console.log(ank);