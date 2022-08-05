import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Dashboard from "./NestedRoutes/DashBoard";
import Login from "./NestedRoutes/Login";
import UserPage from "./NestedRoutes/UserPage";


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/user' element={<UserPage></UserPage>}>
          <Route path='login' element={<Login></Login>}>
          </Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App