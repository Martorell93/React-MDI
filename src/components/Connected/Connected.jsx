import React from 'react'
import { contacts } from '../../models/contacts'

const Connected = () => {
    return (
        <div className="chats">
            <div className="chats_header">
                <img src="" alt="add chats" className="chats_add" />
            </div>
            <div className="chats_contacts">
                {
                    contacts.map((contacts_, i) => (
                        <div key={i} name={contacts_.name} connected={contacts_.connected}>
                            <img src="" alt="contact image" className="contact_image"></img>
                            <p className="contact_name">{contacts_.name}</p>
                            <p className="conact_connected">{contacts_.connected}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Connected
