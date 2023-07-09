import './nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav() {
  
    const [NavContent, setNavContent]= useState();
    useEffect(()=>{
        setTimeout(()=>{
        if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='admin')
        {
            setNavContent(<>
                {/*Nav start */}
<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
<a href="index.html" class="navbar-brand ms-lg-5">
<h1 class="display-5 m-0 text-primary">P<span class="text-secondary">MS</span></h1>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
<div class="navbar-nav ms-auto py-0">
  <a  class="nav-item nav-link active"><Link to="/user">Admin Home</Link></a>
  <a  class="nav-item nav-link active"><Link to="/manageusers">manage users</Link></a>
  

  <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"style={{"color":"blue"}}>Pages</a>
      <div class="dropdown-menu m-0">
          <a class="dropdown-item">Pricing Plan</a>
          <a class="dropdown-item">Blog Grid</a>
          <a class="dropdown-item">Blog Detail</a>
          <a class="dropdown-item">The Team</a>
          <a class="dropdown-item">Testimonial</a>
      </div>
  </div>
<a class="nav-item nav-link"><Link to="logout">Logout</Link></a>
  {/*<a href="" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>+123 456 789</a>*/}
</div>
</div>

</nav>
{/* Nav end */}
        </>);
        }
        else if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
        {
            setNavContent(<>
                            {/*Nav start */}
<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
      <a href="index.html" class="navbar-brand ms-lg-5">
          <h1 class="display-5 m-0 text-primary">P<span class="text-secondary">MS</span></h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
              <a  class="nav-item nav-link active"><Link to="/user">User Home</Link></a>

              <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"style={{"color":"blue"}}>Pages</a>
                  <div class="dropdown-menu m-0">
                      <a class="dropdown-item">Pricing Plan</a>
                      <a class="dropdown-item">Blog Grid</a>
                      <a class="dropdown-item">Blog Detail</a>
                      <a class="dropdown-item">The Team</a>
                      <a class="dropdown-item">Testimonial</a>
                  </div>
              </div>
            <a class="nav-item nav-link"><Link to="logout">Logout</Link></a>
              {/*<a href="" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>+123 456 789</a>*/}
          </div>
      </div>

  </nav>
{/* Nav end */}


            </>);    
        }
        else     //if(localStorage.getItem('token')!=undefined && localStorage.getItem('role')=='user')
        {
            setNavContent(<>
                {/*Nav start */}
<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
      <a href="index.html" class="navbar-brand ms-lg-5">
          <h1 class="display-5 m-0 text-primary">P<span class="text-secondary">MS</span></h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
              <a  class="nav-item nav-link active"><Link to="/">Home</Link></a>
              <a  class="nav-item nav-link"><Link to="/about">About</Link></a>
              <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
              <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
              <a  class="nav-item nav-link"><Link to="/register">Register</Link></a>

              <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"style={{"color":"blue"}}>Pages</a>
                  <div class="dropdown-menu m-0">
                      <a class="dropdown-item">Pricing Plan</a>
                      <a class="dropdown-item">Blog Grid</a>
                      <a class="dropdown-item">Blog Detail</a>
                      <a class="dropdown-item">The Team</a>
                      <a class="dropdown-item">Testimonial</a>
                  </div>
              </div>
              <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
              {/*<a href="" class="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"><i class="bi bi-telephone-outbound me-2"></i>+123 456 789</a>*/}
          </div>
      </div>

  </nav>
{/* Nav end */}
        </>);    
        }
        },10);
      },[]);
    
      return (
    <>
  { NavContent}
    </>
  );
}

export default Nav;
