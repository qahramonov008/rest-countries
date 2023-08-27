import { useEffect, useState } from "react";
import Countries from "../Countries-box/Countries";
import FormBox from "../Form/FormBox";
import "./AllHome.scss";

const AllHome = ({ isDark }) => {
  const [searchString, setSearchString] = useState([]);
  const [valueRegion, setValueRegion] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const searchedCountry = data.filter((country) =>
    country.name.toLowerCase().includes(searchString)
  );

  console.log(searchedCountry)

  const allRegions = {
    Americas: [],
    Africa: [],
    Oceania: [],
    Europe: [],
    Asia: [],
  };

  allRegions.Americas.push(
    ...data.filter((country) => country.region === "Americas")
  );
  allRegions.Africa.push(
    ...data.filter((country) => country.region === "Africa")
  );
  allRegions.Oceania.push(
    ...data.filter((country) => country.region === "Oceania")
  );
  allRegions.Europe.push(
    ...data.filter((country) => country.region === "Europe")
  );
  allRegions.Asia.push(...data.filter((country) => country.region === "Asia"));

  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div
      className={isDark !== false ? "container" : "container container__dark"}
    >
      <FormBox
        isDark={isDark}
        onSearchChange={onSearchChange}
        valueRegion={valueRegion}
        setValueRegion={setValueRegion}
        searchString={searchString}
      />
      <Countries
        isDark={isDark}
        searchedCountry={searchedCountry}
        allRegions={allRegions}
        valueRegion={valueRegion}
      />
    </div>
  );
};

export default AllHome;
