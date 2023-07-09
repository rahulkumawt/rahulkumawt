import './CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurl';

function CPAdmin() {

  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();
  const [ output , setOutput ] = useState("");  

  const handleSubmit=()=>{
      
    axios.get(apiurluser+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
      if(response.data.length!=0)
      {
        if(npassword==cnpassword)
        {
          let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}}; 
          axios.patch(apiurluser+"update",updateDetails).then((response)=>{
            setOutput("Password Changed Successfully....");         
            setOldPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
          });
        }
        else
        {
          setOutput("New & Confirm New Password Mismatch");
          setNewPassword("");
          setConfirmNewPassword("");
        }  
      }    
    }).catch((error)=>{
      setOutput("Invalid old password");
      setOldPassword("");
    });  
   
   };


  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Change Password Here!!!</h1>
<font color="blue">{output}</font>
<form>
  <br/>
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control" value={opassword} onChange={e => setOldPassword(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="npwd">New Password:</label>
    <input type="password" class="form-control" value={npassword} onChange={e => setNewPassword(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control" value={cnpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
  </div>
  <br/>
  <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default CPAdmin;
