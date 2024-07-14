import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

const ScrollFade = ({ children, className }) => {
    // Create a reference to the container element
    const containerRef = useRef(null);

    useEffect(() => {
        // Get the current DOM element from the reference
        const element = containerRef.current;

        // Apply gsap animation with ScrollTrigger
        gsap.fromTo(element, 
            { opacity: 0, y: 50 }, // Starting properties: invisible and translated down by 50px
            {
                opacity: 1, // Ending properties: fully visible
                y: 0,       // Translated to original position
                ease: "power2.out", // Ease function for smooth transition
                scrollTrigger: {
                    trigger: element, // Element that triggers the animation
                    start: "top 70%", // Animation starts when the top of the element reaches 80% of the viewport height
                    end: "top 10%",   // Animation ends when the top of the element reaches 30% of the viewport height
                    scrub: true,       // Smooth scrubbing effect
                    markers: false
                }
            }
        );

        // Cleanup function to remove all ScrollTriggers when the component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []); // Empty dependency array to run only once on component mount

    return (
        // Assign the reference and className to the div wrapping the children
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default ScrollFade;
