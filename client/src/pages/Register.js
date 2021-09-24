import React, {useState} from 'react'
import signInImage from "../assets/signup-1.jpg"
import axios from "axios";
import {Link, useHistory} from 'react-router-dom'

const initialState = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    profilePicture: "",

}
const Register = () => {
    const [form, setForm] = useState(initialState);
    const history = useHistory();


    const handleChange = e => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, email, password, passwordConfirm, profilePicture} = form;

        const URL = "http://localhost:8000/auth";

        try {
            await axios.post(`${URL}/register`, {
                username, email, password, passwordConfirm, profilePicture
            });
            history.push("/login")

        } catch(err) {
            console.log(err)
        }
    }

    return (
        <section>
            <div className="section-info">
                <h1 className="section-info__heading">
                    Want to read like <span>Rory Gilmore</span> from Gilmore Girls?
                </h1>
                <h3 className="section-info__text">
                    You can, and you should. Because when you read like a Gilmore, your life will change. I know
                    because it's changing mine.
                </h3>
            </div>
            <div className="auth__form-container">
                <div className="auth__form-container_fields">
                    <div className="auth__form-container_fields-content">
                        <p>Sign Up</p>
                        <form>
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">User Name</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
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

                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="passwordConfirm">Confirm Password</label>
                                <input
                                    name="passwordConfirm"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="profilePicture">Choose a profile picture:</label>
                                <input
                                    name="profilePicture"
                                    type="file"
                                    onChange={handleChange}
                                    accept="image/png, image/jpeg"
                                />
                            </div>

                            <div className="auth__form-container_fields-content_button">
                                <button onClick={handleSubmit}>Sign Up</button>
                            </div>
                        </form>

                        <div className="auth__form-container_fields-account">
                            <p> Already have an account?
                                <Link to="/login">
                                    <span> Sign In </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="auth__form-container_image">
                    <img src={signInImage} alt="sign up"/>
                </div>
            </div>
        </section>
    );
};

export default Register;

