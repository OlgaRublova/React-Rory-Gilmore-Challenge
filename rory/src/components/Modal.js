import Books from "./Books";
import Genres from "./Genres";
import {useGlobalContext} from "../contex";


const Modal = () => {
    const {answer, isModalOpen, closeModal, genres, filterBooksByGenre} = useGlobalContext();
    return (
        <section className={`${isModalOpen ? "modal-container open" : "modal-container"}`}>

                    <article className="section-text">
                        <div className="section-text__header">Great!</div>
                        <div className="section-text__sub">Pick your gender!</div>

                    </article>
            <button className="btn-primary" onClick={closeModal}>Ask again!</button>
            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />
            <Books/>

        </section>


    )
}

export default Modal;