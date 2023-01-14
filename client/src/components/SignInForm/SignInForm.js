import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useAuthContext} from "../../context/auth_context";

import ButtonComponent from "../button/button.component";
import "./SignInForm.styles.scss"
import FormInputComponent from "../form-input/form-input.component";
import {useNavigate} from "react-router-dom";


const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const {
        user,
        signInUserWithEmailAndPassword, signOutUserWithEmailAndPassword,
        signInWithGoogle, signOutWithGoogle
    } = useAuthContext();

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate("/books");
        }
    }, [user]);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSignInUserWithEmailAndPassword = async () => {
        const URL = "http://localhost:8000/auth";

        try {
            try {
                const res = await
                    axios
                        .post(`${URL}/login`, {
                            email, password
                        })
                await signInUserWithEmailAndPassword(res.data)
                navigate("/books");
            } catch (err) {
                console.log('user sign in failed', err);

            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email & password</span>
            <form onSubmit={handleSubmit}>

                <FormInputComponent
                    label="Email"
                    type="email" name="email" value={email} required onChange={handleChange}/>

                <FormInputComponent
                    label="Password"
                    type="password" name="password" value={password} required onChange={handleChange}/>

                <div className="buttons-container">
                    <ButtonComponent
                        type="submit"
                        onClick={handleSignInUserWithEmailAndPassword}
                    >Sign In</ButtonComponent>
                    <ButtonComponent
                        type="button"
                        buttonType="google"
                        onClick={handleSignInWithGoogle}
                    >Sign In With Google</ButtonComponent>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;