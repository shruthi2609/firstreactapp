import React from "react";
import { BrowserRouter, Switch ,Route,NavLink} from "react-router-dom";
import { DashBoard, HomePage, Login } from "./V5Components/VFiveComponents";
import './App.css'
function App(){
  return(
    <div>
     <BrowserRouter>
     <div>
      <NavLink to='/home' activeClassName="active-link">Home</NavLink>
      <NavLink to='/dashboard' activeClassName="active-link">Dashboard</NavLink>
      <NavLink to='/login' activeClassName="active-link">Login</NavLink>
      </div>
     
    
     
      <Switch>
        <Route path='/home'> <HomePage></HomePage></Route>
        <Route path='/dashboard'> <DashBoard></DashBoard></Route>
        <Route path='/login'> <Login></Login></Route>

      </Switch>

     </BrowserRouter>
    </div>
  )
}
export default App