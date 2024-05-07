import React,{useState} from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "16de525d-0b82-4c2f-b5b5-5d2a6ae758e8");

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
            
            <div className='contact-col'>
                <div className="center mt-20">
                    <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                </div>
                <p>Feel free to ask and get informed about water-footprint</p>
                <ul>
                    <li><img src={mail_icon} alt="" />aman@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />9415840296</li>
                    <li><img src={location_icon} alt="" />Ghaziabad</li>
                </ul>
            </div>
            <div className='contact-col mt-20'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your Mobile Number'  required/>
                    <label>Write your Messages here</label>
                    <textarea name='message' row='6' placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now</button>
                </form>
                <span>{result} </span>
            </div>
        </div>
    );
}

export default Contact;
