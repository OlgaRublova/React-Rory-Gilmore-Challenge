import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import React from "react"
import ButtonComponent from "../components/button/button.component";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <section>
                <h1>404</h1>
                <h3>Sorry, the page you tried to reach cannot be found</h3>
                <ButtonComponent buttonType="reverse" onClick = {()=> navigate("home")}>back home </ButtonComponent>
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  section{
    text-align: center;
    margin: 10rem 35%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
