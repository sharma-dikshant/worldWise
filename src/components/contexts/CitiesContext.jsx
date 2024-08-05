import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000/cities";

//STEP 1: Create a context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        alert("An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    //STEP 2: Provide the context value
    <CitiesContext.Provider
      value={{
        cities,
        isloading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

//step 3: creating a custom hook

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
