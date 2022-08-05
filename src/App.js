import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

import DashBoardFunctional from "./ParamsandLocation/DashBoardFunctional";
import LoginFunctional from "./ParamsandLocation/LoginFunctional";


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<LoginFunctional></LoginFunctional>}></Route>
         <Route path='/dashboard/:username' element={<DashBoardFunctional></DashBoardFunctional>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App