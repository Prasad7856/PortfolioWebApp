import React from 'react'
import { useState } from 'react'
import projects from './Api/All_projects'

export default function Projects() {

    const [currproject, setproject] = useState(projects);

    return (
        <>
            <div className='about main_project' id='project'>
                <div className="container project-container">
                    <h1 className='main-heading text-center'>My Projects</h1>
                    <div className="row">

                        {
                            currproject.map((curr) => {

                                const { id, logo, title, info } = curr;
                                return (
                                    <>

                                        <div className="col-12 col-lg-4 text-center project-container-subdiv 
                                         project">
                                            <div>
                                                <img src={`images/${logo}`} alt="..." />
                                                <p>{title}</p>
                                            </div>

                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}