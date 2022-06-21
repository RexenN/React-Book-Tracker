import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Details from './pages/Details';
import Search from './pages/Search';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

 
