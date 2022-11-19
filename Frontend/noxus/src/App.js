// <<<<<<< HEAD
// <<<<<<< HEAD
// import './App.css';
// import Ttilp from './components/TTILP/Ttilp'
// =======
// import logo from "./logo.svg";
// import "./App.css";
// >>>>>>> baa591df25233686d466c6b303afd0587a4d4807

// function App() {
//   return (
//     <div className="App">
//       <Ttilp />
// =======

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<CoursePage /> } />
//         <Route path="details/:detailId" element={<CourseDetail />} />
//       </Routes>
// >>>>>>> c627db8ce76dce8b4899fc568d9a0612531e6ebd
//     </div>
//   );
// }

// export default App;

import "./App.css";
// import Ttilp from "./components/TTILP/Ttilp";
import "./App.css";
import Faq from "./components/faq";

function App() {
  return (
    <div className="App">
      <Faq />
      {/* <Ttilp /> */}
    </div>
  );
}

export default App;
