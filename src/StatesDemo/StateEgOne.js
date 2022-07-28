/** how to create state */
import React from "react";
class StateEgOne extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLoggedIn:true,
           username:"peter"
        } 
    }
    switchtoLogout=()=>{
        this.setState({isLoggedIn:false})
    }
    switchLogin=()=>{
        this.setState({isLoggedIn:true})
    }
    toggleUser=()=>{
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }
    render(){
       console.log("render")
        return(
            <div>
               {
                this.state.isLoggedIn?<>
                <h2>Welcome {this.state.username}</h2>
                <button onClick={this.toggleUser}>Logout</button>
                </>:<>
                <h2>Please Sign In to continue...</h2>
                <button onClick={this.toggleUser}>Login</button>
                </>
               } 
            </div>
        )
    }
}
export default StateEgOne

