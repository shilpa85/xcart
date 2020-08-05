import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {login} from "../../actions/login";


export default function Login (props) {

    const dispatch = useDispatch();

    const [user, setUser] = useState({username:"", password:""});
    const [errors, setErrors] = useState({username:"", password:""});
    const [networkError, setNetworkError] = useState("");

    const { loginResult } = useSelector(state => state.login);

    useEffect(()=>{

       if(loginResult.length > 0) {        
            props.history.push('/');      
       } else {
            setNetworkError("Incorrect username or password.");
       }
    }, [loginResult]);

    const onChangeInputHandler = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setUser(prevState => ({...prevState, [fieldName]: fieldValue}));

        setNetworkError("");
    }

    const loginHandler = (e) =>{
        e.preventDefault();

        if(validateForm() === true) {
            dispatch(login(user));
        }
    }

    function validateForm(){
        let isValid = true;
        if(user.username === '') {
            setErrors(prevState => ({...prevState, username: "Please enter username."}));
            isValid = false;
        } else {
            setErrors(prevState => ({...prevState, username: ""}));
        }

        if(user.password === '') {
            setErrors(prevState => ({...prevState, password: "Please enter password."}));
            isValid = false;
        } else {
            setErrors(prevState => ({...prevState, password: ""}));
        }

        return isValid;
    }

    return(
        <div className="login-form-container">
            {networkError !== '' && 
                <div className="input-feedback">{networkError}</div>
             }

            <form>					
                <div className="form-controls">
                    <div>
                        <input 
                        type="text" 
                        value={user.username} 
                        onChange={onChangeInputHandler} 
                        placeholder="Username" 
                        name="username" 
                        aria-label="Username"
                        />
                        {errors.username && (
                            <div className="input-feedback">{errors.username}</div>
                        )}
                    </div>

                    <div>
                        <input 
                        type="password" 
                        value={user.password} 
                        onChange={onChangeInputHandler} 
                        placeholder="Password" 
                        name="password" 
                        aria-label="Password"
                        />
                        {errors.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                    </div>
                    
                    <button className="button--primary login" type="submit" onClick={loginHandler}>Login</button>
                </div>
            </form>
        </div>
    )
}