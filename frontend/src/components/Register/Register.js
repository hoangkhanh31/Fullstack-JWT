import "./Register.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect } from "react";

export default function Register(props) {
   let history = useHistory();
   const handleLogin = () => {
      history.push("/login");
   }
   
   return (
      <div className="register-container px-md-0 px-3">
         <div className="container">
            <div className="row">
               <div className="content-left col-md-7 d-none d-md-block">
                  <div className="brand">facebook</div>
                  <div className="detail">Facebook helps you connect and share with the people in your life.</div>
               </div>
               <div className="content-right col-12 col-md-5 d-flex flex-column gap-3 py-3">
                  <div className="brand d-md-none">facebook</div>
                  <div className="form-group">
                     <label>Email:</label>
                     <input type="text" className="form-control" placeholder="Email address" />
                  </div>
                  <div className="form-group">
                     <label>Phone number:</label>
                     <input type="text" className="form-control" placeholder="Phone number" />
                  </div>
                  <div className="form-group">
                     <label>Password:</label>
                     <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                     <label>Re-enter password:</label>
                     <input type="password" className="form-control" placeholder="Re-enter password" />
                  </div>
                  <button className="btn btn-primary">Register</button>
                  <span className="text-center">
                     <a className="forgot-password" href="#">Forgot your password?</a>
                  </span>
                  <hr />
                  <div className="text-center">
                     <button className="btn btn-success" onClick={() => handleLogin()}>
                        Already have an account. Login
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
