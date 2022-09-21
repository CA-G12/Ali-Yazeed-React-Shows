import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shows/:id' element={<ShowDetails />}/>
            {/* <Route path='/shows/:id/season/:id' element={<SeasonDetails />}/> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
