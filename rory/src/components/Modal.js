import Books from "./Books";
import Genres from "./Genres";
import {useGlobalContext} from "../contex";
import Pages from "./Pages";
import {BsMoon, BsSun} from "react-icons/all";


const Modal = () => {
    const {
        isModalOpen,
        closeModal,
        genres,
        filterBooksByGenre,
        showPagination
    } = useGlobalContext();


    return (

        <section className={`${isModalOpen ? "modal-container open" : "modal-container"}`}>


            <button
                className="question-btn"
                onClick={closeModal}
            >
                Ask again!
            </button>

            <Genres
                genres={genres}
                filterBooksByGenre={filterBooksByGenre}
            />
            {!showPagination && <Pages/>}
            <Books/>

        </section>


    )
}

export default Modal;