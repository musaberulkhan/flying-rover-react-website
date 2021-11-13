import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({})

    // ----------- Handle Email Change ------------
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        // -----------   Email Validation   ----------
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid = emailReg.test(String(email).toLowerCase());

        setMessage({});

        // -----------   Check for Error   ----------
        if (!isEmailValid) {
            const errorMessage = {
                text: "Invalid Email Address",
                class: "text-danger"
            }
            setMessage(errorMessage);
        }
        else {
            const emailJSON = {
                email: email
            }

            fetch('https://whispering-chamber-62649.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(emailJSON)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('User Added as Admin');
                        e.target.reset();
                    }
                    else if (data.modifiedCount === 0 && data.matchedCount > 0) {
                        alert('User Already Added as Admin');
                        e.target.reset();
                    }
                    else {
                        const errorMessage = {
                            text: "Invalid User",
                            class: "text-danger"
                        }
                        setMessage(errorMessage);
                    }
                });
        }
    }

    return (
        <div className="make-admin p-3">
            <h2 className="mb-4">Make Admin</h2>
            <form onSubmit={formSubmit} style={{ width: '350px' }}>
                <input onBlur={handleEmailChange} type="email" className="form-control mb-2" placeholder="Email Address" required></input>
                <p className={message?.class}>{message?.text}</p>
                <input type="submit" className="btn btn-success mt-1" value="Make Admin" required></input>
            </form>
        </div>
    );
};

export default MakeAdmin;