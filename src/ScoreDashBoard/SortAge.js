import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
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
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.points}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default SortAge