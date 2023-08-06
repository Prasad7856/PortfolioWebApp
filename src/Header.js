import React from 'react'
// import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

export default function Header() {
  return (
    <>
      <header id='home'>
        <section className='container main-hero-container'>
          <div className="center-header ">

            <div className=" left_header order-lg-first order-last">
              <h2>HEY THERE</h2>
              <div class="text-box">
                <div class="fixed-text">I am </div>
                <div class="animate-text">
                  <div>
                    <span>Prasad Chavan</span>
                    <span>Coder</span>
                    <span>Developer</span>
                  </div>
                </div>
              </div>

              <div className="header-btn">
                <Link className='btn' to="#about">About me</Link>
                <a className='btn' href='https://drive.google.com/file/d/1wkngV9twjixKcw6O1uGHsDCXA9RueJED/view?usp=sharing'><span><i className="fa-solid fa-download download px-2"></i></span> Download CV</a>
              </div>
            </div>

            <div className=" right_header order-md-first order-sm-first my_img"  >
              <div className="inner-container">

              </div>
              <div className='ui_card'>
                <img src="images/Prasad_homepage.png" className='img-fluid prasad_img' alt=""/>

              </div>

            </div>


          </div>

        </section>
      </header>
    </>
  )
}
