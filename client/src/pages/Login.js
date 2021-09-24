import React, {useState} from 'react';
import {Link} from "react-router-dom";
import signInImage from "../assets/signup-1.jpg";
import axios from "axios";
import {useUserContext} from "../context/user_context";

const initialState = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    profilePicture: "",
}

const Login = () => {
    const [form, setForm] = useState(initialState);
    const {user, isFetching, LoginStart, LoginSuccess, LoginFailure} = useUserContext();


    const handleChange = e => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = form;
        const URL = "http://localhost:8000/auth";

        try {
            LoginStart();
            try {
                const res = await
                    axios
                        .post(`${URL}/login`, {
                            email, password
                        })
                LoginSuccess(res.data)
            } catch (err) {
                LoginFailure(err)
            }

        } catch (err) {
            console.log(err)
        }

        // axios
        //     .post(`${URL}/login`, {
        //         email, password
        //     })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })

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
                        <p>Sign In</p>
                        <form>

                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">Email</label>
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


                            <div className="auth__form-container_fields-content_button">
                                <button onClick={handleSubmit}>Sign In</button>
                            </div>
                        </form>

                        <div className="auth__form-container_fields-account">
                            <p> Don't have an account?
                                <Link to="/register">
                                    <span> Sign Up</span>
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
    )
}


export default Login;