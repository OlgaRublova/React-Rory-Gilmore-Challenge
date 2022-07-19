import React from "react";


const AboutOlga = () => {
    return (
        <section>
            <div className="olga-page__content">
                <img className="olga-page__content__image"
                     src="https://m.media-amazon.com/images/M/MV5BN2QwYzE4YTItNmZmZC00M2YyLTg0OTQtOTQyMzRmNWJhN2RmXkEyXkFqcGdeQXVyMTI5ODA2NzQ5._V1_.jpg"
                     alt="olga"/>
                <div className="olga-page__content__text">
                    <h3>Hello, I'm <span className="section-info-global__heading">Olga Rublova</span></h3>
                    <h3>I'm a front-end developer</h3>
                    <div className="btn-primary-box">
                        <button className="btn-primary"> View My Work</button>
                        <button className="btn-primary"> View My CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutOlga;