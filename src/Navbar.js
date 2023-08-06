import React, { useState } from 'react'
import { useEffect } from 'react';
// import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {

    const [show, setshow] = useState(false);

    return (
        <>
            <section className='navbar_bg '>
                <nav className={`navbar navbar-expand-lg navbar-light`}>
                    <div className="container-fluid">
                        <img src="images/P_LOGO.jpg" className='p_logo' alt="p_logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-
                            target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-
                            expanded="false" aria-label="Toggle navigation" onClick={() => { setshow(!show) }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${show ? "show" : ""} `}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link smooth className="nav-link active" aria-current="page"
                                        to="#home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="#project">Projects</Link>
                                </li>

                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="#about">About me</Link>
                                </li>

                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="#skills">Skills</Link>
                                </li>

                                <li className="nav-item">
                                    <Link smooth className="nav-link" to="#contact">Contact</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
