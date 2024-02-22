import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ServiceNavigationbar from './ServiceNavigationBar';
//import { Container } from 'react-bootstrap/lib/tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Col';
import './RequestService1.css'
import { useNavigate } from 'react-router-dom';
import Image10 from'./Image10.jpg';


export default function RequestService()
{
  // const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_9vyck8l', 'template_zlrxiai', form.current, {
        publicKey: '2koIU0m9uaFNrQxfi',
      })
      .then(
        () => {
          alert("Email Sent Successfully");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const handleSubmit=()=>{
  //   alert('Message Send');
  //   navigate('/');
  // }
    return(
        <Container>
          <ServiceNavigationbar/>
          
          {/* <section className="bsb-cta-1 px-2 bsb-overlay" style={{backgroundImage: `url('')`}}>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="fs-5 mb-3 text-white text-uppercase">Our Services & Expertise</h2>
        <h3 class="display-5 text-white mb-4">We are a design agency studio delivering custom creative & unique websites.</h3>
        <a href="#!" class="btn bsb-btn-2xl btn-light rounded mb-0 text-nowrap">Join Us</a>
      </div>
    </div>
  </div>
</section> */}
<div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">👉Send Confirmation👈 </h2>
        <p class="text-secondary mb-5 text-center">🖊️Service Center need to send confirmation status to the Customer for it appropriate service..✏️</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>
            {/* <Row>
                <Col sm={{ span: 12, offset: 2 }} className="mt-4">
        <form ref={form} onSubmit={sendEmail}  >
        <label >✏️Full Name</label>
        <input type="text" name="from_name" />
        <label>🖊️Email</label>
        <input type="email" name="from_email" />
        <label>🖊️Confirm Message</label>
        <textarea name="message" /> 
        <input type="submit" value="Submit"></input>
      </form>
      </Col>
      </Row> */}
      
<section class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h3 class="fs-6 text-secondary mb-2 text-uppercase text-center">Get in Touch</h3>
        <h2 class="display-5 mb-4 mb-md-5 text-center">We're always on the lookout to work with new clients.</h2>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-xl-center">
      <div class="col-12 col-lg-6">
        <img class="img-fluid rounded" loading="lazy"  src={Image10} alt="heropageImg" style={{height:'550px'}}/>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <div class="bg-white border rounded shadow-sm overflow-hidden">

              <form ref={form} onSubmit={sendEmail}>
                <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                  <div class="col-12">
                    <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="fullname" name="from_name" required/>
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                      </span>
                      <input type="email" class="form-control" id="email" name="from_email"  required/>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="phone" class="form-label">Phone Number</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                      </span>
                      <input type="tel" class="form-control" id="phone" name="phone"/>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label">Subject <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="subject" name="subject" required/>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                    <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button class="btn btn-primary btn-lg" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </Container>
    )
}
