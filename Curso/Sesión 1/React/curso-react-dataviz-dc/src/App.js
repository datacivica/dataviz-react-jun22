import Home from "./views/Home";
import Demo from "./views/Demo";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
