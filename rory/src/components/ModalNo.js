
import {useGlobalContext} from "../contex";


const Modal = () => {
    const {
        isModalNoOpen,
        closeNoModal,
    } = useGlobalContext();


    return (

        <section className={`${isModalNoOpen ? "modal-container open" : "modal-container"}`}>
            <button
                className="btn-primary"
                onClick={closeNoModal}
            >
                Ask again!
            </button>
            <article className="section-text">
                <div className="section-text__header">OK</div>
                <div className="section-text__sub">Next time then...</div>
            </article>
        </section>
    )
}

export default Modal;