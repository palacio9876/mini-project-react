import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


export const ContactUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(refForm.current);
        const serviceId = 'service_26q8m2q'
        const templateId = 'template_dhtnrru'

        const apikey = 'rimM_flGzSdxZCLhn'


        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then((result) =>
                console.log(result.text)
            ).catch(error => console.error(error))

    }


    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2>contact Us</h2>
                <p>Please fill this form</p>
            </div>
            <fieldset className='fiel-name'>
                <label className='symbol-required name' htmlFor="">Name</label>
                <input type="text" name="username" id="username" placeholder='Ingrese su nombre' required />
            </fieldset>
            <fieldset className='fiel-email'>
                <label className='symbol-required ' htmlFor="">Email</label>
                <input type="email" name="email" id="email" placeholder='Ingrese su email' required />
            </fieldset>
            <fieldset className='fiel-message'>
                <label className='symbol-required '>email</label>
                <textarea maxLength="500" placeholder='insert your message' name='message' id='' cols="30" rows="10" required ></textarea>
            </fieldset>

            <button className='btn-send'>Send</button>
        </form>
    )
}