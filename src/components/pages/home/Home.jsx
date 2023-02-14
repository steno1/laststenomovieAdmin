import Featured from "../../featuredInfo/featuredInfo";
import Chart from "../../charts/Chart";
import { Userdata } from "../../../dummyData";
import WidgetLarge from "../../widgetLarge/WidgetLarge";
import Widgetsm from "../../widgetSmall/Widget";
import "./home.css"
//import Sidebar from "../../sidebar/Sidebar";
const Home=()=>{
return(
<>

    <div className="home">
<Featured className="featured"/>
<Chart data={Userdata} title="User Analytics" grid datakey="Active User"/>
    
    <div className="homewidgets">
<Widgetsm className="widgetsm"/>
<WidgetLarge className="widgetLg"/>
</div>
    </div>
    </>
)
}
export default Home;