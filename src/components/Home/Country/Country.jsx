import "./Country.scss"

const Country = ({ data }) => {
  if (data === null) return;

  const countriesData = {
    flag: data?.flags?.png,
    countryName: data?.name,
    population: data?.population,
    region: data?.region,
    capital: data?.capital,
    key: data?.name
  };

  return (
    <div className="country" key={countriesData.key}>
      <div className="country__photo-box">
        <img
          src={countriesData.flag}
          alt="Flag Photos"
          className="country__photo"
        />
      </div>
      <div className="country__info">
        <h4 className="country__name">{countriesData.countryName}</h4>
        <div className="country__info--text">
          <p className="country__population">
            Population: {countriesData.population}
          </p>
          <p className="country__region">Region: {countriesData.region}</p>
          <p className="country__capital">
            Capital: {countriesData.population}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
