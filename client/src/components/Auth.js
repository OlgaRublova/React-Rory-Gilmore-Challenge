import React, {useState} from 'react'
import signInImage from "../assets/signup-1.jpg"
import {Title} from "./index";


const initialState = {
    fullName: "",
    password: "",
    confirmPassword: "",
    email: ""
}
const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignUp] = useState(true);

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    }

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <section>
            <Title title="Rory Gilmore Reading Challenge"/>
            <div className="section-info-global">
                <h1 className="section-info-global__heading">
                    Do you want to read like <span>Rory Gilmore</span> from Gilmore Girls?
                </h1>
                <h3 className="section-info-global__text">
                    You can, and you should! Because when you read like a Gilmore, your life will change. I know
                    because it's changing mine.
                </h3>
            </div>
            <div className="auth__form-container">
                <div className="auth__form-container_fields">
                    <div className="auth__form-container_fields-content">
                        <p>{isSignup ? "Sign Up" : "Sign In"}</p>
                        <form>
                            {isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        name="fullName"
                                        type="text"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}

                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {isSignup && (
                                <div className="auth__form-container_fields-content_input">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth__form-container_fields-content_button">
                                <button onClick={handleSubmit}>{isSignup ? "Sign Up" : "Sign In"}</button>
                            </div>
                        </form>
                        <div className="auth__form-container_fields-account">
                            <p>
                                {isSignup
                                    ? "Already have an account?"
                                    : "Don't have an account?"
                                }
                                <span onClick={switchMode}>
                             {isSignup ? " Sign In" : " Sign Up"}
                             </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="auth__form-container_image">
                    <img src={signInImage} alt="sign in"/>
                </div>
            </div>
        </section>
    )
}
export default Auth;