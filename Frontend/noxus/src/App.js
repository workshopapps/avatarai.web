import { Route, Routes } from "react-router-dom";
import CoursePage from "./components/courses/CoursePage";
import Navbar from "./components/courses/Navbar";
import CourseDetail from "./components/courses/CourseDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoursePage /> } />
        <Route path="details/:detailId" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
