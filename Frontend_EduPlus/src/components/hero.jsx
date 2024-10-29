import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
    const texts = ["WELCOME TO MY WEBSITE", "EDU+ WEBAPP"];
    const typingSpeed = 100; // Typing speed
    const deletingSpeed = 50; // Deleting speed
    const delayBetweenTexts = 2000; // Delay before switching to next text

    const [textIndex, setTextIndex] = useState(0); // Index of the current text in `texts`
    const [displayedText, setDisplayedText] = useState(''); // The text currently displayed
    const [isDeleting, setIsDeleting] = useState(false); // If true, deleting; otherwise, typing

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];

            if (!isDeleting) {
                // Typing characters
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.substring(0, displayedText.length + 1));
                } else {
                    // Start deleting after delay
                    setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                }
            } else {
                // Deleting characters
                if (displayedText.length > 0) {
                    setDisplayedText(currentText.substring(0, displayedText.length - 1));
                } else {
                    // Move to the next text once fully deleted
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        // Set interval for typing and deleting speed
        const interval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        // Cleanup interval on unmount
        return () => clearTimeout(interval);
    }, [displayedText, isDeleting, textIndex]);

    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.typingAnimation}>{displayedText}</h1>
                <p>Your one-stop solution for all your needs.</p>
                <a href="#services" className={styles.ctaButton}>Get Started</a>
            </div>
        </section>
    );
};

export default Hero;
