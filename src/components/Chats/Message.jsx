import React from 'react'

const Message = (props) => {
    return (
        <div className="message">
            <div className="message_header">
                <img src="" alt="profile picture sender" className="message_sender_picture" />
                <p className="message_sender_name">{props.user}</p>
            </div>
            <div className="message_content">
                {props.message}
            </div>
        </div>
    )
}

export default Message
