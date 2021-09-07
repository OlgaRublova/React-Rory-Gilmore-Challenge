import React from "react";

import {imageUrls, textUrls} from "../helpers/image-urls";
import styled from 'styled-components'

const Header =()=> {

    return(
        <Wrapper>
            <div className="header-img-box ">
                {
                    imageUrls.map((url, index) => {
                        return <img key={index} src={url} alt='Rory is reading'/>
                    })
                }
            </div>

            <div className="header-text ">
                {
                    textUrls.map((info, index) => <h1 key={index}>{info.text}</h1>)
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .header-img-box {
    width: 100vw;

    position: relative;
    display: grid;
    grid-template-columns: auto 30rem auto;
    grid-template-rows: auto 30rem auto;
    gap: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .header-text {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--clr-bcg);
    outline: 1rem solid var(--clr-bcg);
    outline-offset: 2rem;
    width: 100%;
    max-width: 50rem;
    text-align: center;

    h1 {
      font-size: 3rem;
      padding: 1rem;

    }
  }

`;
export default Header;