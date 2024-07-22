import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Pagenotfound from "./Pagenotfound";
import PageNav from "./components/PageNav";

function App() {
  return (
    <div>
      <h1>Hello Routers! </h1>
      {/* <PageNav /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;


