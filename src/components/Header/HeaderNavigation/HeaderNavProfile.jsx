import React from 'react';

const HeaderNavProfile = (props) => {
    return (
        <div>
            <img src="" alt="profile picture" className="imgCircle"></img>
            <h3 className="profileName">
                {props.name} {props.surname}
            </h3>
        </div>
    )
}

export default HeaderNavProfile
