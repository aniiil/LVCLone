import React from 'react'
import { BsMailbox2 } from "react-icons/bs";
import "./contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
      <div className="contact-head">
          <div className="contact-title">
            <h1>
              
              Contact Us <BsMailbox2 />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, porro.
            </p>
          </div>
        </div>

        <div className="contact-content">
            <div className="contact-info">
                <h1>Contact Info</h1>
                <p>
                Louis Vuitton, 22, avenue Montaigne, 75008 Paris, France.
                </p>
            </div>
            <form  className="contact-form">

               <div className="form-input">
               <input type="text" placeholder="Name"className="input-filed" />
                <input type="email" placeholder="Email"className="input-filed" />
                <input type="text" placeholder="Subject"className="input-filed" />
                <textarea className='input-filed' placeholder='Message'  rows="3"></textarea>
                <button className='form-btn'>Send Message</button>
               </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
