import React from 'react'
import {BiHomeHeart, BsBook, AiOutlineComment} from 'react-icons/all'

const navbarContainerLinks = [
    {
        title: "About Project",
        icon: <BiHomeHeart/>,
        url: "/",
        id: 4,
    },
    {
        title: "About Olga Rublova",
        icon: <AiOutlineComment/>,
        url: "/olga",
        id: 1,
    },
    {
        title: "Books",
        icon: <BsBook/>,
        url: "/books",
        id: 3,
    },
]



export default  navbarContainerLinks;