import React from 'react'
import HeaderNavProfile from './HeaderNavigation/HeaderNavProfile'
import { Profile } from '../../models/profile'

const HeaderNavigation = () => {
    return (
        <div className="header_navi">
            <div className="notifications"></div>
            <div className="tasks"></div>
            <div className="user">
                {Profile.map((profile_, i) => (
                    <HeaderNavProfile key={i} name={profile_.name} surname={profile_.surname}/>
                ))
                }
            </div>
        </div>
    )
}

export default HeaderNavigation
