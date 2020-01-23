import React from 'react'

import styled from 'styled-components'

const Content = ({content, index, postUser}) => {
    return (
        <ContentArea>
            <Img>{postUser[index]}</Img>
            <Desc>{content}</Desc>
        </ContentArea>
    )
}

const ContentArea = styled.div`
    padding: 30px 30px 0 30px;
    display: flex;
`

const Img = styled.div`
    width: 120px;
    min-width: 120px;
    height: 120px;
    background-color: #bbbbbb;
`
const Desc = styled.p`
    margin: 0 0 0 20px;
    background-color: #ffffff;
`

export default Content