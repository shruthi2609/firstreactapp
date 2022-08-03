import React from "react"
import axios from 'axios'
class CRUDOps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            statusText:''
        }
    }
   componentDidMount=()=>{
      axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    createUser=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/empDetail',{
            fname:'karan',
            email:'karan@gmail.com',
            phone:289828
        }).then((res)=>this.setState({statusText:"created user successfully"})).catch((err)=>this.setState({statusText:'An Error Occured '}))
    }
    deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3001/empDetails/${itemid}`).then((res)=>this.setState({statusText:"deleted"})).catch((err)=>console.log(err))
        axios.get('http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    updateUser=(e,itemid)=>{
        axios.patch(`http://localhost:3001/empDetails/${itemid}`,{
            fname:'Peter'
        }).then((res)=>this.setState({statusText:"updated"})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                <h1>API Calls</h1>
               <button onClick={(e)=>this.createUser(e)}>create</button>
               <button onClick={(e)=>this.updateUser(e,1658726368524)}>update</button>
               
               <h3>{this.state.statusText}</h3>
                {
                    this.state.results.map((item)=>(
                        <div>
                            <h2>{item.fname}</h2>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <button onClick={(e)=>this.deleteUser(e,item.id)}>delete</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CRUDOps

