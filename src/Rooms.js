import React from 'react'

import styled from 'styled-components'

import Content from './Content';
import Post from './Post';

const Rooms = ({activeRoom, activeUser, contentsList, setConstentsList}) => {
    
    const addContent = (value, user) => {
        
        const newContent = {
            id: contentsList.length + 1,
            user: user,
            content: value,
            room: activeRoom
        }

        const newContents = [
            ...contentsList,
            newContent
        ]
        
        setConstentsList(newContents)


    }

    return(
        <Room>
            <RoomName>{activeRoom}</RoomName>
            {contentsList.map((contentsList) => <Content contentsList={contentsList} activeRoom={activeRoom}></Content>)}
            <Post addContent={addContent} activeUser={activeUser}/>
        </Room>
    )
}

const Room = styled.div`
    margin-left: auto;
    width: calc(100% - 200px);
    /* height: calc(100vh - 150px); */
    position: relative;
    background-color: #9999ff;
`
const RoomName = styled.h2`
    margin: 0;
    padding: 30px 30px 0 30px;
`

export default Rooms