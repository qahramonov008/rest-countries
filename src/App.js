import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllHome from "./components/Home/All-home/AllHome";
import Container from "./components/information/Container/Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AllHome />} />
      </Route>
      <Route path="/country-detail" element={<Container />} />
    </Routes>
  );
}

export default App;
