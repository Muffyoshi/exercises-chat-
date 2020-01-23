import React, { useState } from 'react'

import styled from 'styled-components'

import RoomName from './RoomName'

const RoomList = ({rooms, setActiveRoom}) => {
    return(
        <List>
            {
                rooms.map(rooms => <RoomName roomName={rooms} setActiveRoom={setActiveRoom}></RoomName>)                    
            }
        </List>
    )
}

const List = styled.ul`
    /* margin: 150px 0 0 0; */
    margin: 0;
    padding: 30px 0 30px 30px;
    list-style: none;
`
export default RoomList