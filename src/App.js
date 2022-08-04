import TaskManager from "./TaskManager/TaskManager";
import data from "./TaskManager/TaskManagerData";
function App(){
  return(
    <div>
      <TaskManager data={data}></TaskManager>
   
    </div>
  )
}
export default App;