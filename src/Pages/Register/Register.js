import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';
import RegisterImage from '../../Images/register.jpg';

const Register = () => {
    // ----------- States ------------
    const { registerUserUsingEmailPassword, setIsLoading, user, auth, updateProfile } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnteredPassword, setReEnteredPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    // ----------- Location ------------     
    const history = useHistory();
    const redirect_url = '/';

    useEffect(() => {
        if (user?.email) {
            history.push("/");
        }
    }, [user]);

    // ----------- Handle Form Login ------------
    const handleFormLogin = (email, password) => {
        registerUserUsingEmailPassword(email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        history.push(redirect_url);
                    })
            })
            .catch((error) => {
                setErrorMessage("Registration Failed!")
            })
            .finally(() => setIsLoading(false));
    }


    // ----------- Handle Register Form Submit ------------
    const registerFormSubmit = (e) => {
        e.preventDefault();
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid = emailReg.test(String(email).toLowerCase());
        setErrorMessage("");

        if (name.length === 0) {
            setErrorMessage("Please Enter Your Name");
        }
        else if (!isEmailValid) {
            setErrorMessage("Invalid Email Address");
        }
        else if (password !== reEnteredPassword) {
            setErrorMessage("Password didn't match! Please check again");
        }
        else if (password.length <= 6) {
            setErrorMessage("Password Should be more than 6 characters");
        }
        else {
            handleFormLogin(email, password, name)
        }
    }


    // ----------- Handle Name Change ------------
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // ----------- Handle Email Change ------------
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // ----------- Handle Password Change ------------
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    // ----------- Handle Reentered Password Change ------------
    const handleReEnteredPasswordChange = (e) => {
        setReEnteredPassword(e.target.value);
    }


    return (
        <div className="footer-parent">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="login container d-flex justify-content-center align-items-center my-5">
                            <div className="login-container">
                                <h3 className="text-center mb-4">Create New Account</h3>

                                {/* ----------- Register Form ------------ */}
                                <form onSubmit={registerFormSubmit}>
                                    <div className="mb-3">
                                        <input onBlur={handleNameChange} type="text" className="form-control single-border" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input onBlur={handleEmailChange} type="text" className="form-control single-border" placeholder="Your email address" />
                                    </div>
                                    <div className="mb-3">
                                        <input onBlur={handlePasswordChange} type="password" className="form-control single-border" placeholder="Your password" />
                                    </div>
                                    <div className="mb-3">

                                        <input onBlur={handleReEnteredPasswordChange} type="password" className="form-control single-border" placeholder="Re-enter password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn login-btn px-5 mt-4 w-100" value="Register" />
                                    </div>
                                    <p className="text-danger">{errorMessage}</p>
                                </form>

                                {/* ----------- Login Link ------------ */}
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <img className="img-fluid" src={RegisterImage} alt="" />
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;