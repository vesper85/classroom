import React from "react";

function Login(){

  const handleSubmit =(e)=>{

    e.preventDefault();
    fetch("http://localhost:3000/login")
    const 

  
  }

    return(
        <div className="container mt-5">
  <h1>Login</h1>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

           {/* Makes POST request to /login route  */}
          <htmlhtmlForm action="/login" method="POST" >
            <div className="htmlForm-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="htmlhtmlForm-control" name="username" />
            </div>
            <div className="htmlForm-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="htmlForm-control" name="password" />
            </div>
            <button type="submit" className="btn btn-primary" >Login</button>
          </htmlhtmlForm>
         
        </div>
      </div>
    </div>

    

  </div>
</div>



    )
}
export default Login;