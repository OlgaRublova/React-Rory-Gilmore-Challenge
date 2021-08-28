import React from "react";


const AboutOlga = () => {
    return (
        <section>
            <div className="section-info">
                <img src="https://awesomechandigarh.in/wp-content/uploads/2021/03/OFFICE-GIRL.jpg" alt="olga"/>
                <h1 className="section-info__heading">
                    About Olga
                </h1>
                <h3 className="section-info__text">
                    <div>
                        I'm an adventurous girl who won in the Diversity Visa Lottery and relocated to the United
                        States. I already have a Masters degree in International Economics, but I dream of accomplishing
                        a career change to software development where I can be more creative and more in control of my
                        job
                        prospects.
                    </div>
                    <div>
                        I started out teaching myself HTML/CSS, Javascript and React by using online tutorials from
                        Udemy & Pluralsight. Additionally, I'm following an 'old fashioned' way - working toward
                        double-major in Computer Science & Graphic Design in Los Angeles Pierce College.
                    </div>

                    <div>I am learning new stuff everyday and work on interesting projects to become the best front-end
                        developer I can!
                    </div>

                </h3>
                <div className="btn-primary-box">
                    <button className="btn-primary"> My Portfolio</button>
                    <button className="btn-primary"> My CV</button>
                </div>
            </div>
        </section>
    )
}


export default AboutOlga;