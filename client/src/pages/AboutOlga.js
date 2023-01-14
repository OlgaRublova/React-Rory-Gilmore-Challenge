import React from "react";
import ButtonComponent from "../components/button/button.component";
import {useNavigate} from "react-router-dom";

const AboutOlga = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className="olga-page__content">
                <ButtonComponent buttonType="inverted" onClick={() => navigate("/books")}>Go
                    Back</ButtonComponent>
                <img className="olga-page__content__image" src="../images/girl.jpg" alt="olga"/>

                <div className="olga-page__content__text">
                    <h3>Hello,<h2>I'm Olga Rublova</h2></h3>
                    <h3>I'm a front-end developer</h3>
                    <div className="btn-primary-box">
                        <ButtonComponent buttonType="inverted"> View My Work</ButtonComponent>
                        <ButtonComponent buttonType="primary"> View My CV</ButtonComponent>
                    </div>


                </div>
            </div>

        </>


    )
}


export default AboutOlga;