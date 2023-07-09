import './register.css';
import { useState } from 'react';

function Register() {

const[ name, setName ]= useState();
const[ email, setEmail ]= useState();
const[ password, setPassword ]= useState();
const[ mobile, setMobile ]= useState();
const[ address, setAdress ]= useState();
const[ city, setCity ]= useState();
const[ gender, setGender ]= useState();
const[ output, setOutput ]= useState();

alert(name);

  const handleSubmit=()=>{
    /*alert("it works")*/

  };
  return (
    <>
    {/* About Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-12 py-6 px-5">
                    <div class="position-relative h-100">
     <h1 class="display-5 mb-4">Register<spam class="text-primary">Here!!!</spam></h1>
     <form>
     <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)}/>
    <br/>
    {output}
  </div>
  <br/>


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
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control"value={address} onChange={e => setAdress(e.target.value)}></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control"value={city} onChange={e => setCity(e.target.value)}>
      <option>select City</option>
      <option>Indore</option>
      <option>Ujjain</option>
      <option>Ratlam</option>
      </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="gender">Gender:</label>
    Male <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
    &nbsp;&nbsp;
    Female <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
    &nbsp;&nbsp;

  </div>
  <br/>
 <button type="button" onClick={handleSubmit} class="btn btn-success">Submit</button>
</form>

        
        
         {/*<img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.3s" src="" style="object-fit: cover;">*/}
  
                </div>
                </div>
                   </div>
                    </div>
                    </div>
  {/* About End */}
  </>
  );
}

export default Register;
