
import React from "react"
class ContactManagerComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"",
            ipEmail:"",
            ipAddress:""
        }
    }
    
   handleUsername=(e)=>{
        this.setState({ipUser:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({ipEmail:e.target.value})
    }
    handlePhone=(e)=>{
        this.setState({ipPhone:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({ipAddress:e.target.value})
    }
    
    handleContact=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            address:this.state.ipAddress
        }
        let newData=[...this.state.contactinfo,obj]
        this.setState({contactinfo:newData})   
    }
    render(){
        console.log(this.state.contactinfo)
        return(
            <div>
                <form>
                Username:<input type='text' onChange={(e)=>this.handleUsername(e)}></input>
                Phone:<input type='text' onChange={(e)=>this.handlePhone(e)}></input>
                Email:<input type='text' onChange={(e)=>this.handleEmail(e)}></input>
                Address:<input type='text' onChange={(e)=>this.handleAddress(e)}></input>
                <button onClick={(e)=>this.handleContact(e)}>add contact</button>
                </form>
            All Contacts:
            {
                this.state.contactinfo.map((item)=>(
                    <div>
                        <h2>{item.fname}</h2>
                        <h3>{item.phone} {item.email}</h3>
                        <p>{item.address}</p>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default ContactManagerComp