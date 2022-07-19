import React from 'react'
import {Link} from "react-router-dom"
import {imageUrls, textUrls} from "../helpers/image-urls";

const Home = () => {

    return (
            <section className="home-page">
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
                    <h1 className="section-info-global__heading">
                        Welcome to the Rory Gilmore Reading List
                    </h1>
                    <h3 className="home-page__info">
                        Rory Gilmore is one of modern pop culture’s OG readers from the "Gilmore Girls." She made
                        lots of us readers feel like we weren’t alone in our bookish quirks.
                    </h3>
                    <h3 className="home-page__info">
                        While brainstorming ideas for my portfolio projects, I realized that creating something
                        genuinely
                        beneficial to me and other fans worldwide would be cool. That's why I've created a website that shows
                        all <span>392</span> books referenced in
                        the
                        Gilmore girls with a possibility to filter the books
                        by size, genre, whether or not it has a Nobel prize, search by the author/book's name or sort the
                        books out from the shortest to the longest, and even creating your own wish list.<br/> <br/>Moreover, you
                        could check out which books you have read to find out how much more it is comparing to an
                        average reader!
                    </h3>
                    <h1 className="section-info-global__heading">
                        How it works:
                    </h1>
                    <h1 className="section-info-global__heading">
                        Step 1: <span>Check how many books you have already read</span>
                        <p>Just click a checkbox if you read the book </p>

                    </h1>
                    <h1 className="section-info-global__heading">
                        Step 2: <span>Take a look at the books you haven't read</span>
                        <p>You will be able to filter down to the genre you like, sort books out how you like, or check if your favorite book is on the Rory's list </p>

                    </h1>
                    <h1 className="section-info-global__heading">
                        Step 3: <span>Check out the book you want to read</span>
                        <p>We populated our database with real reviews from Amazon to help you make up your mind if the book is worth reading</p>
                    </h1>
                    <Link to={`/books`}>
                        <button className="btn-primary">Let's Get Started</button>
                    </Link>

                </div>
            </section>
        )
}
export default Home;