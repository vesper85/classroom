import React from "react";

function Register() {

    return (
    < div className="container mt-5" >
    <h1>Register</h1>
  
    <div className="row">
      <div className="col-sm-8">
        <div className="card">
          <div className="card-body">
   {/* Makes POST request to /register route  */}
            <htmlForm action="/register" method="POST">
              <div className="htmlForm-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="htmlForm-control" name="username" />
              </div>
              <div className="htmlForm-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="htmlForm-control" name="password" />
              </div>
              <button type="submit" className="btn btn-dark btn-primary">Register</button>
            </htmlForm>
  
          </div>
        </div>
      </div>
  
      {/* <div className="col-sm-4">
        <div className="card social-block">
          <div className="card-body">
            <a className="btn btn-block btn-google btn-social" href="/auth/google" role="button">
              <i className="fab fa-google"></i>
              Sign In with Google
            </a>
          </div>
        </div>
      </div>
   */}
    </div>
  </div >
    )
}
export default Register;