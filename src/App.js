import { Route, Routes } from "react-router-dom";

import Thenavbar from "./component/layouts/Thenavbar";
import Homepage from "./component/Homepage";
import About from "./component/About";

function App() {
  return (
    <>
    <Thenavbar />
        <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    </>
  );
}

export default App;
