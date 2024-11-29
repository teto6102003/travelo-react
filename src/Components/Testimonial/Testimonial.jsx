import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Fetch the testimonial data from the API
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:3000/Testimonial');
                const data = await response.json();
                setTestimonials(data); // Set the data received from the API
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 7000); // Change testimonial every 3 seconds
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonial-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-container">
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial ${index === activeIndex ? 'active' : ''}`}
                        >
                            <img src={testimonial.imgSrc} alt={`Client ${testimonial.name}`} />
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.feedback}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading testimonials...</p>
                )}
            </div>
        </section>
    );
};

export default Testimonial;
