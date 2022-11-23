import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import D from './components/desktop_4/DD4'

export default function App() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<D/>}/>
        </Routes>
    </Router>
  );
}