import './App.css';
import Home from './Home';
import Yield from './Yield1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yield" element={<Yield />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;