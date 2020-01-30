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


    const [contentsList,setConstentsList] = useState([{
        id: 1,
        user:'まふらー',
        content:'はじめだよ。',
        room:'Room A'
    },{
        id: 2,
        user:'他の人',
        content:'はじめだよ。',
        room:'Room B'
    }])

    return(
        <>
            <Title/>
            <SideBar rooms={rooms} setActiveRoom={setActiveRoom} users={users} setActiveUser={setActiveUser}/>
            <Rooms activeRoom={activeRoom} activeUser={activeUser} contentsList={contentsList} setConstentsList={setConstentsList}/>
        </>
    )
}

export default App