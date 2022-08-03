import axios from "axios";
import React from "react";
class BlogSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            blogResults:[],
            searchItem:''
        }
    }
    handleChange=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    callAPI=(e)=>{
        e.preventDefault()
        axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`).then((res)=>{
        console.log(res.data)
        this.setState({blogResults:res.data.hits})}).catch((err)=>console.log(err))
    }
    render(){
        console.log(this.state.searchItem)
        return(
            <div>
                <input type='text' onChange={(e)=>this.handleChange(e)}></input>
                <button onClick={(e)=>this.callAPI(e)}>search</button>
                {
                    this.state.blogResults.map((item)=>(
                        <div>
                            <h1>{item.title}</h1>
                            <h2>{item.author}</h2>
                            <a href={item.url}>Read this post here</a>

                        </div>
                    ))
                }
            </div>
        )
    }
}
export default BlogSearch