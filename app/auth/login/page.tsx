"use client"

import Image from "next/image";
import { useState } from "react";

import "./page.css"

interface LoginForm {
    username: string;
    password: string;
}

const LoginPage = () => {

    const [loginForm, setLoginForm] = useState<LoginForm>({
        username: "",
        password: ""
    })

    const handdleSubmit = async () => {
        const response = await fetch("",
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(loginForm)
            }
        )
        if (!response.ok) {

        }
        if (response.status == 404) {
            alert("User not found")
        }
    }

    return (
        <section className="login">
            <div className="login-main-container">
                <div className="login-inner-left">
                    <h1>Login</h1>
                    <div className="login-form">
                        <div className="form-group">
                            <i><img src="/icons/user-icon.png" alt="user icon" /></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={loginForm.username}
                                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <i><img src="/icons/lock-icon.png" alt="password icon" /></i>
                            <input
                                type="text"
                                placeholder="Password"
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
                        </div>
                        <input type="submit" onClickCapture={handdleSubmit} value="Log In" />
                    </div>
                    <a href="/recovery">Forgot your Password?</a>

                    <div className="signup-redirect">
                        <p>Don't have an account?</p>
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
                <figure className="login-banner">
                    <img src="/assets/login-right-banner.png" alt="" />
                </figure>

            </div>
        </section>
    )
}

export default LoginPage;
