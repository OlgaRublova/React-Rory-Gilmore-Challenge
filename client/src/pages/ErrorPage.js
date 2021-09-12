import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
    return (
        <Wrapper className="page-100">
            <section>
                <h1>404</h1>
                <h3>Sorry, the page you tried to reach cannot be found</h3>
                <Link to="/" className="btn-primary"> back home </Link>
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  text-align: center;
  margin: 10rem auto;

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
