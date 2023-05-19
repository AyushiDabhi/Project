import React,{useState} from "react";
import Registration from "./Registration.css";
import imgage from './IMG_9959.JPG'
function Ragi(props) {

  const [mail,setmail] = useState()
  const handletextButton1=(e)=>{
      setmail(e.target.value);
     
  }
  const [pass,setpass] = useState()
  const handletextButton2=(e)=>{
      setpass(e.target.value);
  }
  console.log(props)
  const handleLogin=()=>{
    localStorage.setItem('mail',mail)
    localStorage.setItem('pass',pass)
    props.isLogin()
  }
  return (
    <>
      {/* Hello world */}
      <div className="abb">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={imgage}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <form>
                <h3>Registration Form</h3>
                <hr />
                <div className="form-row">
                  <div className="col-lg-7"></div>
                  <div className="row">
                    <div className="col">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue="Mark"
                        required=""
                       
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="validationCustom01"
                        className="form-label"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        defaultValue="Mark"
                        required=""
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      onChange={(e)=>handletextButton1(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      onChange={(e)=>handletextButton2(e)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      State
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected="">Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={()=>{handleLogin()}}>
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ragi;
