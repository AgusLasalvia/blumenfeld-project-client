"use client"

import "./page.css"

import { useState } from "react";

interface SignUpForm {
    fistName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    agreements: boolean;
}


const SignUpPage = () => {

    const [signupForm, setSignupForm] = useState<SignUpForm>({
        fistName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        agreements: false
    })


    const handdleSubmit = async () => {
        const response = await fetch("",
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(signupForm)
            }
        )
        if (response.ok) {
            alert("User created successfully")
        }
        if (response.status == 409) {
            alert("Username already exists")
        }
        if (response.status == 400) {
            alert("Invalid data")
        }
    }


    return (
        <section className="signup">
            <div className="signup-main-container fade-in-up">
                <div className="signup-inner-left">
                    <div className="signup-top-container">
                        <a href="/" className="login-back-btn">
                            <i><img src="/icons/arrow-left.png" alt="" /></i>
                        </a>
                    </div>
                    <h1>Sign Up</h1>
                    <div className="signup-form">
                        <div className="form-group">
                            <i><img src="/icons/pencil.png" alt="pencil icon" /></i>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={signupForm.fistName}
                                maxLength={30}
                                onChange={(e) => setSignupForm({ ...signupForm, fistName: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <i><img src="/icons/pencil.png" alt="pencil icon" /></i>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={signupForm.lastName}
                                maxLength={30}
                                onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <i><img src="/icons/user-icon.png" alt="user icon" /></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={signupForm.username}
                                maxLength={30}
                                onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <i><img src="/icons/lock-icon.png" alt="password icon" /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={signupForm.password}
                                maxLength={18}
                                onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <i><img src="/icons/phone-icon.png" alt="phone icon" /></i>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={signupForm.phone}
                                maxLength={30}
                                onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })} />
                        </div>
                        <div className="form-checkbox">
                            <input id="signup-checkbox" type="checkbox" />
                            <label htmlFor="signup-checkbox">Accept all terms and conditions</label>
                        </div>
                        <input className="form-submit-btn" type="button" onClick={handdleSubmit} value="Sign Up" />
                    </div>


                    <div className="login-redirect">
                        <p>Already have an account?</p>
                        <a href="/auth/login">Sign In</a>
                    </div>


                </div>
                <figure className="signup-banner">
                    <img src="/assets/login-right-banner.png" alt="" />
                </figure>

            </div>
        </section>
    )
}

export default SignUpPage;