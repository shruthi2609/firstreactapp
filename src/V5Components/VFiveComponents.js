import { useState } from "react"
import { Prompt, Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
export function HomePage(){
    return(
        <div>
            <Prompt when={true} message={(location)=>`are you sure you want to redirect to ${location.pathname}`}></Prompt>
            <h1>Home Page</h1>
        </div>
    )
}

export function DashBoard(){
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
export  function Login(){
    const history=useHistory()
    const handleLogin=()=>{
        history.push('/dashboard')
    }
    return(
        <div>
        <input type='text'></input>
        <button onClick={handleLogin}>login</button>
        </div>
    )
}