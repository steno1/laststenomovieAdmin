import "./featuredInfo.css"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
const Featured=()=>{
    return(
        <div className="featured">

<div className="featuredItem">
{/* first container*/}
<span className="featuredTitle">Revenue</span>

<div className="featuredMoneyContainer">
<span className="featuredMoney">$2400</span>
<span className="featuredMoneyRate">-10.5    
<ArrowDownwardOutlinedIcon className="featuredIcon negative"/>
</span>
</div>


<span className="featuredSub">Compared to last month</span>
</div>

<div className="featuredItem">
{/* Second container*/}
<span className="featuredTitle">Sales</span>

<div className="featuredMoneyContainer">
<span className="featuredMoney">$4200</span>
<span className="featuredMoneyRate">-13.5    
<ArrowDownwardOutlinedIcon className="featuredIcon negative"/>
</span>
</div>

<span className="featuredSub">Compared to last month</span>
</div>
{/* Third container*/}
<div className="featuredItem">
<span className="featuredTitle">Cost</span>

<div className="featuredMoneyContainer">
<span className="featuredMoney">$2700</span>
<span className="featuredMoneyRate">2.5     
<ArrowUpwardOutlinedIcon className="featuredIcon "/>
</span>
</div>

<span className="featuredSub">Compared to last month</span>
</div>
        </div>
    )
}
export default Featured;