import { useState } from "react";

function App(){
  const [var1, setVar1] = useState('');

  const storage = (value) => {
    setVar1((prev) => prev + value);
  };

  const clear = () => {
    setVar1('');
  };

  const resultcalc = () => {
    try {
    setVar1(eval(var1).toString());
  } catch (error) {
    setVar1('error');
  }
}

  return(
    <>
      <div id="calculator">
      <div className="display"><h1 id="displ">{var1 || "0"}</h1></div>
        <div id="buttons">

        <button id="buton" onClick={() => storage('1')}>1</button>
        <button id="buton" onClick={() => storage('2')}>2</button>
        <button id="buton" onClick={() => storage('3')}>3</button>
        <button id="buton" onClick={() => storage('*')}>X</button>
        <button id="buton" onClick={() => storage('4')}>4</button>
        <button id="buton" onClick={() => storage('5')}>5</button>
        <button id="buton" onClick={() => storage('6')}>6</button>
        <button id="buton" onClick={() => storage('/')}>/</button>
        <button id="buton" onClick={() => storage('7')}>7</button>
        <button id="buton" onClick={() => storage('8')}>8</button>
        <button id="buton" onClick={() => storage('9')}>9</button>
        <button id="buton" onClick={() => storage('+')}>+</button>
        <button id="buton" onClick={clear}>clear</button>
        <button id="buton" onClick={() => storage('0')}>0</button>
        <button id="buton" onClick={resultcalc}>=</button>
        <button id="buton" onClick={() => storage('-')}>-</button>


  </div>

      </div>
    </>
  );
}

export default App;