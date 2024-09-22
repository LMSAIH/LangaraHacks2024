import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import {useNavigate} from 'react-router-dom';

const NavBar = () => {

  const {user, dispatch} = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({type: 'LOGOUT'});
    navigate('/login');
  }

  return (
    <div className="Navbar">
      <div className="NavbarLinks">
        <Link to="/home">Home</Link>
      </div>
      <div className="NavbarLinks">
        <Link to="/login">Login</Link>
      </div>
      <div className="NavbarLinks">
        <Link to="/signup">Signup</Link>
      </div>
      {user && <div className="NavbarLinks">
        <a onClick = {handleLogout}>
            Logout
        </a>
      </div> }
    </div>
  );
};

export default NavBar;
