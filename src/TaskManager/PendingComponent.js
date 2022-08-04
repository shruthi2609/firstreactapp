import React from "react";
class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const styleBg={
            backgroundColor:"aqua"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#e04c60'
        }
        const {pendingTask,changeCompletion}=this.props
        return(
            <div style={styleBg}>
                <h2>Pending Tasks</h2>
                {
                    pendingTask.map((item)=>(
                        <div style={borderstyle}>
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>mark completed</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default PendingComponent