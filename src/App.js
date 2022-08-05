import React from "react";
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import JustSort from "./ScoreDashBoard/JustSort";
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
          <Route path='/name'element={<JustSort userkey='fname' value={1}></JustSort>}></Route>
          <Route path='/age' element={<JustSort userkey='age' value={2}></JustSort>}></Route>
          <Route path='/rank' element={<JustSort userkey='rank' value={3}></JustSort>}></Route>
          <Route path='/score' element={<SortScore userkey='points' value={4}></SortScore>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App