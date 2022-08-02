import React from 'react'
class LoginFormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            usernameErr:'',
            passwordErr:''
        }
    }
    handleBlurEvent=(e,key)=>{
       if(key==='uname'){
        if(e.target.value){
            this.setState({username:e.target.value})
            this.setState({usernameErr:''})
        }
        else{
            this.setState({usernameErr:'username should be entered'})
        }
       }
       if(key==='pwd'){
        if(e.target.value){
            this.setState({password:e.target.value})
            this.setState({passwordErr:''})
        }
        else{
            this.setState({passwordErr:'password should be entered'})
        }
       }
      
    }

    render(){
        const bgstyle={color:"red"}
        return(
            <form>
            Username:<input type="text" placeholder='enter username' onBlur={(e)=>this.handleBlurEvent(e,'uname')}></input>
            <p style={bgstyle}>{this.state.usernameErr}</p>
            Password:<input type="text" placeholder='enter password' onBlur={(e)=>this.handleBlurEvent(e,'pwd')}></input>
            <p style={bgstyle}>{this.state.passwordErr}</p>
            <button>login</button>
            </form>

        )
    }
}
export default LoginFormComponent