import React from "react";
import {BrowserRouter,Route,Routes,Link, NavLink} from 'react-router-dom'
import Dashboard from "./NestedRoutes/DashBoard";
import Login from "./NestedRoutes/Login";
import PageNotFound from "./NestedRoutes/PageNotFound";
import UserPage from "./NestedRoutes/UserPage";


function App(){
  return(
    <div>
      <BrowserRouter>
    { /* <NavLink to='/user/login' style={({isActive})=>(
        {color:isActive?'red':'blue'}
      )}>Login
        
      </NavLink>
      <NavLink to='/user/dashboard' style={({isActive})=>(
        {color:isActive?'red':'blue'}
      )}>Dashboard
        
      </NavLink>*/}
      <NavLink to='/user/login'>
      {
        ({isActive})=>(
          <button className={isActive?'btn-primary':'btn-danger'}>login</button>
        )
      }
      </NavLink>
      <NavLink to='/user/dashboard'>
      {
        ({isActive})=>(
          <button className={isActive?'btn-primary':'btn-danger'}>Dashboard</button>
        )
      }
      </NavLink>
        <Routes>
        <Route path='/user' element={<UserPage></UserPage>}>
          <Route  path='login' element={<Login></Login>}>
          </Route>
          <Route  path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App