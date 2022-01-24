import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contactform() {
const [state, handleSubmit] = useForm("moqrvgdj");
if (state.succeeded) {
    return (
    <div className="formNote">
        <p>Your message has been sent.</p>
        <p>Thank you for reaching out!</p>
    </div>
    )
}

    return (
        <section className="formSection"  data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >
            <div className="wrapper">
                <h3>Contact</h3>

                <form onSubmit={handleSubmit} id="fs-frm" acceptCharset="utf-8">

                    <div className="formBox">
                        <label htmlFor="name" className="sr-only">Name:</label> 
                        <input type="text" name="name" id="name" placeholder="Name" required=""/>

                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />

                        <label htmlFor="email" className="sr-only">Email:</label> 
                        <input type="text" name="email" id="email" placeholder="Email" required=""/>

                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <label htmlFor="message" className="sr-only">Enter Your Message</label>
                    <textarea
                    name="message" id="message" cols="30" rows="15" required="" placeholder="Let's Connect!"></textarea>
                    
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button className="submitButton" value="Submit" type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );

}
   
export default Contactform

