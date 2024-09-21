import './App.css';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom"
import { HomePage } from './components/Home/HomePage';
import LandingPage from './components/Landing/LandingPage';

function App() {

  return (
    <div className="App">
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
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/login'>Loign</Link>
        <Link to='/signup'>SinUp</Link>
    </div>
  )
}

export default App;
