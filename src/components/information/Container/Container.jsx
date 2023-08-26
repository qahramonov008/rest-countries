import { useEffect, useState } from "react";
import BackBtn from "../Back/BackBtn";
import "./Container.scss";
import CountryFlag from "../CountryFlag/CountryFlag";
import CountryInfo from "../CountryInformations/CountryInfo";
import { useParams } from "react-router-dom";

const Container = () => {
  const [thisCountry, setThisCountry] = useState(null);
  const { countryName } = useParams()
  
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setThisCountry(data));
  }, []);

  const dataThisCountry = thisCountry !== null ? thisCountry[0] : null;
  console.log(dataThisCountry);
  return (
    <div className="container__country-details">
      <BackBtn />
      <CountryFlag thisCountry={dataThisCountry} />
      <CountryInfo thisCountry={dataThisCountry} />
    </div>
  );
};

export default Container;
