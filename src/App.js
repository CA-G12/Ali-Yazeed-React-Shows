import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import SeasonDetails from './components/SeasonDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows/:id' element={<ShowDetails />} />
          <Route path='/shows/season/:id' element={<SeasonDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
