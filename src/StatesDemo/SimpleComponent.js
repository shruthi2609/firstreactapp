/** why states? */
import React from "react";
class SimpleComponent extends React.Component{
    constructor(props){
        super(props)
        this.fname="peter"
    }
    updateFname=()=>{
       this.fname="pete"
       console.log("updated",this.fname)
       
    }
    render(){
        console.log("inside render")
       
        return(
            <div>
                <h1>States Demo</h1>
                <p>{this.fname}</p>
                <button onClick={this.updateFname}>update</button>
            </div>
        )
    }
}
export default SimpleComponent