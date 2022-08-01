import React from "react";
import hocComponent from "./hocComponent";
class FilterProductsClothing extends React.Component{
    render(){
       const {result,handleChange,handleSearch,storename}=this.props
        return(
            <div>
            <h1>{storename}</h1>
           <form>
           <input type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        {
                    result.map((item)=>(
                        <div>
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                        </div>
                    ))
                }
        </div>
        )

    }
}
export default hocComponent(FilterProductsClothing)