/** how to create state */
import React from "react";
class SimpleStateComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"peter",
            age:19
        } 
     /*   this.updateName=this.updateName.bind(this)
     lower version of react binds every event with the function like this*/
    }
    updateName=()=>{
      this.setState({fname:"pete"})
      console.log("updated",this.state.fname)
    }
    render(){
       console.log("render")
        return(
            <div>
                <h1>Creating State</h1>
                <h3>{this.state.fname}</h3>
                <button onClick={this.updateName}>update</button>
            </div>
        )
    }
}
export default SimpleStateComponent

