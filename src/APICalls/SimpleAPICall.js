import React from "react"
class SimpleAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    callAPI=(e)=>{
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{return res.json()}).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                <h1>API Calls</h1>
                <button onClick={(e)=>this.callAPI(e)}>call api</button>
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
export default SimpleAPICall