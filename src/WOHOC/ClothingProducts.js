import React from "react";
class ClothingProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
        this.setState({result:data}) 
    }
    render(){
        return(
        <div>
        <form>
            <input type='text' placeholder="enter product name" onChange={(e)=>this.handleChange(e)}></input>
            <button onClick={(e)=>this.handleSearch(e)}>search</button>
        </form>
        {
                    this.state.result.map((item)=>(
                        <div>
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                        </div>
                    ))
                }
        </div>)

    }
}
export default ClothingProducts