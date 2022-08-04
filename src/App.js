import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import LeaderBoard from "./ScoreDashBoard/LeaderBoard";
import SortName from "./ScoreDashBoard/SortName";
function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
          <Route path='/name'element={<SortName></SortName>}></Route>
          <Route path='/age'></Route>
          <Route path='/rank'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App