import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export const SignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:4000/api/user/signup', {email, password})
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data));
            setIsLoading(false);
            dispatch({type: 'LOGIN', payload: response.data});
            navigate('/home');
        })
        .catch((err) => {
            setError(err.response.data.error);
            setIsLoading(false);
        });

    }

    return (
        <div className = "signupform">
            <h4 className = "formTitle">Sign<span className = "up">Up</span></h4>
            <form onSubmit = {handleSubmit}> 
                <label>Email </label>
                <input type = "email" onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}></input> 
                <label>Password </label>
                <input type = "password" onChange={(e)=>{setPassword(e.target.value)}} name="password" value={password}></input> 
                <button disabled = {isLoading} className = "submitBtn"> Sign up! </button>
                {error && <div className = "error"> {error} </div>}
            </form>
        </div>
      );
}