import { useEffect } from "react";
import Signup from "./components/Signup/Signup";
import {Routes,Route} from "react-router-dom";
import Dashbord from"./components/Dashbord/Dashbord";
import PrivateRoute from "./components/router/privateRoute";
import { current } from "./components/JS/actions/user";


import "./App.css";
import { useDispatch } from "react-redux";
function App() {
    
  const dispatch = useDispatch();
  useEffect(() => {
  //dispatch (current());
  }, [])
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        
        <Route exact path ="/" element ={<Signup/>}/>
        <Route  path ="/Dashbord" element={ <Dashbord/>}/>


      </Routes>
  
    </div>
  );
}

export default App;
