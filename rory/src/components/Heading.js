import {useGlobalContext} from "../contex";

const Heading = () => {
    const {setAnswer} = useGlobalContext();
    return (
        <article className="header-text">
            <h1 className="text-heading">Would you like to read like
                <span> Rory Gilmore</span> ?
            </h1>
            <div className="answer-container">
                <button type="submit" className="genre-btn" onClick={() => {
                    setAnswer(true)
                }}>yes
                </button>
                <button type="submit" className="genre-btn" onClick={() => {
                    setAnswer(false)
                }}>no
                </button>
            </div>
        </article>

    )
}

export default Heading;