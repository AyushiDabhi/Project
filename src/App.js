import logo from './logo.svg';
import React,{useState} from "react";
// import './App.css';
// import Practice from './practice';
// import Hook1 from './hook1';
// import Button from './button';
// import Hook2 from './hook2';
// import Hook from "./Hook.css";
import Login from './login';
import Registration from './Registration'; 
import login1 from './login1.css';


function App() {
  const [IsRegister,setIsRegistration] = useState(true)
  const isLogin =()=>{
     setIsRegistration(false);
    
  }
  let name = 'Ayushi'
  return (
    <div className="  App">
   {IsRegister?<Registration isLogin={isLogin}/>:(<Login/>)}
  
    
      
      {/* <Practice name={name} course='React'/> */}
{/* <Hook1/> */}
{/* <Button/> */}
{/* <Hook2/> */}
{/* <Login/> */}

    </div>
  );
}

export default App;
