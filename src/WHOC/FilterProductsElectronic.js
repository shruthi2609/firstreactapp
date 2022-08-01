import React from "react";
import hocComponent from "./hocComponent";
class FilterProductsElectronic extends React.Component{
render(){
    const {result,handleChange,handleSearch}=this.props
    return(
        <div>
            <h1>Electronic store</h1>
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

export default hocComponent(FilterProductsElectronic)
