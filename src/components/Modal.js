import Books from "../pages/Books";
import Genres from "./Genres";
import Pages from "./Pages";
import Sort from "./Sort"
import Checkbox from "./Checkbox";

const Modal = () => {

    return (

        <section >
            <Genres/>
            <Pages/>
            <Checkbox/>
            <Sort/>
            <Books/>

        </section>
    )
}

export default Modal;