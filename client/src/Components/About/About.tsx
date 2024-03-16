import profile from './Sources/profile_img.jpg'
import cv from './Sources/Lior Singer - CV.pdf'
import { PiDownloadSimpleBold } from "react-icons/pi";
import './About.css'

const About = () => {

  const downloadCV = async (): Promise<void> => {
    const res = await fetch(cv)
    const blob = await res.blob()
    const fileURL = window.URL.createObjectURL(blob)
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "Lior Singer - CV.pdf";
    alink.click();
  }

  return (
    <section className="site-sections about" id="about">
      
      <h1>About Me</h1>
      
      <div className='about-info'>
        
        <div className='about-img-div'>
          <img src={profile} className='about-img' />
        </div>
        
        <div className='about-context'>
          
          <p>
            With 2 years of experience in IT and a 2 years of experience in full-stack development, specifically with node.js, react.js,
            redux, mongo based databases, sql, javascript, typescript, web design with css, html and python.
          </p>

          <div className='years'>
            <div className="year">
              <p><span>04+</span> <br /> Years Coding</p>
            </div>
            <div className='year'>
              <p><span>02+</span> <br /> Years <br /> Full Stack Experience</p>
            </div>
            <div className='year'>
              <p><span>02+</span> <br /> Years <br /> IT Experience</p>
            </div>
          </div>

          <div className='btn cv-btn' onClick={downloadCV}>
            <p>Download CV</p>
            <span className='cv-btn-icon'><PiDownloadSimpleBold size={25} /></span>
          </div>  
        
        </div>
      </div>
    </section>
  )
}

export default About