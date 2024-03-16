import profile from './Sources/profile_img.jpeg'
import { VscSend } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { IoMdArrowDown } from "react-icons/io";
import './HomePage.css' 

const HomePage = () => {

  return (
    <section className="home-page" id="home">
      
      <nav>
        <a href='https://www.linkedin.com/in/lior-singer-141982244' target="_blank"><SlSocialLinkedin size={25} className="site-icons" /></a>
        <a href='https://www.instagram.com/liorzinger09/' target="_blank"><LuInstagram size={25} className="site-icons" /></a>
        <a href='https://www.facebook.com/profile.php?id=100000319302762' target="_blank"><FaFacebook size={25} className="site-icons" /></a>
      </nav>

      <div className="home-page-aboutme">
        <h1>Hi, I'm Lior</h1>
        <h3>Full Stack Developer</h3>
        <p className='home-page-introducing'>
          High level expirience in full stack development, producing quality work.
        </p>

        <a href="#contactme"className='btn contact-btn'>
          <p>Contact Me</p>
          <span className='contact-btn-icon'><VscSend size={25} /></span>
        </a>
        
        <a href='#about' className='scroll-down'>
          <BsMouse size={25} />
          <span>Scroll Down</span>
          <span className='scroll-down-icon'><IoMdArrowDown /></span>
        </a>
        
      </div>

      <img src={profile} className='profile-image' />
    </section>
  )
}

export default HomePage