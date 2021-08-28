import Books from "../pages/Books";
import Genres from "./Genres";
import Pages from "./Pages";
import Sort from "./Sort"
import {useFilterContext} from "../context/filter_context";

const Modal = () => {

    const {genres, filterBooksByGenre} = useFilterContext();


    return (

        <section >
            <Genres genres={genres} filterBooksByGenre={filterBooksByGenre}/>
            <Pages/>
            <Sort/>
            <Books/>

        </section>
    )
}

export default Modal;