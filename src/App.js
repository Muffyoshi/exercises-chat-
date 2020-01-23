import React, { useState } from 'react'

import styled from 'styled-components'

import SideBar from './SideBar'
import Title from './Title'
import Rooms from './Rooms'

const App = () => {
    const [rooms, setRooms] = useState([
        'Room A',
        'Room B'
    ])
    const [activeRoom, setActiveRoom] = useState([rooms[0]])

    const [users, setUsers] = useState([
        'まふらー',
        '他の人'
    ])
    const [activeUser, setActiveUser] = useState([users[0]])

    return(
        <>
            <Title/>
            <SideBar rooms={rooms} setActiveRoom={setActiveRoom} users={users} setActiveUser={setActiveUser}/>
            {rooms.map(rooms => <Rooms roomName={rooms} activeRoom={activeRoom} activeUser={activeUser} />)}
        </>
    )
}

export default App