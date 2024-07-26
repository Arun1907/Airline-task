// Window.js
import React, { useState, useEffect } from "react";
import "./Window.css";
import first from "../../assets/one.png";
import second from "../../assets/two.png";
import third from "../../assets/three.png";
import arrow from "../../assets/arrow.png";
import bg from "../../assets/lay.png";
import bird from "../../assets/birds.png";
import cloud from "../../assets/Cloud.png";

const Window = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const images = [first, second, third];

  const [currentText, setCurrentText] = useState(0);
  const texts = [
    <>
      Attention Passengers:
      <br />
      <span className="highlight">Your journey is about to begin. <br/>
      </span> Please
      ensure your seatbelts are fastened and your <br /> window shades are down
    </>,
    <>
      Ladies and Gentlemen, <br /> we are now preparing for takeoff. As we
      ascend, <br/>
      <span className="highlight">
        enjoy a glimpse of the world beyond.
      </span><br/>
      Stay tuned for the full view.
    </>,
    <>
      Welcome to the world above the clouds!
      <br /> Your adventure awaits.<br/>
      <span className="highlight">
        Explore stunning destinations with Sky Guru Travels.
      </span><br/>
      .Fasten your seatbelts and get ready for an unforgettable journey.
    </>,
  ];

  useEffect(() => {
    const intervals = [];

    const startInterval = (index, delay) => {
      return setInterval(() => {
        setIsOpen((prevState) => {
          const newState = [...prevState];
          newState[index] = !newState[index];
          return newState;
        });
      }, delay);
    };

    intervals.push(startInterval(0, 4000)); 
    intervals.push(startInterval(1, 8000)); 
    intervals.push(startInterval(2, 6000)); 


    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsOpen([false, false, false]);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const birdElement = document.querySelector(".background-image1");
      const cloudElement = document.querySelector(".background-image2");

      if (birdElement && cloudElement) {
        birdElement.style.transform = `translate(${scrollPosition * 0.5}px, ${scrollPosition * 0.2}px)`;
        cloudElement.style.transform = `translate(${scrollPosition * 0.3}px, ${scrollPosition * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="airplane-window-container">
      <img src={bg} alt="Background" className="background-image" />
      <img src={bird} alt="birds" className="background-image1" />
      <img src={cloud} alt="cloud" className="background-image2" />
      <div className="windows-row">
        {isOpen.map((state, index) => (
          <div key={index} className={`window ${state ? "open" : "closed"}`}>
            <div
              className="window-inner"
              onClick={() => toggleWindow(index)}
            ></div>
            <img
              src={images[index]}
              alt={`View ${index + 1}`}
              className="window-image"
            />
          </div>
        ))}
      </div>
      <p className="instruction">{texts[currentText]}</p>
      <img className="arrow" src={arrow} alt="arrow" />
    </div>
  );
};

export default Window;
