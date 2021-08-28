import React from 'react'
import styled from 'styled-components'

const ListColumns = () => {
    return (
        <Wrapper>
            <div className="content">
                <h5>cover</h5>
                <h5>author</h5>
                <h5>book title</h5>
                <h5>genre</h5>
                <h5>number of pages</h5>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

  .content {
    display: grid;
    grid-template-columns: 250px 1fr 1fr 1fr 1fr auto;
    justify-items: center;
    align-items: center;
    column-gap: 1rem;
    background: var(--clr-btn);
    height:3rem;
    margin: 1rem 0;
    padding: 0 2rem;

    text-transform: capitalize;
    
  }

`

export default ListColumns
