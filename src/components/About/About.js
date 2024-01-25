import React, { useEffect } from 'react';
import ahsan4 from '../../images/ashan4.png'
import mowuj3 from '../../images/mowuj3.jpg'
import ahsan from '../../images/ahsan.pdf'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
        AOS.init({duration:2000})
    },[])
    return (
        <div className=' w-100 about pt-4' id='about'>
            <div className='container'>
                <h3 className='about-title text-white text-bold'>ABOUT <span>ME</span></h3> <br />
                <hr />
            <div className='row p-5'>
                <div className='col-12 col-md-6 col-lg-6 aboutImg' data-aos="zoom-in">
                    <img className='w-75 pb-3' src={mowuj3} alt="ahsan" />
                </div>
                <div className='col-12 col-md-6 col-lg-6 aboutText text-white' data-aos="zoom-in">
                    <div>
                        <h3>
                            Hello,I Am Ahsan Habib
                        </h3>
                            <p>
                                I am a MERN Stack web developer.
                            I am passionate and extremely motivated new front-end developer.
                            I believe I stand out to my passion for continuous innovation and pushing
                            bring forward new ideas.
                            </p>
                            <p>
                                I am an expert in Rect JS, Express JS, Mongo DB, javascript, Node js, css3, responsiveness and other essential tools. I love to Develop interesting and unique design.Thank You for visiting my portfolio.
                            </p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='pe-5'>Name</td>
                                    <td>: Ahsan Habib</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Age</td>
                                    <td>: 25</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Address</td>
                                    <td>: Chuadanga,Bangladesh</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Phone</td>
                                    <td>: 01311-054020</td>
                                </tr>
                                <tr>
                                    <td className='pe-5'>Email</td>
                                    <td>:mowuj92@gmail.com</td>
                                </tr>
                            </tbody>
                            </table>
                            <a href={ahsan} download><button className='btn downloadCv mt-4'>Download Resume</button></a>
                        
                    </div>
                </div>
                </div>
                </div>
        </div>
    );
};

export default About;