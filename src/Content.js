import React from 'react'

import styled from 'styled-components'

const Content = ({contentsList, activeRoom}) => {
    if(activeRoom == contentsList.room){
        return (
            <ContentArea>
                <Img>{contentsList.user}</Img>
                <Desc>{contentsList.content}</Desc>
            </ContentArea>
        )
    }else{
        return(<></>)
    }
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