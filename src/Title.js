import React from 'react'

import styled from 'styled-components'

const Title = () => {
    return(
        <TitleBox>
            <TitleDesc>Muff's Chat</TitleDesc>
        </TitleBox>
    )
}

const TitleBox = styled.div`
    margin: 0;
    width: 100%;
    height: 100px;
    /* position: fixed; */
    background-color: #99ff99;
    z-index: 10;
`
const TitleDesc = styled.h1`
    margin: 0;
    line-height: 100px; 
    text-align: center;
`

export default Title