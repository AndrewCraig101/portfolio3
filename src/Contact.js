function Contact() {
    return (
      <div id="contact" className="contactBox">
        <div className="wrapper">
          <h3>Contact</h3>
          <form action="">
            <div className="formBox">
              <label htmlFor="name" className="sr-only">Enter your name:</label>  
              <input type="text" name="name" id="name" placeholder="Your Name" required/>
              <label htmlFor="email" className="sr-only">Enter your Email:</label>              
              <input type="email" name="name" id="name" placeholder="Your Email" required/>
            </div>
            <label htmlFor="message" className="sr-only">Enter Your Message</label>
            <textarea name="message" id="message" cols="30" rows="15" required placeholder="Let's Connect!"></textarea>
            <button className="submitButton" type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }

export default Contact;
