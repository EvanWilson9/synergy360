import React from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from './ContactForm'

export default function ContactMe() {
  return (
    <section className='contactme-section'>
        <div className="contactme-wrapper">
            <div className='contact-titles-container'>
                <h2 className='action-title'>Contact Me</h2>
                <p className='action-card-title'>I'm here to help you with any questions you may have.</p>
            </div>
            <div className='contactme-section-container'>
            <div className='contactme-container'>
                <h3>Main Office</h3>
                <div className='contact-detail'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <MapPin style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/>
                    </span>
                    <div>
                        <p>9165 Otis Avenue Suite 243</p>
                        <p>Indianapolis, IN 46256</p>
                    </div>
                </div>
                <div className='contact-detail'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <Phone style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/>
                    </span>
                        Phone: (317) 555-1234
                    </div>
                <div className='contact-detail'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <Mail style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/> 
                    </span>
                        Email: Richard.l.moss@lpl.com
                </div>
                <div className='contact-detail'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <Clock style={{color:"rgb(220, 38, 38)", width:'20', height:'20'}}/> 
                    </span>
                        Mon-Sun: By appointment
                </div>
            </div>
            <div className='googlemaps-container'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.483989137711!2d-86.067283!3d39.9284159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4c7f6194cf35%3A0x560d71ce1d7ee8ed!2s9165%20Otis%20Ave%20%23243%2C%20Indianapolis%2C%20IN%2046216!5e0!3m2!1sen!2sus!4v1652972977541!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>
            </div>
            <div className='contact-form'>
                <ContactForm/>
            </div>
            </div>
        </div>
    </section>
  )
}
