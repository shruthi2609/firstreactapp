import React from "react";
import _isEqual from 'lodash/isEqual'
class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(_isEqual(nextProps.deletedTask,this.props.deletedTask)){
            return false
        }
        else{
            return true
        }
    }
    render(){
        const styleBg={
            backgroundColor:"aqua"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#e04c60'
        }
        const {deletedTask}=this.props
        return(
            <div style={styleBg}>
                { console.log("bin render")}
                <h2>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div style={borderstyle}>
                            <h3>{item.taskname}</h3>
                            <h4>{item.taskdesc}</h4>
                            <button className='btn btn-primary'>restore</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default BinComponent