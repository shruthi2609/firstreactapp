import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            count:0
        }
    }
   /* static getDerivedStateFromProps(props,state){
        console.log("inside DS",props)
        return {msg:props.initialMsg};
    }*/
    shouldComponentUpdate(newProps,newState){
        if(this.state.count===newState.count){
            return false
        }
        else{
            return true
        }
    }
   increment=()=>{
    this.setState({count:this.state.count+1})
   }
   componentDidUpdate(){
    console.log("re render")
   }
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycleMethods</h1>
                <h2>{this.state.msg}</h2>
                <h3> no of times rendered {this.state.count }</h3>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default LifeCycleMethods