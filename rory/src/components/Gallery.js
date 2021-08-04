
const Gallery = ({urls}) => {
    return (
        <section className="header-img-box">
            {urls.map((url, index) => {
                return <img key={index} src={url} alt='Rory is reading'/>
            })}
        </section>
    )
}


export default Gallery;
