import React from "react";
import response from "./response";
import "./LeaderBoard.css"
import Header from "./Header";
class LeaderBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.setState({data:response.list})
    }
    render(){
        return(
            <div>
                <Header></Header>
                <h2>Data in no specific order</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item)=>(
                                    <tr>
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
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
export default LeaderBoard