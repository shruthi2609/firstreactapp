import React from "react";
class SignInComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form>
                 Username:<input type='text'></input>
                 Password:<input type='text'></input>
                 <button onClick={this.props.toggleFun}>signin</button>
                </form>
            </div>
        )
    }
}
export default SignInComponent