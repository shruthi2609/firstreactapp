import React from "react";
class ClassComponentDemo extends React.Component{
constructor(props){
super(props) //initalization of props 
}
render(){
   const {data}=this.props
   console.log("child",data)
    return(
        <div>
          {  data.map((item)=>(
                <div>
                    <h1>{item.fname}</h1>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}
}

export default ClassComponentDemo