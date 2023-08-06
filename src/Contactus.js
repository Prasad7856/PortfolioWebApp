import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export default function Contactus() {

    const [userdata, setUserdata] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    let name, value;

    const postusedata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserdata({ ...userdata, [name]: value })

    }

    // connection with firebase
    // https://portfolioweb-73a3b-default-rtdb.firebaseio.com/userData.json


    function sendEmail(e) {

        e.preventDefault();

        const { firstName, lastName, phone, email, subject, message } = userdata;
        if (firstName && lastName && phone && email && subject && message) {

            const resp = fetch("https://portfolioweb-73a3b-default-rtdb.firebaseio.com/userData.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    firstName, lastName, phone, email, subject, message,
                }),

            })

            if (resp) {
               
                alert("Message send successfully !!!")
            }
            else {
                alert("Please enter all the fields")

            }

            emailjs.sendForm('service_v52mxyx', 'template_0ad62wd', e.target, 'JE82ZgCH1v3QS3_F_').then(res => {
                console.log("res", res);

            }).catch(err => {
                console.log("error", err);
            })

            setUserdata({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                subject: '',
                message: '',
            })

        }

    }

    return (
        <>
            <div className='about' id='contact'>
                <section className='contactus-section'>
                    <div className="container text-center">
                        <h1 className='main-heading mb-5 mt-5 text-center'>Get In Touch</h1>
                        <div className="main_contact">

                            {/* left side icons  */}
                            <div className="left_side order-lg-first order-last">
                                <div className='links'>
                                    <a href="https://www.linkedin.com/in/prasad-chavan-376673233/">
                                        <i className='fab fa-linkedin fontawesome-style'></i>
                                    </a>
                                    <h3>Linkdin</h3>
                                </div>

                                <div className='links'>
                                    <a href="https://github.com/Prasad7856">
                                        <i className='fab fa-github fontawesome-style'></i>
                                    </a>
                                    <h3>Github</h3>
                                </div>

                                <div className='links'>
                                    <a href="https://github.com/Prasad7856">
                                        <i className='fab fa-facebook fontawesome-style'></i>
                                    </a>
                                    <h3>facebook</h3>
                                </div>


                            </div>

                            {/* right side form  */}

                            <div className="right_side order-md-first order-sm-first">
                                <form method='POST' onSubmit={sendEmail}>
                                    <div className="input_field_1">

                                        <input
                                            type="text"
                                            name="firstName"
                                            id=""
                                            className="form-control form_split_input"
                                            placeholder="First Name"
                                            value={userdata.firstName}
                                            onChange={postusedata}
                                        />

                                        <input
                                            type="text"
                                            name="lastName"
                                            id=""
                                            className="form-control"
                                            placeholder="last Name"
                                            value={userdata.lastName}
                                            onChange={postusedata}

                                        />
                                    </div>

                                    <div className="input_field_1">

                                        <input
                                            type="text"
                                            name="phone"
                                            id=""
                                            className="form-control form_split_input"
                                            placeholder="phone"
                                            value={userdata.phone}
                                            onChange={postusedata}

                                        />

                                        <input
                                            type="text"
                                            name="email"
                                            id=""
                                            className="form-control"
                                            placeholder="email"
                                            value={userdata.email}
                                            onChange={postusedata}

                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        id=""
                                        className="form-control"
                                        placeholder="subject"
                                        value={userdata.subject}
                                        onChange={postusedata}

                                    />

                                    <input
                                        type="text"
                                        name="message"
                                        id=""
                                        className="form-control"
                                        placeholder="message"
                                        value={userdata.message}
                                        onChange={postusedata}

                                    />
                                    <div className="all_btn">
                                        <button className='btn about_btn all_btn'>Send message</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className="mobile_mode_links">
                            <div className='links'>
                                <a href="https://www.linkedin.com/in/prasad-chavan-376673233/">
                                    <i className='fab fa-linkedin fontawesome-style'></i>
                                </a>
                                <h3>Linkdin</h3>
                            </div>

                            <div className='links'>
                                <a href="https://github.com/Prasad7856">
                                    <i className='fab fa-github fontawesome-style'></i>
                                </a>
                                <h3>Github</h3>
                            </div>

                            <div className='links'>
                                <a href="https://github.com/Prasad7856">
                                    <i className='fab fa-facebook fontawesome-style'></i>
                                </a>
                                <h3>facebook</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
