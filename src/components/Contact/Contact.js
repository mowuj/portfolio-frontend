import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
        'service_2fy61xw',
            'template_i4c83fd',
            refForm.current,
        'ziV7sr-nXcIQmdbXE'
        )
            .then(
                () => {
                    alert('Message Successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message,Please try again')
                }
        )
    }
    return (
        <div className='contact text-center text-white '>
            <br /> <h3 className='contact-title'>CONTACT <span>ME</span></h3> <hr />

            <hr />
            <div className='mx-md-auto text-center container'>
                <form className='contact-form ' ref={refForm} onSubmit={sendEmail}>
                    <div className='form-group mt-2'>
                        <label htmlFor="Uname">User Name:</label>
                        <input type="text" className='form-control' name="" id="Uname" placeholder='Enter Name' />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control' name="" id="email" placeholder='Enter Name' />
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor="message">Message:</label>
                        <textarea className='form-control' name="" id="" placeholder='Message' cols="30" rows="10"></textarea>
                    </div>
                    
                    <button type='submit' className='btn mt-2 mb-2'>SEND</button>
                </form>
                
            </div>
        </div>
    );
};
// emailjs pass---*bTfN*m5B4M?uaA
export default Contact;