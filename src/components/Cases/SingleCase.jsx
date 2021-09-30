import React from 'react'


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
        "case",
        props.muted ? "muted" : "",
        props.pinned ? "pinned" : ""
    ]

    return (
        <div className={caseClass.join(" ")}>
            <div className="case_left">
                {
                    props.category ?
                        <div className="category">
                            {props.category}
                        </div>
                        : null
                }
                <p className="title">{props.title}</p>
            </div>
            <div className="case_right">
                <div className={mutedButtonClass.join(" ")}>Muted</div>
                <div className={pinnedButtonClass.join(" ")}>Pinned</div>
            </div>
        </div>
    )
}

export default SingleCase
