import { useCityContext } from "./CityContext";

const Country = () => {
  const { filteredCities, loading } = useCityContext();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 -1 gap-5 rounded-2xl">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <div
              className="py-5 flex justify-center items-center border-b border-gray-200"
              key={city.id}
            >
              <h1 className="text-xl text-blue-500 underline">{city.name}</h1>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No cities found</p>
        )}
      </div>
    </div>
  );
};

export default Country;
