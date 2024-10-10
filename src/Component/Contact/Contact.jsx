import React from 'react'
import './Contact.css'
import msg_icon from '../../Assest/msg_icon.png'
import mail_icon from '../../Assest/mail_icon.png'
import phone_icon from '../../Assest/phone_icon.png'
import location_icon from '../../Assest/location_icon.png'
import arrow from '../../Assest/arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append("access_key",
         "1a1a1749-9735-4e64-8f56-605ca21b1c86");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };




    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question and suggestion are important to us we are strive to provide exceptional service to our college community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />  Contact@WebLearner.instagram</li>
                    <li><img src={phone_icon} alt="" />  +91 6386109790</li>
                    <li><img src={location_icon} alt="" />  BCC Apartment Anora Lucknow </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter yur phone number' required />
                    <label>Write Your Messages Her</label>
                    <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
                </form>
                <span>
                    {result}
                </span>
            </div>
        </div>
    )
}

export default Contact