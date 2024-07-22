import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Pagenotfound from "./Pagenotfound";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<AppLayout />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;


