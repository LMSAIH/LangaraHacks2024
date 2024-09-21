import './components/HomePage.css';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomePage } from './components/Home/HomePage';
import LandingPage from './components/Landing/LandingPage';

function App() {

  return (
    <div className="Wrapper">
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='NavbarLinks'>
        <Link to='/home'>Home</Link>
      </div>
      <div className='NavbarLinks'>
        <Link to='/login'>Loign</Link>
      </div>
      <div className='NavbarLinks'>
        <Link to='/signup'>SinUp</Link>
      </div>
    </div>
  )
}

export default App;
