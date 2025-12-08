'use client';

import "./page.css";
import "@styles/ReturnArrow.css"

import { useState } from "react";

import { Error } from "@/@types";

const RecoveryPage = () => {

    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const handleSubmit = async () => {

    }

    return (
        <section className="recovery-section">
            <div className="recovery-container fade-in-up">
                <div className="arrow-top-container">
                    <a href="/login" className="login-back-btn">
                        <i><img src="/icons/arrow-left.png" alt="" /></i>
                    </a>
                </div>
                <div className="form" >

                    {/* <h1>Recovery</h1> */}
                    <p>To reset your password, please enter your email below.</p>

                    <div className="form-group">
                        <i><img src="/icons/envelope.png" alt="pencil icon" /></i>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            maxLength={30}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <input className="form-submit-btn" type="button" onClick={handleSubmit} value="Recover" />
                    {
                        error
                            ? <p className="error-message fade-in-up-fast">{error}</p>
                            : null
                    }
                    {
                        success
                            ? <p className="success-message fade-in-up-fast">{error}</p>
                            : null
                    }
                </div>

            </div>
        </section>
    );
}
export default RecoveryPage;