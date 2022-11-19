
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
