import  { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import React from 'react';
import Four404  from './components/404page/404';


// import PaymentFlow12 from './components/paymentFlow-1.2/paymentFlow1.2';
// import './App.css';
import Navbar from './components/landingPage/Navbar/Navbar'
// import Ttilp from './components/TTILP/Ttilp'
// import PaymentFlow11 from './components/paymentFlow-1.1/paymentFlow1.1';



// import React from "react";
// import Opt_first from '../src/components/sign-up/sign-up_first';
// import Opt_sec from '../src/components/sign-up/sign-up_sec';
// import Opt_thi from '../src/components/sign-up/sign-up_thi';
// import Opt_for from '../src/components/sign-up/sign-up_for';
// import Opt_wel from '../src/components/sign-up/sign-up_fi';



export default function App() {
  return (
      // <Router>
      //   <Navbar />
      //   <Routes>
      //     <Route path ="" element={<Four404 /> } exact />
          
         
      //   </Routes>
      // </Router>
      <Four404 />
  );

}
// import React from "react";
// import ReadArticle from "./components/read article/ReadArticle";

// function App() {
//   return <ReadArticle />;
// }