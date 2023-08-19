import { useEffect, useState } from "react";
import Countries from "../Countries-box/Countries";
import Form from "../Form/Form";

const AllHome = () => {
  const [searchString, setSearchString] = useState([]);
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
    )

  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <Form onSearchChange={onSearchChange} />
      <Countries  searchedCountry={searchedCountry} />
    </div>
  );
};

export default AllHome;
