import Featured from "../../featuredInfo/featuredInfo";
import Chart from "../../charts/Chart";
import { Userdata } from "../../../dummyData";
import WidgetLarge from "../../widgetLarge/WidgetLarge";
import Widgetsm from "../../widgetSmall/Widget";
import "./home.css"
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
//import Sidebar from "../../sidebar/Sidebar";
const Home=()=>{
    
    //fetch data from our api
    const MONTHS=useMemo(()=>
    [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ],[]
    )
    const [userStat, setUserStat]=useState([])
    useEffect(()=>{
const getStats=async()=>{
    try{
const res=await axios.get("/users/stats",{
    headers:{
    token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBjZjNmYTQ3Y2FhMTZkZjdiMmMzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg1OTEyNywiZXhwIjoxNjc3NDYzOTI3fQ.ZtTOIidLlxWlbWUm_3reZ3xpj8qNplhjduhP5KAFek0"
}})
const statList=res.data.sort(function(a, b){
return a._id - b._id;
});
//steno is datakey from chart
statList.map((item)=> setUserStat((prev)=>
[...prev, {steno:MONTHS[item._id - 1],
    "New User":item.total}
])
)
    }catch(err){
console.log(err)
    }
};
getStats();
    }, [MONTHS])
    console.log(userStat)

return(
<>

    <div className="home">
<Featured className="featured"/>
<Chart data={userStat} title="User Analytics" grid datakey="New User"/>
    
    <div className="homewidgets">
<Widgetsm className="widgetsm"/>
<WidgetLarge className="widgetLg"/>
</div>
    </div>
    </>
)
}
export default Home;