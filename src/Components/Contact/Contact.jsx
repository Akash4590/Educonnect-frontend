import React,{useState} from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import mailicon from '../../assets/mailicon.png'
import phoneicon from '../../assets/phoneicon.png'
import locationicon from '../../assets/locationicon.png'
import whitearrow from '../../assets/whitearrow.png'
function Contact() {
      const [result, setResult] = React.useState("");

      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2e368b3c-d59d-4d3e-8818-635f0b0d165a");
    
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
            <h3>Send us a message <img src={msgicon} alt="" /></h3>
            <p>Feel free to reach out through contact form and find our contact information below. Your feedback,questions,and suggestions are very importan tto us as we strive to provide exceptional service to our university community.</p>
            <ul>
                  <li><img src={mailicon} alt="" />akashjaved4590@gmail.com </li>
                  <li> <img src={phoneicon} alt="" />+923019304590 </li>
                  <li><img src={locationicon} alt="" />77 modeltown ave, cambridge <br /> MA 0213456,united states </li>
            </ul>
      </div>
      <div className="contact-col">
            <form onSubmit={onSubmit}>
                  <label htmlFor="">Your name</label>
                  <input type="text" name='name' placeholder='Enter your name' 
                   required/>
                   <label htmlFor="">Phone number</label>
                   <input type="tel" name='phone' placeholder='Enter your mobilenumber' required />
                   <label htmlFor="">Write your message here</label>
                   <textarea name="message"  cols='30' rows='6' placeholder='Enter your message' required></textarea>
                   <button className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /></button>
            </form>
            <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
