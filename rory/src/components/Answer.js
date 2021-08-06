import Books from "./Books";
import {useGlobalContext} from "../contex";


const Answer = () => {
const {answer} = useGlobalContext();
    return (
        answer && <section>
            <article className="section-text">
                <div className="section-text__header">Great!</div>
                <div className="section-text__sub">Pick your gender!</div>
            </article>

            <Books/>
        </section>

    )
}

export default Answer;