import React, { useEffect, useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../Images/google.png';
// import useAuth from '../../Hooks/useAuth';
import Header from '../Header/Header';
import useAuth from '../../Hooks/useAuth';
import LoginImage from '../../Images/login.jpg';
import Footer from '../Footer/Footer';



const Login = () => {
    //  // ----------- States ------------
    const { signInUsingGoogle, signInUserUsingEmailPassword, setIsLoading, user, saveUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')



    // ----------- Location ------------
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    //  ------------   Redirect if user already logged in    -------------
    useEffect(() => {
        if (user?.email) {
            history.push("/");
        }
    }, [user]);

    // ----------- Handle Google Sign In ------------
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {               
                saveUser(result.user?.email, result.user?.displayName, 'PUT')
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }

    // ----------- Handle Form Login ------------
    const handleFormLogin = (email, password) => {
        signInUserUsingEmailPassword(email, password)
            .then((userCredential) => {
                history.push(redirect_url);
            })
            .catch((error) => {
                setErrorMessage("Invalid Email or Password!")
            })
            .finally(() => setIsLoading(false));
    }


    // ----------- Handle Login Form Submit ------------
    const loginFormSubmit = (e) => {
        e.preventDefault();

        // -----------   Email Validation   ----------
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid = emailReg.test(String(email).toLowerCase());
        setErrorMessage("");


        // -----------   Check for Error   ----------
        if (!isEmailValid) {
            setErrorMessage("Invalid Email Address");
        }
        else if (password.length < 6) {
            setErrorMessage("Password Should be more than 6 characters");
        }
        else {
            handleFormLogin(email, password);
        }
    }


    // ----------- Handle Email Change ------------
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // ----------- Handle Password Change ------------
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="login container d-flex justify-content-center align-items-center my-5">
                            <div className="login-container">
                                <h3 className="text-center mb-4">Login</h3>

                                {/* ----------- Login Form ------------ */}
                                <form onSubmit={loginFormSubmit}>
                                    <div className="mb-3">                                      
                                        <input onBlur={handleEmailChange} type="email" className="form-control single-border" placeholder="Your email address" />
                                    </div>
                                    <div className="mb-3">                                        
                                        <input onBlur={handlePasswordChange} type="password" className="form-control single-border" placeholder="Your password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn px-5 mt-3 login-btn w-100" value="Login" />
                                    </div>
                                    <p className="text-danger">{errorMessage}</p>
                                </form>

                                {/* ----------- Register Link ------------ */}
                                <p>Don't have an account? <Link to="/register">Create Account</Link></p>

                                {/* ----------- Google Sign In------------ */}
                                <div className="d-flex flex-column align-items-center others-signin">
                                    <p className="my-2">Or Login With</p>
                                    <button onClick={handleGoogleSignIn} className="google-signin-btn">
                                        <img className="img-fluid" src={GoogleLogo} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <img className="img-fluid" src={LoginImage} alt="" />
                    </div>
                </div>            
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;