import { FaFacebook } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { SlSocialLinkedin } from 'react-icons/sl'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <footer className="about-me" id="aboutme">
        <div className='footer-info'>
            <div className="footer-container footer-info-left">
                <span className='footer-info-title'>LIOR</span>
                <span>Full Stack Developer</span>
            </div>
            <div className="footer-container footer-info-center">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#timeline">Timeline</a>
            </div>
            <div className="footer-container footer-info-right">
                <a href='https://www.facebook.com/profile.php?id=100000319302762' target="_blank"><FaFacebook size={25} className="footer-icons" /></a>
                <a href='https://www.linkedin.com/in/lior-singer-141982244' target="_blank"><SlSocialLinkedin size={25} className="footer-icons" /></a>
                <a href='https://www.instagram.com/liorzinger09/' target="_blank"><LuInstagram size={25} className="footer-icons" /></a>            
            </div>
        </div>
        <div className="copyright">
            <p>&copy; 2024 LIOR SINGER</p>
        </div>
    </footer>
  )
}

export default AboutMe