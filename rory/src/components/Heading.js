import {useGlobalContext} from "../contex";

const Heading = () => {
    const {setIsModalOpen} = useGlobalContext();
    return (
        <article className="header-text">
            <h1 className="text-heading">Would you like to read like
                <span> Rory Gilmore</span> ?
            </h1>
            <div className="answer-container">
                <button type="submit" className="genre-btn" onClick={setIsModalOpen}>yes
                </button>
                <button type="submit" className="genre-btn" onClick={setIsModalOpen}>no
                </button>
            </div>
        </article>

    )
}

export default Heading;