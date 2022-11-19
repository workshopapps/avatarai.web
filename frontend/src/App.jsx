
// function App() {
//   return (
//     <div>

//       App Running ...

//     </div>
//   )
// }

// export default App


import  { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import Four404  from './components/404page/404';


// import PaymentFlow12 from './components/paymentFlow-1.2/paymentFlow1.2';
// import './App.css';
import Ttilp from './components/TTILP/Ttilp'
// import PaymentFlow11 from './components/paymentFlow-1.1/paymentFlow1.1';



// import React from "react";
import Opt_first from '../src/components/sign-up/sign-up_first';
import Opt_sec from '../src/components/sign-up/sign-up_sec';
import Opt_thi from '../src/components/sign-up/sign-up_thi';
import Opt_for from '../src/components/sign-up/sign-up_for';
import Opt_fi from './components/sign-up/sign-up_fi';
import Aboutus from './components/aboutus/AboutUs';
// import Pricing from './components/'
import FAQ from './components/faq/index'



export default function App() {
  return (
      <Router>
        
        <Routes>
          <Route path ="/" element={<Ttilp /> } exact />
          <Route path ="/signupfirst/" element={<Opt_first /> } />
          <Route path ="/Opt_sec" element={<Opt_sec /> } />
          <Route path ="/Opt_thi" element={<Opt_thi /> } /> 
          <Route path ="/Opt_fi" element={<Opt_fi /> } />

        {/* About Us */}
          <Route path ="/Aboutus" element={<Aboutus /> } />
          <Route path ="/FAQ" element={<FAQ /> } />
          
         
        </Routes>
      </Router>
      // <Four404 />
  );

}
// import React from "react";
// import ReadArticle from "./components/read article/ReadArticle";

// function App() {
//   return <ReadArticle />;
// }