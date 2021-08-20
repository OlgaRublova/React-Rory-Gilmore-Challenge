import Books from "./Books";
import Genres from "./Genres";
import {useGlobalContext} from "../contex";
import Pages from "./Pages";
import {BsMoon, BsSun} from "react-icons/all";
import Sort from "./Sort"
import {useFilterContext} from "../context/filter_context";

const Modal = () => {
    const {
        isModalOpen,
        closeModal,
        showPagination
    } = useGlobalContext();

    const {genres, filterBooksByGenre} = useFilterContext();



    return (

        <section className={`${isModalOpen ? "modal-container open" : "modal-container"}`}>


            <button
                className="question-btn"
                onClick={closeModal}
            >
                Ask again!
            </button>

            <Genres genres={genres} filterBooksByGenre={filterBooksByGenre}/>
            {/*{!showPagination && <Pages/>}*/}
            <Sort/>

            <Books/>


        </section>


    )
}

export default Modal;