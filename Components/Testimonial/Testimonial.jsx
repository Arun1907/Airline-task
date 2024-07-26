import React from 'react';
import './Testimonial.css';
import test1 from '../../assets/test1.png'
import test2 from '../../assets/test2.png'
import test3 from '../../assets/test3.png'
import slideleft from '../../assets/Slideleft.png'
import slideright from '../../assets/Slideright.png'

const testimonials = [
    {
        name: "Sara Jay",
        role: "Traveller",
        image: test1,
        rating: 5,
        feedback: "Sky Guru Travels truly took the stress out of planning my adventure trip. From arranging accommodations to coordinating transportation, they handled every detail efficiently."
    },
    {
        name: "Cristian Daniel",
        role: "Traveller",
        image: test2,
        rating: 5,
        feedback: "As a solo traveler, I often worry about the logistics of navigating a new destination. However, with Sky Guru Travels, I felt completely at ease. Thanks to them, I was able to focus on soaking in the stunning landscapes in Bali."
    },
    {
        name: "Kausar Hasan",
        role: "Traveller",
        image: test3,
        rating: 5,
        feedback: "Sky Guru Travels made my business trip perfect. From arranging flights to securing accommodation close to my meetings, they handled it all with efficiency and professionalism. It was a relief knowing that I could focus on my work, confident that every logistical detail was expertly managed."
    }
];

const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
        <img src={testimonial.image} alt={testimonial.name} />
        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>
        <div className="stars">{'★'.repeat(testimonial.rating)}</div>
        <p>{testimonial.feedback}</p>
    </div>
);

const Testimonial = () => (
    <div className="testimonials">
        <p className='head'>Testimonial</p>
        <h1>Our Traveler Tales</h1>
        <h2>Real stories, real smiles. Hear the stories where <br/> they share their Sky Guru experiences.</h2>
        <div className='slide-img'>
        <img src={slideleft} alt='' className='slide-two' style={{height:"10%", width:"10%"}}/>
        <img src={slideright} alt='' className='slide-two' style={{height:"10%", width:"10%"}}/>
        </div>
        <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
    </div>
);

export default Testimonial;
