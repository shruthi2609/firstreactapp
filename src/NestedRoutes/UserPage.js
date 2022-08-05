import { Outlet } from "react-router-dom";

function UserPage(){
    return(
        <div>
            <h1>UserPage</h1>
            <Outlet></Outlet>
        </div>
    )
}
export default UserPage