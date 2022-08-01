import React from "react";
class ContactCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {fname,email,phone,id}=this.props.data
        console.log(fname)
        return(
            <div className="col-4" key={id}>
            <div className="card">
            <h1>{fname}</h1>
            <div className="card-body">
                <h3>{email}</h3>
                <p>{phone}</p>
            </div>
            </div>
            </div>

        )
    }
}
export default ContactCard