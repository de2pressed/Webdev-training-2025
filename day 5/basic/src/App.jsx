// // import Blog from "./pages/Blog";
// // import Body from "./pages/Body";
// // import Ctas from "./pages/Ctas";
// // import Footer from "./pages/Footer";
// // import Navbar from "./pages/navbar";

// // function App(){
// //   console.log("sum");
// //   return (
// //     <>
// //       <Navbar/> 
// //       <Blog/>
// //       <Body/>
// //       <Ctas/>
// //       <Footer/>   
// //     </>  
// //     );
// // }

// // export default App;
// import { useEffect, useState } from "react";

// function App(){

//   const [Count, setCount] = useState(0);
//   const [byvalue, setbyvalue] = useState(0);
//   const [text, settext] = useState("Play")

//   const play = () => {
//     settext("Play")
//     setbyvalue(1);
//   };
//   const ten = () => {
//     setbyvalue(10);
//   };
//   const hundred = () => {
//     setbyvalue(100);
//   };
//   const reset = () => {
//     setCount(0);
//     setbyvalue(0);
//   };
// const pause = () => {
//     settext("Resume")
//     setbyvalue(0)
// }
//     useEffect(() => {
//       let timer = setTimeout(() => {
//       setCount((count) => count +byvalue);
//     }, 1000);
//     return () => clearTimeout(timer)
//   },);


//   return(
//     <>
//     <div id="Timer">
//     <h1>Counter:{Count}</h1>
//     <button id="buton" onClick={pause}>Pause</button>
//     <button  id="buton" onClick={play}>{text}</button>
//     <button  id="buton"onClick={reset}>Reset</button>
//     <br />
//     <button  id="buton" onClick={ten}>By 10</button>
//     <button  id="buton" onClick={hundred}>By 100</button>
//     <button  id="buton" onClick={play}>By 1</button>
//     </div>
//     </>
//   );

// }

// export default App;


import { useState } from "react";

function App(){
  const [var1, setvar1] = useState('');
  const [result, setresult] = useState('');

  const storage = (value) => {
    setvar1((prev) => prev + value)
  };

  const resultd = () => {try {
    setresult(eval(var1).toString());
  } catch (error) {
    setvar1("Error");
  }
};

  return(
    <>
      <div id="calculator">
        <div id="buttons">
        <button onClick={storage('1')}>1</button>
        <button onClick={storage('2')}>2</button>
        <button onClick={storage('3')}>3</button>
        <button onClick={storage('4')}>4</button>
        <button onClick={storage('5')}>5</button>
        <button onClick={storage('6')}>6</button>
        <button onClick={storage('7')}>7</button>
        <button onClick={storage('8')}>8</button>
        <button onClick={storage('9')}>9</button>
        <button onClick={storage('0')}>0</button>
        <button onClick={storage('+')}>+</button>
        <button onClick={storage('-')}>-</button>
        <button onClick={storage('/')}>/</button>
        <button onClick={storage('*')}>X</button>
        <button onClick={resultd}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;