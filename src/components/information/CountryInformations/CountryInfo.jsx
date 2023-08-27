import "./CountryInfo.scss";
const CountryInfo = ({ thisCountry, isDark }) => {
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
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Native Name:
          <p className="informations__country--info">
            {countryInfo.nativeName}
          </p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Population:
          <p className="informations__country--info">
            {countryInfo.population}
          </p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Region:
          <p className="informations__country--info">{countryInfo.region}</p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Sub Region:
          <p className="informations__country--info">{countryInfo.subRegion}</p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Capital:
          <p className="informations__country--info">
            {countryInfo.capital !== undefined
              ? countryInfo.capital
              : "Not found"}
          </p>
        </b>
      </div>

      <div className="informations__country--sub">
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Top Level Domain:
          <p className="informations__country--info">{countryInfo.domain}</p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Currencies:
          <p className="informations__country--info">
            {countryInfo.currencies !== undefined
              ? countryInfo.currencies
              : "Not found"}
          </p>
        </b>
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Languages:
          {countryInfo.languages.map((lang) => (
            <p className="informations__country--info" key={lang.name}>
              {lang.name}
            </p>
          ))}
        </b>
      </div>

      <div className="informations__country--borders">
        <b
          className={
            isDark !== false
              ? "informations__country--title"
              : "informations__country--title informations__country--title__dark"
          }
        >
          Borders:
          {countryInfo.borders !== undefined ? (
            countryInfo.borders.map((border) => (
              <p
                className={
                  isDark !== false
                    ? "informations__country--border"
                    : "informations__country--border informations__country--border__dark"
                }
                key={border}
              >
                {border}
              </p>
            ))
          ) : (
            <p
              className={
                isDark !== false
                  ? "informations__country--border"
                  : "informations__country--border informations__country--border__dark"
              }
            >
              No borders yet
            </p>
          )}
        </b>
      </div>
    </div>
  );
};

export default CountryInfo;
