import React from 'react';
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignUpForm/>
            <SignInForm/>
        </div>
    )
};

export default Authentication;