import React from "react";
import {Link,useHistory} from "react-router-dom";

const Login = () => {
  const Signup = () => {
    const history = createBrowserHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  
    const PostData = ()=>{
      
      fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          email,
        }),
      }).then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Enter all the fields!!!!");
        }
        else{
          console.log("Saved successfully.");
          history.push("/");
        }
    
 }).catch(err=>{
     console.log(err)
 })
}
  return (
    
    <div className="main_div">
      <div className="box">
        <h1>Login</h1>
        <form>
          <div className="inputBox">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
              autoComplete="off"
              required
            ></input>
            <label>password</label>
          </div>

          <input type="submit" value="Login"></input>

          <div>
            <Link to="/" className="login-link">
              Forgot Password?
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/*<div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo-form">NeXart</h2>
        <div className="input-box">
          <input type="text" placeholder="email" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" />
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Login
        </button>
        <div>
          <Link>Forgot Password?</Link>
        </div>
        <div>
          <Link to="/Signup"> Create an account</Link>
        </div>
      </div>
    </div>
    */