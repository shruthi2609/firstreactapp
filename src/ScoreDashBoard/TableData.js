import React from "react";
class TableData extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        console.log('render of table')
        return(
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
                    this.props.tabledata.map((item)=>(
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
        )
    }
}
export default TableData