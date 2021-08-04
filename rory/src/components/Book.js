import {FaHeart} from "react-icons/all";

const Book = ({id, title, cover, firstName, lastName}) => {

    return (
        <article key={id} className="book">
            <img src={cover} alt={title} className="book-img"/>
            <div className="icon">
                <FaHeart/>
            </div>

            <div className="book-info">
                <div>
                    <h4>{firstName} {lastName}</h4>
                    <p>{title}</p>
                </div>
            </div>
        </article>
    )
}

export default Book;