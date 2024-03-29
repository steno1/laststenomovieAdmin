
import "./topbar.css"
import React, { useContext } from 'react'
import { Logout } from "../../context/authContext/AuthActions";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AuthContext } from '../../context/authContext/AuthContext';
const Topbar=()=>{
    const {dispatch}=useContext(AuthContext)
    return(
        <div className="topbar">
            <div className="topbarWrapper">
            <div className="topLeft">
<span className="logo">PrinceleyAdmin</span>

            </div>
            <div className="topRight"
            
            >
<div className="topBarIconContainer"
>

<NotificationsOutlinedIcon className="icon"/>
<span className="topIconBag">2</span>
</div>
<div className="topBarIconContainer">

<LanguageIcon className="icon"/>

</div>
<div className="topBarIconContainer">

<SettingsOutlinedIcon className="icon" />

</div>
<div className="topBarIconContainer">
<img src="data:image/jpeg;base64,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" alt="avatar" className="topAvatar"/>

</div>

<div className="dropdown">
<ArrowDropDownIcon/>
<div className="dropdown-content">
<p onClick={()=>dispatch(Logout())}>Logout</p>
</div>
</div>

 </div>

            </div>
        </div>
    )
}
export default Topbar;