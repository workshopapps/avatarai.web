
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Pricing from "./components/pricingPage/Pricing";


function App() {
  <Router>
    return (
    <div className="App">
      <Routes>
        <Route path="/pricing-page" element={<Pricing />} />
      </Routes>
    </div>
    );
  </Router>;
}

export default App;
