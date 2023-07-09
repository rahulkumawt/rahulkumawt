import './about.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function About() {

  const[ postDetails , setPostDetails ]= useState([]);

  useEffect(()=>{
    const api_url="https://jsonplaceholder.typicode.com/posts";
   axios.get(api_url).then((response)=>{
    //console.log(response.data);
    setPostDetails(response.data);
 }).catch((error)=>{
  console.log(error);

 });
  });


 return (
  <>
  {/* About Start */}
  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
          <div class="row gx-5">
              <div class="col-lg-12 py-6 px-5">
                  <div class="position-relative h-100">
   <h1 class="display-5 mb-4"> Post Details</h1>
  <table class=" table" border="1">
    <tr>
      <th>UserId</th>
      <th>Id</th>
      <th>Title</th>
      <th>Body</th>
    {
      postDetails.map((row)=>(
     <tr>
      <td>{row.userid}</td>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.body}</td>
     </tr>
      ))
}


    </tr>
  </table>
              </div>
              </div>
                 </div>
                  </div>
                  </div>
{/* About End */}
</>
  );
}

export default About;
