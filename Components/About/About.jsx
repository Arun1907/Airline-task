import React from 'react';
import './About.css';
import slide from '../../assets/Silde.png';
import grp1 from '../../assets/grp1.png';
import grp2 from '../../assets/grp2.png';
import grp3 from '../../assets/grp3.png';
import topcurve from '../../assets/curve.png'

const About = () => {
  return (
    <div className="about">
    <img src={topcurve} alt="Purple Decor" className="purple-image" />
      <h1 className="title">Explore new worlds with <br/> exotic natural scenery</h1>
      <p className="subtitle">Explore the world with what you love beautiful natural beauty.</p>
      <img src={slide} alt='' className='slide'/>
      <div className="image-container">
        <div className="card" style={{height:"10%"}}>
          <img src={grp1} alt="Image 1" className="image" />
          <div className="overlay">
            <h2>Make a plan</h2>
            <p>Wonderful place to visit Bali, Istanbul, Rome, Paris.</p>
          </div>
        </div>
        <div className="card" style={{height:"10%"}}>
          <img src={grp2} alt="Image 2" className="image" />
          <div className="overlay">
            <h2>Bali, Indonesia.</h2>
            <p>Bali is a beautiful tourist spot and is visited by many travelers.</p>
          </div>
        </div>
        <div className="card" style={{height:"10%"}}>
          <img src={grp3} alt="Image 3" className="image" />
          <div className="overlay">
            <h2>New York, USA</h2>
            <p>The Statue of Liberty is a symbol of freedom and democracy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
