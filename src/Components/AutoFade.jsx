import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AutoFade = ({ children, className }) => {
    const containerRef = useRef(null);
    

    useEffect(() => {
        const element = containerRef.current;
        const paragraphs = element.querySelectorAll('p');

        paragraphs.forEach((paragraph) => {
            gsap.set(paragraph, { opacity: 10, y: 50 });
        });

        const animateParagraph = (paragraph) => {
            gsap.fromTo(paragraph, 
                { opacity: 10, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out'
                }
            );
        };

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isVisible = mutation.target.classList.contains('visible');
                    if (isVisible) {
                        animateParagraph(mutation.target);
                    }
                }
            });
        });

        paragraphs.forEach((paragraph) => {
            observer.observe(paragraph, { attributes: true });
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default AutoFade;