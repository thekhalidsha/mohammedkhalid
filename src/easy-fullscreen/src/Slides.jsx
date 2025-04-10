import React, { useState } from 'react';
import styles from './Slides.module.css';

const Slides = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollToSlide = (index) => {
    console.log(12345)
    const slide = document.querySelectorAll(`.${styles.y_wrapper} > *`)[index];
    console.log(slide)
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSlide(index);
    }
  };
  const navDotsCount = children.length
  return (
    <>
      <div className={`${styles.y_wrapper}`}>
        {children}
      </div>
      <div className={styles['nav-dots']}>
        {[...Array(navDotsCount)].map((_, index) => (
          <div
            key={index}
            className={`${styles['nav-dot']} ${activeSlide === index ? styles.active : ''}`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Slides;
