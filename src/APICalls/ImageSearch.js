import React from "react";
import axios from "axios";
class ImageSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[],
            searchItem:''
        }
    }
  /*  componentDidMount(){
        axios.get('https://api.unsplash.com/search/photos?query=india&client_id=hc8dGe3i3GoWxRg06MgQq0oOXIPcB5oaGoT4BqTMnb4').then((res)=>this.setState({results:res.data.results})).catch((err)=>console.log(err))
    }*/
    handleChange=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=hc8dGe3i3GoWxRg06MgQq0oOXIPcB5oaGoT4BqTMnb4`).then((res)=>this.setState({results:res.data.results})).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
            <h1>Image search</h1>
            <input type='text' onChange={(e)=>this.handleChange(e)}></input>
            <button onClick={(e)=>this.handleSubmit(e)}>search</button>
            {
                this.state.results.map((item)=>(
                    <img src={item.urls.thumb} alt="not found"></img>
                ))
            }
            </div>
        )
    }
}
export default ImageSearch