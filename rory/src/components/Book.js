const Book = ({id, title, cover}) => {

    return (
        <article key={id} className="book">
            <img src={cover} alt={title} className="book-img"/>
        </article>
    )
}

export default Book;