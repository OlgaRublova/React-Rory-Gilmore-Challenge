import {BsSun, BsMoon} from "react-icons/all";

const Gallery = ({urls, toggleTheme, theme}) => {

    return (
        <section>
            <div className="nav-center">
                <button className="theme"
                        onClick={toggleTheme}
                >
                    {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
                </button>
            </div>
            <div className="header-img-box">
                {urls.map((url, index) => {
                    return <img key={index} src={url} alt='Rory is reading'/>
                })}
            </div>
        </section>

    )
}


export default Gallery;
