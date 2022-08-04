import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const styleBg={
            backgroundColor:"#a18602"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#6ecc71'
        }
        const {completedTask,changeCompletion,deleteTask}=this.props
        return(
            <div>
                <h2>Completed Tasks</h2>
                {
                    completedTask.map((item)=>(
                        <div style={borderstyle}>
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary'onClick={()=>deleteTask(item.id)}>move to trash</button>
                            <button  className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>mark incomplete</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CompletedComponent