/** how to create state */
import React from "react";
import DashBoardComponent from "./DependentComponents/DashBoardComponent";
import SignInComponent from "./DependentComponents/SignInComponent";
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLoggedIn:true,
           userData:{
            username:"john",
            country:"IND",
            pincode:632007,
            interest:"React JS"
           }
        
        } 
    }
    
    toggleUser=()=>{
        console.log("toggle hit")
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }
    render(){
       console.log("render")
        return(
            <div>
               {
                this.state.isLoggedIn?<>
                <DashBoardComponent data={this.state.userData} toggleFun={this.toggleUser}></DashBoardComponent>
                </>:<>
                <SignInComponent toggleFun={this.toggleUser}></SignInComponent>
                </>
               } 
            </div>
        )
    }
}
export default RootComponent

