import React from "react";
class StylingWithRef extends React.Component{
    constructor(props){
        super(props)
        this.headingref=React.createRef()
        this.state={
        }
    }
    handleClick=()=>{
        this.headingref.current.style.backgroundColor='red'
    }
    render(){
        return(
            <div>
                <h1 ref={this.headingref}>Styling</h1>
                <button onClick={this.handleClick}>change</button>
            </div>
        )
    }
}
export default StylingWithRef