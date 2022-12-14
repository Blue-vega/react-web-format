import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dinner from "./Dinner";
import Evening from "./Evening";
import Breakfast from "./Breakfast";
import Home from "./Home";
import Contactus from "./Contactus";
import Error from "./Error"

function App() {
  return(
  <BrowserRouter>
  <Routes>
  <Route  path="/" element={<Home />} />
  <Route  path="/breakfast" element={<Breakfast />} />
  <Route  path="/contactus" element={<Contactus />} />
  <Route  path="/evening" element={<Evening />} />
  <Route  path="/dinner" element={<Dinner />} />
  <Route path = "*" element={<Error />} />
  </Routes>
  </BrowserRouter>
  )
}


export default App;
