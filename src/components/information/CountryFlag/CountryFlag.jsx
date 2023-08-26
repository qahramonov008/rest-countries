import "./CountryFlag.scss"

const CountryDetails = ({ thisCountry }) => {
  if (thisCountry === null) return;

  const countryFlag = {
    flag: thisCountry?.flags?.png,
  };


  return (
    <div className="country-flag--box">
      <img className="country-flag" src={countryFlag.flag} alt="Country flag" />
    </div>
  );
};

export default CountryDetails;
