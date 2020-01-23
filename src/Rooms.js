import React, { useState } from 'react'

import styled from 'styled-components'

import Content from './Content';
import Post from './Post';

const Rooms = ({roomName, activeRoom, activeUser}) => {

    const [contents, setContets] = useState([])
    const [postUsers, setPostUsers] = useState([])

    const renderRoom = (roomName == activeRoom) ? 'block' : 'none'

    const addContent = (value) => {
        const newContents = [
            ...contents,
            value
        ]
        setContets(newContents)
    }

    const addPostUser = (user) => {
        const newPostUsers = [
            ...postUsers,
            user
        ]
        setPostUsers(newPostUsers)        
    }

    return(
        <Room style = {{display: renderRoom}}>
            <RoomName>{roomName}</RoomName>
            {contents.map((contents, index) => <Content content={contents} index={index} postUser={postUsers}></Content>)}
            <Post addContent={addContent} activeUser={activeUser} addPostUser={addPostUser}/>
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