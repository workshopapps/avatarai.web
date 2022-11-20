import { Route, Routes } from "react-router-dom";
import CoursePage from "./components/courses/CoursePage";
import Navbar from "./components/courses/Navbar";
import CourseDetail from "./components/courses/CourseDetail";
import ScrollToTop from "./components/courses/ScrollToTop"

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<CoursePage /> } />
        <Route path="details/:detailId" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
