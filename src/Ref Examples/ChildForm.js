import React from 'react'
class ChildForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                Username:<input type='text' ref={this.props.myref}></input>
                Password:<input type='text'></input>
            </div>
        )
    }
   
}
export default ChildForm