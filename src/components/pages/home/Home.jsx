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
<Featured/>
<Chart data={Userdata} title="User Analytics" grid datakey="Active User"/>
    
    <div className="homewidgets">
<Widgetsm/>
<WidgetLarge/>
</div>
    </div>
    </>
)
}
export default Home;