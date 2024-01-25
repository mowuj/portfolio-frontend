import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

import 'aos/dist/aos.css'
import './Projects.css'
import SingleProject from './SigleProject/SingleProject';
const Projects = () => {
    const [projects, setProjects] = useState()
    
    useEffect(() => {
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
        
    },[projects])
    
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className='projects p-5' id='projects'>
            <div className='projectText '>
                <h3>MY <span>PROJECTS</span></h3> <br />
                <hr />
                <div className='container text-center mt-5'>
                    <div className='row'>
                        
                        {
                
                projects?.map(project => <SingleProject
                key={project._id}
                project={project}
                ></SingleProject>)
                        }
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;