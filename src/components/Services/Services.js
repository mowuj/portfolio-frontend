import React, { useEffect } from 'react';
import { FaCode, FaPen, FaPhotoVideo } from 'react-icons/fa';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className='services p-5' id='services'>
            <div className='serviceText'>
                <h3>MY <span>SERVICES</span></h3> <br />
                <hr />
                <div className='container text-center mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'> <FaCode/></span></p>
                                <h5 className='mt-4'>FRONT_END DEVELOPMENT</h5>
                                <p>Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'><FaCode/> </span></p>
                                <h5 className='mt-4'>BACK-END DEVELOPMENT</h5>
                                <p>Web development is the work involved in developing a website for the Internet or an intranet.I can develop a full web site back-end.by using SQL and NOSQL database.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                            <div className='border service p-4'>
                                <p className='serviceIcon'> <span className='border p-2'> <FaPen/></span></p>
                                <h5 className='mt-4'>PROBLEM FIXING</h5>
                                <p>Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of javaScript, React, Python, Django problems & bugs for any website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;