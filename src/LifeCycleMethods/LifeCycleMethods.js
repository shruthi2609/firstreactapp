import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside DS",props)
        return {msg:props.initialMsg};
    }

   componentDidMount(){
        console.log("did mount")
        this.setState({count:this.state.count+1})//setstate is triggered
    }
   
    render(){
        console.log('inside render')
        return(
            <div>
                <h1>LifeCycleMethods</h1>
                <h2>{this.state.msg}</h2>
                <h3> no of times rendered {this.state.count }</h3>
                <button>view</button>
            </div>
        )
    }
}
export default LifeCycleMethods