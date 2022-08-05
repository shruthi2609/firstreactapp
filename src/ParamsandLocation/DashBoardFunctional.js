import { useParams } from "react-router-dom";
import DashBoardClass from "./DashBoardClass";
function DashBoardFunctional(){
   
    return(
        <div>
        <DashBoardClass paramsdata={useParams()}></DashBoardClass>
        </div>
    )
}
export default DashBoardFunctional