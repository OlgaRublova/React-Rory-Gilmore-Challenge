import Book from "../components/Book"
import React, {useState} from "react";
import {useFilterContext} from "../context/filter_context";


const Books = () => {
    const {filtered_books: books} = useFilterContext();
    const [likes, setLikes] = useState([]);
    const onHeartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-session'].value);
        console.log(sessionId)
        setLikes(
            likes.map((like)=> {
                if (like.id === sessionId){
                    return {...like, favorite: favoriteValue}
                }
                return like;
            })
        )
    }
    return (

        <section className="books-container">
            {books.map(book => {
                return (
                    <Book key={book.id}
                          onHeartFavoriteHandler={onHeartFavoriteHandler}
                          {...book}/>
                )
            })}
        </section>


    )
}
export default Books;