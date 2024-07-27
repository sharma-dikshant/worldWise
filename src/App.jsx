import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Pagenotfound from "./Pagenotfound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000/cities";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={loading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={loading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
