import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomePage } from './components/Home/HomePage';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { useAuthContext } from './hooks/useAuthContext';
import LandingPage from './components/Landing/LandingPage';


function App() {

  const {user} = useAuthContext();
  return (
    <div className="Wrapper">
      <BrowserRouter>
        <div className='Content'>
          <Routes>
            <Route path="/home" element={user ? <HomePage /> : <LoginPage />}  />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path = '/' element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}


export default App;