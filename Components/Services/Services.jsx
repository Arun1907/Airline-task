import React from 'react';
import './Services.css';
import bestser from '../../assets/bestser.png'
import bestpri from '../../assets/bestpri.png'
import bestac from '../../assets/bestac.png'
import linkarrow from '../../assets/linkarrow.png'
import arrow from '../../assets/Silde.png'

const Services = () => {
  return (
    <section className="services">
      <h1>Why Sky Guru?</h1>
      <p>Vacations are special, and you deserve to spend them <br/> the right way!</p>
      <img src={arrow} className='slide' alt=''/>
      <div className="cards">
        <div className="card">
          <img src={bestser} alt="Best Service Icon" className="icon"  style={{height:"90px", width:"90px"}}/>
          <h2>Best Service</h2>
          <p>
            Beyond just a trip; we are all about crafting unforgettable experiences.
            With our warm smiles and personalized attention, every moment of your
            journey is stress-free and memorable.
          </p>
          <a href="#" className="learn-more">
            Learn more <img src={linkarrow} alt="Arrow" className="arrow" />
          </a>
        </div>
        <div className="card">
          <img src={bestpri} alt="Best Price Assurance Icon" className="icon" style={{height:"90px", width:"90px"}}/>
          <h2>Best Price Assurance</h2>
          <p>
            Worried about breaking the bank? Fear not! At Sky Guru Travels, we promise
            the best prices for your dream adventures. Get ready for unbeatable deals
            without compromising on quality.
          </p>
          <a href="#" className="learn-more">
            Learn more <img src={linkarrow} alt="Arrow" className="arrow" />
          </a>
        </div>
        <div className="card">
          <img src={bestac} alt="Best Lodging Choices Icon" className="icon" style={{height:"90px", width:"90px"}}/>
          <h2>Best Lodging Choices</h2>
          <p>
            From cozy hideaways to luxurious resorts, we've handpicked the finest
            accommodations just for you. Rest easy knowing that wherever you lay your
            head.
          </p>
          <a href="#" className="learn-more">
            Learn more <img src={linkarrow} alt="Arrow" className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
