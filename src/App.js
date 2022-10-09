import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Service from "./Components/Service";
import HireMe from "./Components/HireMe";
import Error from "./Components/Error";
import SharedLayout from "./Components/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="hireme" element={<HireMe />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
