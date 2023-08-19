import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllHome from "./components/Home/All-home/AllHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AllHome />} />
      </Route>
    </Routes>
  );
}

export default App;
