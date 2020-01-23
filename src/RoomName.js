import React from 'react'

const RoomName = ({ roomName, setActiveRoom}) => {

    return(
        <li>
            <button 
                onClick={() =>
                    setActiveRoom(roomName)
                }
            >
            {roomName}</button>
        </li>
    )
}

export default  RoomName