import React from 'react'

export default function About() {
    return (
        <>
            <div className='about' id='about'>

                <h1 className='main-heading mb-5 about_head'>About me</h1>
                <section className='container about-container'>

                    <div className="row">

                        <div className='col-12 col-lg-6 about-me-rightside order-lg-first order-last'>
                            <p className='main-hero-para'>Hello, I am Prasad Chavan pursuing my B.Tech in Computer Science and Engineering, Pune. With exceptional proficiency in a diverse range of programming languages and technologies, including C++, Python, HTML, CSS, ReactJS, Node.js, MongoDB, SQL, and remarkable adeptness in problem-solving, I have the skills required to tackle complex programming challenges..</p>
                            <div className="all_btn">
                                <a className='btn about_btn' href='https://drive.google.com/file/d/1wkngV9twjixKcw6O1uGHsDCXA9RueJED/view?usp=sharing'><span><i className="fa-solid fa-download download px-2"></i></span>Download CV</a>
                            </div>


                        </div>


                        <div className='col-12 col-lg-6 about-me-leftside order-md-first order-sm-first aboutus_img'>

                            <img src="images/about_me.png" alt="about" className='about_img' />

                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}
