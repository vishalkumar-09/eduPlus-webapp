import React, { useEffect, useRef } from 'react';
import styles from './featuresection.module.css';
const FeaturesCard = ({ title, description, imageUrl }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardPosition = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 100 && cardPosition > 0) {
          cardRef.current.style.opacity = '1';
          cardRef.current.style.transform = 'translateY(0)';
        } else {
          cardRef.current.style.opacity = '0';
          cardRef.current.style.transform = 'translateY(50px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.featurecard}>
      <div className={styles.featureimage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.featuredescription}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default FeaturesCard;