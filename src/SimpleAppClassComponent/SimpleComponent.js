import React from "react";
import PropTypes from 'prop-types'
class SimpleComponent extends React.Component{
constructor(props){
super(props) //initalization of props 
}
render(){
   const {tech,projects}=this.props

    return(
        <div>
         <h1>Introduction :{tech}</h1>
         <p>React JS: declarative library in JS</p>
        </div>
    )
}
}
SimpleComponent.propTypes={
    tech:PropTypes.array,
    projects:PropTypes.array
}
export default SimpleComponent

