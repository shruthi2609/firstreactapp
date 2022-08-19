import React from 'react'
class SampleRefComponent extends React.Component{
    constructor(props){
        super(props)
        this.fnameinput=React.createRef()
        this.passwordinput=React.createRef()
        this.state={
           loginStatus:false
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       /* console.log(this.fnameinput)
        console.log(this.passwordinput)*/
        let arg1=this.fnameinput.current.value
        let arg2=this.passwordinput.current.value
        this.handleLogin(arg1,arg2)
    }
    handleLogin=(username,password)=>{
        if(username==="admin"&&password==="admin"){
            this.setState({loginStatus:true})
        }
    }
    render(){
        return(
            <div>
                <h1>Ref examples</h1>
                {
                    this.state.loginStatus?<h1>Dashboard</h1>: <form onSubmit={(e)=>this.handleSubmit(e)}>
                    Username:<input type='text' ref={this.fnameinput}></input>
                    Password:<input type='text' ref={this.passwordinput}></input>
                 <input type='submit'></input>
                 </form>
                }
               
            </div>
        )
    }
}
export default SampleRefComponent