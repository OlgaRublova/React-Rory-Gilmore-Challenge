import React from 'react'


const initialState = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    email: ""
}
const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  get all data from our form
        const {fullName, userName, password, confirmPassword, email} = form;
    }
    return (
        <section>
            <Title title="Rory Gilmore Reading Challenge"/>
            <div className="auth__form-container">
                <div className="auth__form-container__fields">
                    <div className="auth__form-container__fields-content">
                        <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
                        <form onSubmit={handleSubmit}>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Auth;