function WelcomePage(){
    const username="peter"
    return(
        <>
        <h1>Welcome {username} !</h1>
        <p>Note that the development build is not optimized.
        To create a production build, use npm build</p>
        </>
    )
}

export default WelcomePage