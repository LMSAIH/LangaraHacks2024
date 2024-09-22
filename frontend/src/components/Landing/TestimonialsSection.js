import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialsSection = () => {

  useEffect(() => {
    AOS.init({
      
      duration: 1000,  // Animation duration
      once: false,
      dataAosDelay:500,

    });
  }, []);

  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <div className="testimonials">
        <div data-aos="fade-up" className="testimonial">
          <p>"This app helped me save $500 in just two months! It's so easy to use."</p>
          <span>- Axel Velasquez</span>
        </div>
        <div data-aos="fade-up" className="testimonial">
          <p>"I love how simple it is to manage my budget and set savings goals."</p>
          <span>- Lana Cambeses</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
