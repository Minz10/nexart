import React, {useState, useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import {UserContext} from '../../App'
//import M from 'materialize-css';

const Login = () => {
  const {state, dispatch}=useContext(UserContext)
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = (res,req)=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      //M.toast({html: "Invalid email"})
      console.log("invalid email")
      return
    }

    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.error) {
        //M.toast({html: 'Please Enter all the fields'})
        console.log("Enter all the fields!!!!");
      }
      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        dispatch({type:"USER", payload:data.user})
        //M.toast({html:"Signed in successfully"});
        console.log("Signed in successfully.");
        history.push('/Home');
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
              name="email"
              autoComplete="off"
              required
               value={email}
              onChange={(e) => setEmail(e.target.value)}
            > 
            </input>
            <label>email</label>  
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <label>password</label>
          </div>

          <input type="submit" value="Login" onClick={()=>PostData}></input>

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