import React from 'react'

const UserName = ({ userName, setActiveUser}) => {

    return(
        <li>
            <button 
                onClick={() =>
                    setActiveUser(userName)
                }
            >
            {userName}</button>
        </li>
    )
}

export default  UserName