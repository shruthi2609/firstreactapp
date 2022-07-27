import React from "react";
class SimpleComponent extends React.Component{
constructor(props){
super(props) //initalization of props 
}
render(){
   const {tech}=this.props

    return(
        <div>
         <h1>Introduction :{tech}</h1>
         <p>React JS: declarative library in JS</p>
        </div>
    )
}
}
export default SimpleComponent

