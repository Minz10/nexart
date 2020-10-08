import React,{useState} from "react";
///import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";



const Signup = () => {
  const history = createBrowserHistory();
  const [name, setName] = useState("");
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
