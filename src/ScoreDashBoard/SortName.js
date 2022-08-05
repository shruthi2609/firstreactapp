import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
import TableData from "./TableData";
class SortName extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log("did mount")
       const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
       this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={1}></Header>
                <h2>Sorted based on Names</h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )

    }
}
export default SortName