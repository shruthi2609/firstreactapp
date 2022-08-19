import React from 'react'
class CreatingRefWithCB extends React.Component{
    constructor(props){
        super(props)
    }
    handleClick=(e)=>{
        e.preventDefault()
        console.log(this.someref.value)
    }
    render(){
        return(
            <div>
                <form>
                   Enter something: <input type='text' ref={(element)=>this.someref=element}></input>
                   <button onClick={(e)=>this.handleClick(e)}>ok</button>
                </form>
            </div>

        )
    }
}
export default CreatingRefWithCB