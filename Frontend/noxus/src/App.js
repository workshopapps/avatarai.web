import {
  HashRouter as Router, Route, Routes
} from "react-router-dom";

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
            <Route path ="/welcome" element={<Opt_wel/>} />

        </Routes>
      </Router>
  );
}


export default App;
