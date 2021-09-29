import React from "react";
// import Button from "./Buttons"



function Front(){

    return(

        <div className="jumbotron centered">
  <div className="container">
    {/* <i className="fas fa-key fa-6x"></i> */}
    <img src="../public/google-classroom.png" alt="classroom img" />
    <h2 className="lead-text">Google Classroom</h2>
    <p className="lead">Classroom helps classes communicate, save time and stay organised.</p>
    <hr />
    
     {/* <Button text = "Register" to="/register"/>
     <Button text = "Login" href="/login"/>   */}
   {/* <button class></button> */}
   

   

  </div>
  <a className="btn  btn-google btn-social" href="/auth/google" role="button">
            <i className="fab fa-google"></i>
            Sign In with Google
          </a>
</div>

        

        


    )


}

export default Front;