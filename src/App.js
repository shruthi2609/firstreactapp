import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import LeaderBoard from "./ScoreDashBoard/LeaderBoard";
import SortAge from "./ScoreDashBoard/SortAge";
import SortName from "./ScoreDashBoard/SortName";
import SortRank from "./ScoreDashBoard/SortRank";
import SortScore from "./ScoreDashBoard/SortScore";
function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
          <Route path='/name'element={<SortName></SortName>}></Route>
          <Route path='/age' element={<SortAge></SortAge>}></Route>
          <Route path='/rank' element={<SortRank></SortRank>}></Route>
          <Route path='/score' element={<SortScore></SortScore>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App