import React from 'react'
import response from './response'
import Header from './Header'
import TableData from './TableData'
class JustSort extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]  
        }
    }
    componentDidMount(){
        if(this.props.value!==1){
            let userkey=this.props.userkey
            console.log(userkey)
            const sorteddata=[...response.list].sort((a,b)=>Number(a.userkey)-Number(b.userkey))
        this.setState({data:sorteddata})
        }
        else{
         const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
         this.setState({data:sorteddata})
        }
        }
    render(){
      
        return(
            <div>
                <Header value={this.props.value}></Header>
                <h2>Sorted based on {this.props.userkey} </h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )
    }
}
export default JustSort