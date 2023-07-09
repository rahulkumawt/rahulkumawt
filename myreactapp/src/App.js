import './App.css';
import { Routes , Route } from 'react-router-dom';
import Header from './HeaderComponent/header';
import Nav from './NavComponent/nav';
import Home from './HomeComponent/home';
import About from './AboutComponent/about';
import Contact from './ContactComponent/contact';
import Service from './ServiceComponent/service';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';  
import Footer from './FooterComponent/footer';
import Slider from './SliderComponent/Slider';




function App() {
 return (
 <>
 <Header/>

<Nav/>

<Slider/>
<Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>  
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      </Routes>
      <Footer/>

  {/* Back to Top */}
  <a href="#" class="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
  </>
 );
}
export default App;
