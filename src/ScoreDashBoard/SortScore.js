import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
import TableData from "./TableData";
class SortScore extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log('did mount of component')
       const sorteddata=[...response.list].sort((a,b)=>Number(a.points)-Number(b.points))
      this.setState({data:sorteddata})
    }
    render(){
        console.log("render of comp")
        return(
            <div>
                <Header value={4}></Header>
                <h2>Sorted based on Rank</h2>
                <TableData tabledata={this.state.data}></TableData>
               
            </div>
        )

    }
}
export default SortScore