import Featured from "../../featuredInfo/featuredInfo";
import Chart from "../../charts/Chart";
import { Userdata } from "../../../dummyData";
import "./home.css"
const Home=()=>{
return(
<>
    <div className="home">
<Featured/>
<Chart data={Userdata} title="User Analytics" grid datakey="Active User"/>
    </div>
    <div className="homewidgets">
home widget
    </div>
    </>
)
}
export default Home;