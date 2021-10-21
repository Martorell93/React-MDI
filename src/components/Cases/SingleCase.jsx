import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faSlash, faThumbtack, faVolumeUp } from '@fortawesome/free-solid-svg-icons'


// const SingleCase = ({ title }) => {
const SingleCase = (props) => {
    const mutedButtonClass = [
        "button",
        props.muted ? "muted" : "",
    ]
    const pinnedButtonClass = [
        "button",
        props.pinned ? "pinned" : ""
    ]
    const caseClass = [
        "case container_spaceB",
        props.muted ? "muted" : "",
        props.pinned ? "pinned" : ""
    ]

    return (
        <div className={caseClass.join(" ")}>
            <div className="case_left">
                {
                    props.category ?
                        <div className={props.category}>
                            <FontAwesomeIcon icon={faCircle} className='category_dots'/>
                        </div>
                        : null
                }
                <p className="title">{props.title}</p>
            </div>
            <div className="case_right">
                <div className={mutedButtonClass.join(" ")}>
                    {
                        props.muted ?
                        <div className="muted_true">
                            <FontAwesomeIcon icon={faVolumeUp} className='icon_muted'/>
                            <FontAwesomeIcon icon={faSlash} className='slash slash_muted'/>
                        </div>
                        :
                        <div className="muted_false">
                            <FontAwesomeIcon icon={faVolumeUp} className='icon_no_muted'/>
                            <FontAwesomeIcon icon={faSlash} className='slash slash_no_muted'/>
                        </div>
                        
                    }
                </div>
                <div className={pinnedButtonClass.join(" ")}>
                    {
                        props.pinned ?
                        <FontAwesomeIcon icon={faThumbtack} className='thumbtack icon_pinned'/>
                        :
                        <FontAwesomeIcon icon={faThumbtack} className='thumbtack icon_no_pinned'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleCase
