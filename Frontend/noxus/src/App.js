
import React from 'react'
import logo from './logo.svg';
import PaymentFlow12 from './components/paymentFlow-1.2/paymentFlow1.2';
import './App.css';
import Navbar from './components/landingPage/Navbar/Navbar'
import Ttilp from './components/TTILP/Ttilp'
import PaymentFlow11 from './components/paymentFlow-1.1/paymentFlow1.1';
import { useState } from 'react';


import React from "react";
import Opt_first from '../src/components/sign-up/sign-up_first';
import Opt_sec from '../src/components/sign-up/sign-up_sec';
import Opt_thi from '../src/components/sign-up/sign-up_thi';
import Opt_for from '../src/components/sign-up/sign-up_for';
import Opt_wel from '../src/components/sign-up/sign-up_fi';
function App() {
  return (
      <Router>
        <Routes>
          {/*<Route path ="" element={<Opt_first/>} exact />*/}
          <Route path ="/opt_f" element={<Opt_first/>} />
            <Route path ="/opt_s" element={<Opt_sec/>} />
            <Route path ="/opt_t" element={<Opt_thi/>} />
            <Route path ="/opt_fo" element={<Opt_for/>} />
            <Route path ="/" element={<Opt_wel/>} />

        </Routes>
      </Router>
  );
}


export default App;


