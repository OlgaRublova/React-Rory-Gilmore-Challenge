import React, {useEffect, useRef, useState} from "react";


const ImageColorOnScroll = ({title, cover}) => {
    const bookRef = useRef(null);

    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const isInView = () => {
        const rect = bookRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const scrollHandler = () => {
        setInView(isInView());
    }

    useEffect(() => {
        setIsLoading(false)

        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }

    }, [])


    return(
        <img
            src={cover}
            alt={title}
            ref={bookRef}
            className={isLoading ? null : inView ? "book-img" : "book-img-shadow"}
        />
    )
}

export default ImageColorOnScroll;