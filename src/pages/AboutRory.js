import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header";


const AboutRory = () => {

    return (

        <section>
            <Header/>
            <div className="section-info">
                <h1 className="section-info__heading">
                    Want to read like <span>Rory Gilmore</span> from Gilmore Girls?
                </h1>
                <h3 className="section-info__text">
                    You can, and you should. Because when you read like a Gilmore, your life will change. I know
                    because it's changing mine.
                </h3>
                <Link to="/books">
                    <button className="btn-primary"> Take Part In Reading Challenge</button>
                </Link>
            </div>


        </section>

    )
}


export default AboutRory;