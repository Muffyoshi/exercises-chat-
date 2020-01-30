import React, {useState} from 'react'

import styled from 'styled-components'

const Post = ({addContent, activeUser}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) {
            alert('入力して下さい')    
            return
        }

        addContent(value, activeUser)
        
        setValue('')
    }


    return(
        <PostArea onSubmit={handleSubmit}>
            <UserName>{activeUser}</UserName>
            <TextBox
                rows="4"
                onChange={e => {setValue(e.target.value)}}
                value={value} 
            ></TextBox>
            <Submit type="submit" value="送信"></Submit>
        </PostArea>
    )
}

const UserName = styled.p`
    width: 100px;
`

const PostArea = styled.form`
    padding: 30px;
    display: flex;
    align-items: center;

`

const TextBox = styled.textarea`
    width:  calc(100% - 250px);
`
const Submit = styled.input`
    margin-left: 20px;
    padding: 10px 30px;
    border-radius: 5px;
`

export default Post