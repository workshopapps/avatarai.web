import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './components/careers-page/career.css';
import Careerpage from './components/careers-page/careerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Careerpage />
      </div>
    </Router>
  );
}

export default App;
