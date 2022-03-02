const Login = () => {
    return ( 
        <div className="Login">
            <form action="">
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" />
                </div>
                <div>
                    <button>Log In</button>
                </div>        
            </form>
        </div>
     );
}
 
export default Login;