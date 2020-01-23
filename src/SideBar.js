import React from 'react'

import styled from 'styled-components'

import RoomList from './RoomList'
import UserList from './UserList'

const SideBar = ({rooms, setActiveRoom, users, setActiveUser}) => {
    return(
        <SideBarBox>
            <RoomList rooms={rooms} setActiveRoom={setActiveRoom}/>
            <UserList users={users} setActiveUser={setActiveUser}/>
        </SideBarBox>
    )
}

const SideBarBox = styled.div`
    width: 200px;
    /* height: calc(100vh - 150px); */
    position: absolute;
    /* position: fixed; */
    background-color: #ff9999;
`

export default SideBar