import { useEffect, useState } from "react";
import Countries from "../Countries-box/Countries";
import FormBox from "../Form/FormBox";

const AllHome = () => {
  const [searchString, setSearchString] = useState([]);
  const [valueRegion, setValueRegion] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const searchedCountry = data.filter((country) =>
    country.name.toLowerCase().includes(searchString)
  );

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
  allRegions.Asia.push(
    ...data.filter((country) => country.region === "Asia")
  );

  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <FormBox
        onSearchChange={onSearchChange}
        valueRegion={valueRegion}
        setValueRegion={setValueRegion}
        searchString={searchString}
      />
      <Countries searchedCountry={searchedCountry} allRegions={allRegions} valueRegion={valueRegion} />
    </div>
  );
};

export default AllHome;
