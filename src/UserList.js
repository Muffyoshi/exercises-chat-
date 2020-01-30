import React from 'react'

import styled from 'styled-components'

import UserName from './UserName'

const UserList = ({users, setActiveUser}) => {
    return(
        <List>
            {
                users.map(users => <UserName userName={users} setActiveUser={setActiveUser}></UserName>)                    
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
export default UserList