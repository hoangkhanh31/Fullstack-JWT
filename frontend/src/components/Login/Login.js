import "./Login.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Login(props) {
   let history = useHistory();
   const handleCreateNewAccount = () => {
      history.push("/register");
   }

   return (
      <div className="login-container px-md-0 px-3">
         <div className="container">
            <div className="row">
               <div className="content-left col-md-7 d-none d-md-block">
                  <div className="brand">facebook</div>
                  <div className="detail">Facebook helps you connect and share with the people in your life.</div>
               </div>
               <div className="content-right col-12 col-md-5 d-flex flex-column gap-3 py-3">
                  <div className="brand d-md-none">facebook</div>
                  <input type="text" className="form-control" placeholder="Email address or phone number" />
                  <input type="password" className="form-control" placeholder="Password" />
                  <button className="btn btn-primary">Login</button>
                  <span className="text-center">
                     <a className="forgot-password" href="#">Forgot your password?</a>
                  </span>
                  <hr />
                  <div className="text-center">
                     <button className="btn btn-success" onClick={() => handleCreateNewAccount()}>
                        Create new account
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
