import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./SignUpForm.styles.scss"
import ButtonComponent from "../button/button.component";
import FormInputComponent from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    const handleSubmit = async (e) => {
        e.preventDefault();

        const URL = "http://localhost:8000/auth";

        try {
            await axios.post(`${URL}/register`, {
                displayName, email, password, confirmPassword
            });
            // resetFormFields();

            // eslint-disable-next-line no-restricted-globals
            navigate("/login");


        } catch(err) {
            console.log(err)
        }
    }

    // const resetFormFields = () => {
    //     setFormFields(defaultFormFields)
    // }

    const handleChange = event => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up with your email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent
                    label="Display Name"
                    type="text" name="displayName" value={displayName} required onChange={handleChange}/>
                <FormInputComponent
                    label="Email"
                    type="email" name="email" value={email} required onChange={handleChange}/>

                <FormInputComponent
                    label="Password"
                    type="text" name="password" value={password} required onChange={handleChange}/>

                <FormInputComponent
                    label="Confirm Password"
                    type="text" name="confirmPassword" value={confirmPassword} required onChange={handleChange}/>
                <ButtonComponent type="submit">Sign Up</ButtonComponent>
            </form>
        </div>
    );
};

export default SignUpForm;