import React from "react"
import axios from 'axios'
class LCMAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
   componentDidMount=()=>{
      /*  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))*/
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))

    }
    render(){
        return(
            <div>
                <h1>API Calls</h1>
               
                {
                    this.state.results.map((item)=>(
                        <div>
                            <h2>{item.username}</h2>
                            <p>{item.email}</p>
                            <p>{item.address.city}</p>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default LCMAPICall