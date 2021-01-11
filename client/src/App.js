import React, {useEffect, createContext, useReducer, useContext} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import Profile from "./components/screens/Profile";
import Homepage from "./components/screens/Homepage";
import CreatePost from "./components/screens/CreatePost"
import "./App.css";
import {reducer, initialState} from './reducers/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const{state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    //console.log(typeof(user), user)
    if(user){
      dispatch({type:"USER", payload:user})
      history.push('/')
    }else{
      history.push('/Homepage')
    }
  },[])
  return(
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Login">     
          <Login />
        </Route>

        <Route path="/Signup">
          <Signup />
        </Route> 

        <Route path="/Profile">
          <Profile/>
        </Route>  

        <Route path="/Homepage">
          <Homepage/>
        </Route>

        <Route path="/CreatePost">
          <CreatePost/>
        </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Navbar/> 

      <Routing/>  
      
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
 