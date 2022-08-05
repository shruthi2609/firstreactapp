import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
import TableData from "./TableData";
class SortAge extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       const sorteddata=[...response.list].sort((a,b)=>Number(a.age)-Number(b.age))
      this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={2}></Header>
                <h2>Sorted based on Age</h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )

    }
}
export default SortAge