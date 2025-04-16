import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import A from "./pages/A";
import C from "./pages/C";
import B from "./pages/B";

function App(){
  // const navigate = useNavigate();
  return(
    <>
    {/* <button onClick={() => navigate('/A')}>A</button>
    <button onClick={() => navigate('/B')}>B</button>
    <button onClick={() => navigate('/C')}>C</button> */}

      <Link to={"/A"}><button>A</button></Link>
      <Link to={"/B"}><button>B</button></Link>
      <Link to={"/C"}><button>C</button></Link>

      <Routes>
      <Route exact path="/A" element={<A />} />
      <Route exact path="/B" element={<B />} />
      <Route exact path="/C" element={<C />} /> 
      </Routes>
    </>
  );
}

export default App;