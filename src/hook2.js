import React,{useState} from 'react';
import "./Hook.css";


function Hook2()
{ 
    const [mail,setmail] = useState()
    const handletextButton=(e)=>{
        setmail(e.target.value);
       
    }
    const [name,setname] = useState()
    const handletextButton1=(e)=>{
        setname(e.target.value);
    } 

    const [pass,setpass] = useState()
    const handletextButton2=(e)=>{
        setpass(e.target.value);
    }

    const [val,setVal] = useState()
    const handleButton3=(type)=>{
        console.log("Submitted")
        setVal("login");
    }
    return(
        <div className='img'>
        <div className="container">
        
        
        <h2 class="login-title">Login Form</h2>
<form className="login-form">

<div>
        <label for="name" class="text-left">name: </label> 
           <input  id="name" type='text' placeholder="Ayushi" name="name" required="" onChange={(e)=>handletextButton(e)}/>
           
         </div><br/>

          <div>
        <label for="email">email:  </label> 
           <input  id="email" type='email' placeholder='Ayushi@123.com' name="email" required="" onChange={(e)=>handletextButton1(e)}/>
             
        </div><br/>
<div>
        <label for="password">Password: </label> 
           <input  id="password" type='password' placeholder='Ayushi@123' name="pass" required="" onChange={(e)=>handletextButton2(e)}/>
             
        </div>
        <br/>

        
        <div >
        <button type="button" class="btn btn-primary" onClick={()=> handleButton3()}>Submit</button>
        </div>
</form>

        </div>
        </div>
        
    )

}
export default Hook2