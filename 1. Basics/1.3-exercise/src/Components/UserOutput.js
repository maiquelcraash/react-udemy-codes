import React from 'react'

const usernameStyle = {
    fontSize:"16px",
    fontWeight:"bold"
}


const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p style={usernameStyle}>{props.user.username}</p>
            <p style={{fontSize:"12px"}}>{props.user.bio}</p>
        </div>
    )
}

export default userOutput;