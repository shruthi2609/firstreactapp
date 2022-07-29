import React from "react"
class PureCompoEg extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
   increment=()=>{
    this.setState({count:0})
   }
  
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycleMethods</h1> 
                <h3> no of times rendered {this.state.count }</h3>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default PureCompoEg