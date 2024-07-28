import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

const ScrollFade = ({ children, className }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const element = containerRef.current;

        // Determine if the current view is mobile
        const isMobile = window.innerWidth < 768;

        // Set start and end values based on whether it is mobile or desktop
        const startValue = isMobile ? "top 90%" : "top 80%";
        const endValue = isMobile ? "top 40%" : "top 10%";

        gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    markers: false
                }
            }
        );

        // Cleanup function to remove all ScrollTriggers when the component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default ScrollFade;
