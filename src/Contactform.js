import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contactform() {
  const [state, handleSubmit] = useForm("moqrvgdj");
  if (state.succeeded) {
      return <p>Thank you for reaching out!</p>;
  }

// ***********

// class Contactform extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

// }
// render() {}


    return (
        <div className="wrapper">
                <h3>Contact</h3>

                <form onSubmit={handleSubmit} id="fs-frm" acceptCharset="utf-8" action="https://formspree.io/f/moqrvgdj" method="post">

                    <div className="formBox">
                        <label htmlFor="name" className="sr-only">Name:</label> 
                        <input type="text" name="name" id="name" placeholder="Your Name" required=""/>

                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />

                        <label htmlFor="email" className="sr-only">Email:</label> 
                        <input type="text" name="email" id="email" placeholder="Enter your email" required=""/>

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
    );

}
   
export default Contactform

