import React from 'react';

export default function Title({title}) {
    document.querySelector("title").innerHTML = title;
    return null;
}