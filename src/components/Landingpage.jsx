import React from 'react'
import "./Landingpage.css"
import landingpageimg from "../assets/landingpageimage.jpg"
import { useNavigate } from 'react-router-dom'
const Landingpage = () => {
  const navigate = useNavigate()
  const RegisterBtn = () => {
    navigate("/signup")
  }
  const LoginBtn = () => {
    navigate("/login")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid mx-0 mx-sm-5">
          <a class="navbar-brand fw-bold CauseCaptureStyle">CauseCapture</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse Navbarstyleone" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item mx-5">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='Causecapstyleword'>
        <div className='CauseCaptureh1style'>
          <div>
            <h1 className='h1capstyling'>CauseCapture</h1>
          </div>
          <div>
            <p className='fw-bold ptagCapstyle'>Capture the essence of purpose through pixels! CauseCapture is not just a platform for storing images; it's a visual journey dedicated to meaningful causes and impactful missions.</p>
          </div>
          <div>
            <button className='btn btn-secondary' onClick={RegisterBtn}>Register</button>
            <button className='btn btn-primary mx-2' onClick={LoginBtn}>Login</button>
          </div>
        </div>
        <div className='myImgCaptureStyle'>
          <img className='myImgCaptureStyle2' src={landingpageimg} alt="" />
        </div>
      </div>


      <div class="custom-shape-divider-bottom-1705566695">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>

      <div className='AboutDiv'>
        <div className='aboutDivStyle'>
          <div>
            <h2>About</h2>
          </div>
          <p>
            Welcome to CauseCapture, where passion meets purpose in the world of visual storytelling.
            At CauseCapture, we believe that every image has the power to inspire, connect, and make a difference. Our journey began with a simple idea to create a platform that goes beyond storing pictures it's a space where purposeful images unite to drive positive change.
          </p>
        </div>

        <div className='aboutDivStyle'>
        <p>
          <div>
            <h2>
              Our Mission
            </h2>
          </div>
          We are on a mission to provide a canvas for individuals and communities to share images that matter. Whether it's capturing the beauty of the world, advocating for social causes, or preserving cherished memories, we believe in the transformative impact of visual narratives.
        </p>
        </div>
      </div>
    </>
  )
}

export default Landingpage