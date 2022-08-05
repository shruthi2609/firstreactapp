import React from "react"
class DashBoardClass extends React.Component{
constructor(props)
{
    super(props)
}
render(){
    return(
        <div>
            <h1>Welcome ! {this.props.paramsdata.username}</h1>
        </div>
    )
}
}
export default DashBoardClass