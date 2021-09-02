import React from 'react'
import {BiHomeHeart, BsBook, AiOutlineCoffee, AiOutlineComment, BiHeart} from 'react-icons/all'

const links = [
    {
        title: "Home",
        icon: <BiHomeHeart/>,
        url: "/",
        id: 4,
    },
    {
        title: "About Olga",
        icon: <AiOutlineComment/>,
        url: "/olga",
        id: 1,
    },
    {
        title: "About Rory",
        icon: <AiOutlineCoffee/>,
        url: "/rory",
        id: 2,
    },
    {
        title: "Books",
        icon: <BsBook/>,
        url: "/books",
        id: 3,
    },
    {
        title: "Wish List",
        icon: <BiHeart/>,
        url: "/wish-list",
        id: 5,
    },
    // {
    //     title: "Have read",
    //     icon: <RiBook2Line/>,
    //     url: "/read-list",
    //     id: 6,
    // },
    // {
    //     title: "Have liked",
    //     icon: <RiBook2Line/>,
    //     url: "/liked-list",
    //     id: 7,
    // },

]

const length = [
    {
        id: 1,
        size: "XS"
    },
    {
        id: 2,
        size: "S"
    },
    {
        id: 3,
        size: "M"
    },
    {
        id: 4,
        size: "L"
    },
    {
        id: 5,
        size: "XL"
    },
]

//export default {length, links};
export default  links;