const Signup = () => {
    return ( 
     <div className="Signup">
          <div>
                <label htmlFor="">Name:</label>
                <input type="text" />
          </div>
          <div>
                <label htmlFor="">Email:</label>
                <input type="email" />
          </div>
          <div>
                <label htmlFor="">Password:</label>
                <input type="password" />
          </div>
          <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" />
          </div>
          <div>
              <button>Sign Up</button>
          </div>        
     </div>
     );
}
 
export default Signup;