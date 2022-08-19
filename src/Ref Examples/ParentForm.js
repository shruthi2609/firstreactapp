import React from 'react'
import ChildForm from './ChildForm'
class ParentForm extends React.Component{
    constructor(props){
        super(props)
      
        this.passwordred=React.createRef()
    }
    handleLogin=(e)=>{
        e.preventDefault()
        console.log(this.usernameref.value)
    
    }
    render(){
        return(
            <div>
               <ChildForm myref={(element)=>this.usernameref=element}></ChildForm>
               <button onClick={(e)=>this.handleLogin(e)}>ok</button>
            </div>
        )
    }
   
}
export default ParentForm