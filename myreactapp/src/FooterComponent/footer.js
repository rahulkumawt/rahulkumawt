import './footer.css';

function Footer() {
  return (
   <>
   {/* Footer Start */}
  <div class="container-fluid bg-dark text-light mt-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container pt-5">
          <div class="row g-5">
              <div class="col-lg-3 col-md-6">
                  <h3 class="text-white mb-4">Quick Links</h3>
                  <div class="d-flex flex-column justify-content-start">
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                      <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h3 class="text-white mb-4">Popular Links</h3>
                  <div class="d-flex flex-column justify-content-start">
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                      <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                      <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h3 class="text-white mb-4">Get In Touch</h3>
                  <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                  <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                  <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h3 class="text-white mb-4">Follow Us</h3>
                  <div class="d-flex">
                      <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                  </div>
              </div>
              <div class="col-12">
                  <form class="mx-auto" style={{"max-width":"600px"}}>
                      <div class="input-group">
                          <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                          <button class="btn btn-primary px-4">Sign Up</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      </div>
  <div class="container-fluid bg-primary text-light py-4">
      <div class="container">
          <div class="row g-5">
              <div class="col-md-6 text-center text-md-start">
                  <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">PMS</a>. All Rights Reserved.</p>
              </div>
              <div class="col-md-6 text-center text-md-end">
                  <p class="mb-0">Designed by <a class="text-white border-bottom" href="">PMS</a></p>
              </div>
          </div>
      </div>
  </div>
  {/* Footer End */}
   
   
   </>

  );
}

export default Footer;
