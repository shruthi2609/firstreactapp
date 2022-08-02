import React  from "react";
class DblClickComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:this.props.username,
            toggle:true
        }
    }
    handleToggle=()=>{
        this.setState({toggle:!this.state.toggle})
    }
    handleUsername=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleKey=(e)=>{
        if(e.key==='Enter'){
            this.handleToggle()
        }
    }
    render(){
        return(
        <div>
        {
            this.state.toggle?<div>
            <h3 onDoubleClick={this.handleToggle}>{this.state.fname}</h3>
            </div>:
            <input type='text' value={this.state.fname} onChange={(e)=>this.handleUsername(e)} onKeyDown={(e)=>this.handleKey(e)}></input>
        }
        </div>
        )
    }
}
DblClickComponent.defaultProps={
    username:'XUser'
}
export default DblClickComponent