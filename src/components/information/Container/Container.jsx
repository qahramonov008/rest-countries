import { useEffect, useState } from "react";
import BackBtn from "../Back/BackBtn";
import "./Container.scss";
import CountryFlag from "../CountryFlag/CountryFlag";
import CountryInfo from "../CountryInformations/CountryInfo";
import { useParams } from "react-router-dom";

const Container = ({ isDark }) => {
  const [thisCountry, setThisCountry] = useState(null);
  const { countryName } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setThisCountry(data));
  }, []);

  const dataThisCountry = thisCountry !== null ? thisCountry[0] : null;
  console.log(dataThisCountry);
  return (
    <div
      className={
        isDark !== false
          ? "container__country-details"
          : "container__country-details container__country-details__dark"
      }
    >
      <BackBtn isDark={isDark}/>
      <CountryFlag isDark={isDark} thisCountry={dataThisCountry} />
      <CountryInfo isDark={isDark} thisCountry={dataThisCountry} />
    </div>
  );
};

export default Container;
