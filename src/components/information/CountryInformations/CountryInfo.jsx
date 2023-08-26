import "./CountryInfo.scss";
const CountryInfo = ({ thisCountry }) => {
  if (thisCountry === null) return;

  const countryInfo = {
    countryName: thisCountry?.name,
    population: thisCountry?.population,
    region: thisCountry?.region,
    capital: thisCountry?.capital,
    nativeName: thisCountry?.nativeName,
    domain: thisCountry?.topLevelDomain[0],
    subRegion: thisCountry?.subregion,
    currencies: thisCountry?.currencies?.[0]?.name,
    languages: thisCountry?.languages,
    borders: thisCountry?.borders,
  };

  console.log(countryInfo);

  return (
    <div className="informations__country">
      <h1 className="informations__country--name">{countryInfo.countryName}</h1>
      <div className="informations__country--main">
        <b className="informations__country--title">
          Native Name:
          <p className="informations__country--info">
            {countryInfo.nativeName}
          </p>
        </b>
        <b className="informations__country--title">
          Population:
          <p className="informations__country--info">
            {countryInfo.population}
          </p>
        </b>
        <b className="informations__country--title">
          Region:
          <p className="informations__country--info">{countryInfo.region}</p>
        </b>
        <b className="informations__country--title">
          Sub Region:
          <p className="informations__country--info">{countryInfo.subRegion}</p>
        </b>
        <b className="informations__country--title">
          Capital:
          <p className="informations__country--info">
            {countryInfo.capital !== undefined
              ? countryInfo.capital
              : "Not found"}
          </p>
        </b>
      </div>

      <div className="informations__country--sub">
        <b className="informations__country--title">
          Top Level Domain:
          <p className="informations__country--info">{countryInfo.domain}</p>
        </b>
        <b className="informations__country--title">
          Currencies:
          <p className="informations__country--info">
            {countryInfo.currencies !== undefined
              ? countryInfo.currencies
              : "Not found"}
          </p>
        </b>
        <b className="informations__country--title">
          Languages:
          {countryInfo.languages.map((lang) => (
            <p className="informations__country--info" key={lang.name}>
              {lang.name}
            </p>
          ))}
        </b>
      </div>

      <div className="informations__country--borders">
        <b className="informations__country--title">
          Borders:
          {countryInfo.borders !== undefined ? (
            countryInfo.borders.map((border) => (
              <p className="informations__country--border" key={border}>
                {border}
              </p>
            ))
          ) : (
            <p className="informations__country--border">No borders yet</p>
          )}
        </b>
      </div>
    </div>
  );
};

export default CountryInfo;
