import React from "react"
import {Link} from 'react-router-dom'
class LoginPageClass extends React.Component{
constructor(props)
{
    super(props)
    this.state={
        username:''
    }
}
handleChange=(e)=>{
    this.setState({username:e.target.value})
}
handleLogin=(e)=>{
    e.preventDefault()
    this.props.navigate(`/dashboard/${this.state.username}`)
}
render(){
    return(
        <div>
            Username:<input type='text' onChange={(e)=>this.handleChange(e)}></input>
            Password:<input type='text'></input>
           <button onClick={(e)=>this.handleLogin(e)}>login</button>
        </div>
        
    )
}
}
export default LoginPageClass