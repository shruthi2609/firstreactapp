import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
import TableData from "./TableData";
class SortRank extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       const sorteddata=[...response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
      this.setState({data:sorteddata})
    }
    render(){
        return(
            <div>
                <Header value={3}></Header>
                <h2>Sorted based on Rank</h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )

    }
}
export default SortRank