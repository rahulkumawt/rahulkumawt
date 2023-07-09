import './manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurl';
import { useNavigate } from 'react-router-dom';

function Manageusers() {
  
  const [ userDetails , setUserDetails ] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
   axios.get(apiurluser+"fetch?role=user").then((response)=>{
    setUserDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   });
  });

  const manageUserStatus=(_id,s)=>{
   if(s=="block")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}}; 
     axios.patch(apiurluser+"update",updateDetails).then((response)=>{
      navigate("/manageusers");    
     }); 
    }
    else if(s=="verify")
    {
     let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}}; 
     axios.patch(apiurluser+"update",updateDetails).then((response)=>{
      navigate("/manageusers");   
     });
    }  
    else
    {
      let deleteDetails={"data":{"_id":_id}};  
     axios.delete(apiurluser+"delete",deleteDetails).then((response)=>{
      navigate("/manageusers");   
     });
    }
  };


  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">View & Manage User Details Here!!!</h1>

<table class="table table-bordered">
<tr>
<th>#</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Action</th>  
</tr>  

{
  userDetails.map((row)=>(
    <tr>
    <td>{row._id}</td>
    <td>{row.name}</td>
    <td>{row.email}</td>
    <td>{row.mobile}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.gender}</td>
    <td style={{"width":"15%"}} >{row.info}</td>

    { row.status==0 && <a onClick={()=>{manageUserStatus(row._id,"verify")}} ><img src="./assets/img/active.png" height="40" width="40" /></a> }

    { row.status==1 && <a onClick={()=>{manageUserStatus(row._id,"block")}} ><img src="./assets/img/inactive.png" height="40" width="40" /></a>}

    <a onClick={()=>{manageUserStatus(row._id,"delete")}} >    
    <img style={{float : 'right'}} src="./assets/img/delete.png" height="40" width="40" />
    </a>
    <td>

    </td>
    </tr>
  ))
}

</table>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default Manageusers;
