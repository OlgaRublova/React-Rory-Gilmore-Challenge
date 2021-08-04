import {BsSun, BsMoon} from "react-icons/all";

const Gallery = ({urls, toggleTheme, theme}) => {


    return (
        <main>
            <nav>
                <div className="nav-center">
                    <button className="theme"
                            onClick={toggleTheme}
                    >
                        {(theme === "light-theme") ? <BsMoon/> : <BsSun/>}
                    </button>
                </div>
            </nav>
            <section className="header-img-box">
                {urls.map((url, index) => {
                    return <img key={index} src={url} alt='Rory is reading'/>
                })}
            </section>
        </main>

    )
}


export default Gallery;
