import React, {useState} from 'react'
import Title from "./Title"
import signInImage from "../assets/signup-1.jpg"
// import signInImage from "../assets/signup-3.jpeg"

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
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  get all data from our form
        const {fullName, password, confirmPassword, email} = form;
    }

    return (
        <section>
            <Title title="Rory Gilmore Reading Challenge"/>
            <div className="auth__form-container">
                <div className="auth__form-container_fields">
                    <div className="auth__form-container_fields-content">
                        <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                        <form onSubmit={handleSubmit}>
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
                                <button>{isSignup ? "Sign Up" : "Sign In"}</button>
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