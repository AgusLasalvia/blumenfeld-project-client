"use client"

import Image from "next/image"

const SignUpPage = () => {
    return (
        <section>
            <div className="signin-main-container">
                <div className="signin-inner-left">
                    <h1>Sign In</h1>
                    <form className="signin-form">
                        <div className="form-group">
                            <i></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <i></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <i></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <i></i>
                            <input type="text" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <i></i>
                            <select name="" id="">
                                <option value="+598">Uruguay</option>
                                <option value="+52">Argentina</option>
                            </select>
                            <input type="text" placeholder="Phone" />
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                    <a href="/account-recovery">Forgot your Password?</a>

                    <div className="signup-redirect">
                        <p>Don't have an account?</p>
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
                <div className="signin-inner-right">
                    <Image src="" alt="" />
                </div>
            </div>
        </section>
    )
}

export default SignUpPage;