import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default function Skills() {
  return (
    <>
      <div className='about' id='skills'>
        <section className='container about-container skill_container'>

          <div className="row">
            <h1 className='main-heading mb-5'>My Skills</h1>
            <div className='col-12 col-lg-6 about-me-rightside '>

              <div className="skills">
                <div className="skill">
                  <i className="fa-brands fa-react"></i>
                  <p>React</p>
                </div>

                <div className="skill">
                  <i className="fa-solid fa-database"></i>
                  <p>Database</p>
                </div>

                <div className="skill">
                  <i className="fa-brands fa-js"></i>
                  <p>Javascript</p>
                </div>

                <div className="skill">
                  <i className="fa-brands fa-python"></i>
                  <p>Python</p>
                </div>

              </div>

              <div className="skills">
                <div className="skill">
                  <i class="fa-solid fa-fire-flame-curved"></i>
                  <p>Firebase</p>
                </div>

                <div className="skill">
                  <i className="fab fa-cuttlefish fa-2x"></i>
                  <p>C/C++</p>
                </div>

                <div className="skill">
                  <i class="fa-solid fa-code"></i>
                  <p>Coding</p>
                </div>



              </div>

            </div>

            <div className='col-12 col-lg-6 about-me-leftside skill_para'>


              <p className='main-hero-para'>I am a front-end web developer. I have experience with React,Javascript, MySQL. I have also worked with firebase including firebase functions and firestore. I have full proficiency in problem solving with C and C++.</p>
              <div className="all_btn">
                <Link className='btn about_btn skill_btn' to='#contact'>Contact me</Link>
              </div>


            </div>

          </div>

        </section>
      </div>
    </>
  )
}
