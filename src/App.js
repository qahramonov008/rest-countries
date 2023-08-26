import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AllHome from "./components/Home/All-home/AllHome";
import Details from "./components/information/All-details/Details";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AllHome />} />
        <Route
          path="/:countryName"
          element={<Details />}
        />
      </Route>
    </Routes>
  );
}

export default App;
