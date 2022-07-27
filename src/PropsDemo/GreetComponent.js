function GreetComponent(props){
    const {username,email}=props
    return(
        <div>
            <h1>Hey ! {username} {email}, Welcome Back !</h1>
          { /* <h1>Hey ! {props.username} {props.email}, Welcome Back !</h1>
          using props without desturcting */
          }
        </div>
    )
}
export default GreetComponent