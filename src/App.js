import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllHome from "./components/Home/All-home/AllHome";
import Details from "./components/information/All-details/Details";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <Routes>
      <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark}/>}>
        <Route index element={<AllHome isDark={isDark}/>} />
        <Route
          path="/:countryName"
          element={<Details isDark={isDark}/>}
        />
      </Route>
    </Routes>
  );
}

export default App;
