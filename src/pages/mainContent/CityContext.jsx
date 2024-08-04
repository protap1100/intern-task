import { createContext, useContext, useState, useEffect } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("cities.json")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setFilteredCities(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    filterCities(searchTerm);
  }, [searchTerm]);

  const filterCities = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(lowerCaseTerm) ||
        city.zipCode.includes(lowerCaseTerm)
    );
    setFilteredCities(filtered);
  };

  return (
    <CityContext.Provider
      value={{ cities, filteredCities, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </CityContext.Provider>
  );
};

// Custom hook to use the City context
export const useCityContext = () => useContext(CityContext);
