import { ArrowRight } from 'lucide-react';
import React from 'react'

export default function ContactForm() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e71062bb-4879-43f5-b5b8-2e799bf5ceed");

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
    <div>
        <form onSubmit={onSubmit}>
            <div className='input-container'>
                <label>Name*</label>
                <input type="text" name="name" required/>
            </div>
            <div className='input-container'>
                <label>Email*</label>
                <input type="email" name="email" required/>
            </div>
            <div className='input-container'>
                <label>Message*</label>
                <textarea name="message" required></textarea>
            </div>
                <button className='learn-more red center' type="submit">Send Message <ArrowRight/></button>
      </form>
      <span>{result}</span>
    </div>
  )
}
