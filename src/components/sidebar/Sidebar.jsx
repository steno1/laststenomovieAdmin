import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
 import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
 import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
 import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
 import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
  import  BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; 
  import  MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
  import  DynamicFeedOutlinedIcon  from '@mui/icons-material/DynamicFeedOutlined';
  import  ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
  import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
  import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import {Link} from "react-router-dom"
import { useState } from "react";
import {UilBars} from "@iconscout/react-unicons";
import{motion} from "framer-motion"

import "./sidebar.css"
const Sidebar=()=>{
    const [expanded, setExpanded]=useState(false);
    const sidebarVariants={
        true:{
            left:"0",
        },
        false:{
            left:"-70%"
        }
    } 
    return(
        <>
        <div className="all">
        {/* UilBar not inside sidebar*/}
        <div className="bars" 
       style={expanded?{left:"60%"}:{left:"0%"}}
        onClick={()=>setExpanded(!expanded)}>
          <UilBars className="bar"/>  
        </div>
        <motion.div className="sidebar"
         variants={sidebarVariants}
        animate={window.innerWidth<=950?`${expanded}`:""}
        >
        <div className="sidebarWrapper">
<div className="sidebarMenu">
<h1 className="sidebarTitle"> DashBoard</h1>
<ul className="sidebarList">
<Link to="/" className='link'>
<li className='sidebarListItem active'>
<LineStyleOutlinedIcon className="sidebarIcon"/>
Home
</li>
</Link>
<li className='sidebarListItem'>
<TimelineOutlinedIcon className="sidebarIcon"/>
Analytics
</li>
<li className='sidebarListItem'>

<TrendingUpOutlinedIcon className="sidebarIcon"/>
 Sales
 </li>

</ul>
</div>


<div className="sidebarMenu">
<h3 className="sidebarTitle"> Quick Menu</h3>
<ul className="sidebarList">
<Link to="/users" className='link'>
<li className='sidebarListItem '>
<PermIdentityOutlinedIcon className="sidebarIcon"/>
Users
</li>
</Link>

<Link to="/products" className='link'>
<li className='sidebarListItem'>
<StorefrontOutlinedIcon className="sidebarIcon"/>
 Products
 </li>
</Link>

 <li className='sidebarListItem'>
<AttachMoneyOutlinedIcon className="sidebarIcon"/>
 Transactions
 </li>
 <li className='sidebarListItem'>
<BarChartOutlinedIcon className="sidebarIcon"/>
 Report
 </li>
</ul>
</div>


<div className="sidebarMenu">
<h3 className="sidebarTitle">Notification</h3>
<ul className="sidebarList">
<li className='sidebarListItem '>

<MailOutlineOutlinedIcon className="sidebarIcon"/>
Mail
</li>

<li className='sidebarListItem'>

<DynamicFeedOutlinedIcon className="sidebarIcon"/>
 Feedback</li>
 <li>
 <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
 Messages</li>

</ul>
</div>

<div className="sidebarMenu">
<h3 className="sidebarTitle"> Staff</h3>
<ul className="sidebarList">
<li className='sidebarListItem '>
<WorkOutlineOutlinedIcon className="sidebarIcon"/>Manage</li>
<li className='sidebarListItem'>
<TimelineOutlinedIcon className="sidebarIcon"/>
Analytics
</li>
<li className='sidebarListItem'>
<ReportGmailerrorredOutlinedIcon className="sidebarIcon"/>
 Reports
 </li>

</ul>
</div>

        </div>
        </motion.div>
        </div>
        </>

    )
}
export default Sidebar