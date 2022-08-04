import React from "react";
import {Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:false,
            age:false,
            rank:false
        }
    }
    componentDidMount(){
        if(this.props.value===1){
            this.setState({fname:true})
        }
    }
    render(){
        const {fname,age,rank}=this.state
        return(
            <div>
                <Link to='/rank'><button className={rank?'btn-primary':'btn-secondary'}>Rank</button></Link>
                <Link to='/name'><button className={fname?'btn-primary':'btn-secondary'}>Name</button></Link>
                <Link to='/age'><button className={age?'btn-primary':'btn-secondary'}>Age</button></Link>
            </div>
        )
    }
}
export default Header