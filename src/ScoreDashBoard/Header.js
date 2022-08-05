import React from "react";
import './Header.css'
import {Link, NavLink} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:false,
            age:false,
            rank:false,
            score:false
        }
    }
    componentDidMount(){
        if(this.props.value===1){
            this.setState({fname:true})
        }
        if(this.props.value===2){
            this.setState({age:true})
        }
        if(this.props.value===3){
            this.setState({rank:true})
        }
        if(this.props.value===4){
            this.setState({score:true})
        }
    }
    render(){
        const {fname,age,rank,score}=this.state
     
        return(
            <div>
                <Link to='/rank'><button className={rank?'btn-primary':'btn-secondary'}>Rank</button></Link>
                <Link to='/name'><button className={fname?'btn-primary':'btn-secondary'}>Name</button></Link>
                <Link to='/age'><button className={age?'btn-primary':'btn-secondary'}>Age</button></Link>
            <Link to='/score'><button className={score?'btn-primary':'btn-secondary'}>Score</button></Link>
               
            </div>
        )
    }
}
export default Header