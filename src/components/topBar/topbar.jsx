import React from 'react'
import "./topbar.css"
import logo from '../../assets/1222.PNG'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">IsmoilAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topiconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language />
                    <span className="topiconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings />
                    </div>
                    <img src={logo} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
