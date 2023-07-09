import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurl';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    
   const userDetails={"email":email,"password":password};

   axios.post(apiurluser+"login",userDetails).then((response)=>{
        //console.log(response.data);
        setOutput("User register successfully....");
        var obj=response.data.userDetails
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",obj._id);
        localStorage.setItem("name",obj.name);
        localStorage.setItem("email",obj.email);
        localStorage.setItem("mobile",obj.mobile);
        localStorage.setItem("address",obj.address);
        localStorage.setItem("city",obj.city);
        localStorage.setItem("gender",obj.gender);
        localStorage.setItem("info",obj.info);
        localStorage.setItem("role",obj.role);
        
        obj.role=="admin"?navigate("/admin"):navigate("/user");


   }).catch((error)=>{
        //console.log(error);
        setOutput("Invalid user or verify your account....");
        setEmail("");
        setPassword("");
   });  
  
  };    

  return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-12 py-6 px-5">
                    <div class="position-relative h-100">
                    <div class="form-group">
                    
                    <h1 class="display-5 mb-4">login<spam class="text-primary">Here!!!</spam></h1>
     <font color="blue">{output}</font>
     <div class="form-group">

    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
  </div>
  
  <br/>


  </div>
  <br/>
 <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
 
    
</div>
                </div>
                </div>
                   </div>
                    </div>
                  
                  
  {/* About End */}
  </>
  );
}

export default Login;
