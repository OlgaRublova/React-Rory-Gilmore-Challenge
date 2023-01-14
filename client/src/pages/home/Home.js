import React from 'react'
import {imageUrls, textUrls} from "../../helpers/image-urls";
import ButtonComponent from "../../components/button/button.component";
import {useNavigate} from "react-router-dom";
import {Navbar} from "../../components";
import "./home.styles.scss"

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="home-page">
            <Navbar/>
            <div className="home-page__images">
                <div className="home-page__images__box">
                    {
                        imageUrls.map((url, index) => {
                            return <img key={index} src={url} alt='Rory is reading'/>
                        })
                    }
                </div>

                <div className="home-page__images__text">
                    {
                        textUrls.map((info, index) => <h1 key={index}>{info.text}</h1>)
                    }
                </div>
            </div>
            <div className="home-page__content">
                {/*<h1 className="section-info-global__heading">*/}
                {/*    Welcome to the Rory Gilmore Reading List*/}
                {/*</h1>*/}
                {/*<h3 className="home-page__info">*/}
                {/*    Rory Gilmore is one of modern pop culture’s OG readers from the "Gilmore Girls." She made*/}
                {/*    lots of us readers feel like we weren’t alone in our bookish quirks.*/}
                {/*</h3>*/}
                {/*<h3 className="home-page__info">*/}
                {/*    While brainstorming ideas for my portfolio projects, I realized that creating something*/}
                {/*    genuinely*/}
                {/*    beneficial to me and other fans worldwide would be cool. That's why I've created a website that*/}
                {/*    shows*/}
                {/*    all <span>392</span> books referenced in*/}
                {/*    the*/}
                {/*    Gilmore girls with a possibility to filter the books*/}
                {/*    by size, genre, whether or not it has a Nobel prize, search by the author/book's name or sort the*/}
                {/*    books out from the shortest to the longest, and even creating your own wish list.<br/> <br/>Moreover,*/}
                {/*    you*/}
                {/*    could check out which books you have read to find out how much more it is comparing to an*/}
                {/*    average reader!*/}
                {/*</h3>*/}

            </div>

            <ButtonComponent buttonType="primary" type="submit" onClick={() => navigate(`/auth`)}>Let's
                Go</ButtonComponent>

        </section>

    )
}
export default Home;