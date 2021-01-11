import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import M from 'materialize-css';
const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = (res,req)=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid email"})
      console.log("invalid email")
      return
    }

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
        M.toast({html: 'Please Enter all the fields'})
        console.log("Enter all the fields!!!!");
      }
      else{
        M.toast({html: data.message});
        console.log("Saved successfully.");
        history.push('/signin');
      }
     }) .catch(err=>{
       console.log(err)
     })  
  }

  return (
    <div className="main_div">
      <div className="box">
        <h1>Create your account</h1>
        <form>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>email</label>
          </div>

          <div className="inputBox">
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label>username</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label>password</label>
          </div>

          <input type="submit" value="Create" onClick={()=>PostData()}></input>
        </form>
      </div>
    </div>
  );
};

export default Signup;