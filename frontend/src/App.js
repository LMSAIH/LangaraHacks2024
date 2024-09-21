import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomePage } from './components/Home/HomePage';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';

function App() {

  return (
    <div className="Wrapper">
      <BrowserRouter>
        <Navbar />
        <div className='Content'>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
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
