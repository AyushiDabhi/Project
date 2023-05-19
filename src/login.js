import React,{useState} from "react";
import './login1.css';

function Login(props) {
  
 

  const [mail,setmail] = useState()
  const handletextButton1=(e)=>{
      setmail(e.target.value);
     
  }
  const [pass,setpass] = useState()
  const handletextButton2=(e)=>{
      setpass(e.target.value);
  }
  const [val,setVal] = useState()
  const handleButton3=(type)=>{
      // console.log("Login")
      // setVal("login");
      let getmail=localStorage.getItem('mail')
      let getpass=localStorage.getItem('pass')
      if(getmail=== mail && getpass===pass)
      {
        alert("confirmed")
      }
      else{
        alert("not confirmed")
      }
  }


return (
      
      <div class="homepage">
        <div class="card" >
          <h2 >Login Form</h2>
          <hr />
          <div class="card-body">
            <ul class=" insidelog nav nav-pills nav-fill gap-2 p-1 small bg-primary  shadow-sm"
              id="pillNav2"
              role="tablist"
              //  style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active "
                  id="home-tab2"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Login
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link "
                  id="home-tab2"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
          <form>
            <fieldset >
              <div
                class="mb-3"
                style={{ paddingLeft: "3%", paddingRight: "3%" }}
              >
                <input
                  type="text"
                  // id="disabledTextInput"
                  class="form-control"
                  placeholder="Email Address"
                  onChange={(e)=>handletextButton1(e)}
                />
              </div>
              <div
                class="mb-3"
                style={{ paddingLeft: "3%", paddingRight: "3%" }}
              >
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Password"
                  onChange={(e)=>handletextButton2(e)}
                />
              </div>
            </fieldset>
            <div class="mb-3">
              <div
                class="form-check"
                
              >
                <label class="form-check-label">Remember Me</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  style={{ margin: "1%" }}
                />
              </div>
            </div>
            <div class="d-grid  col-6 mx-auto">
              <button class=" button btn btn-primary" type="button" onClick={()=> handleButton3()}>
                Login
              </button>
            </div>
            <br />

            <div>
              <h6>
                Not a member? signup now
              </h6>
            </div>
            <br />
          </form>
        </div>
        </div>
        
      
    
  );
}

export default Login
