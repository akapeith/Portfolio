import { useRef, useState, useEffect } from 'react';
import '../../index.css';
const FadeInRight = ({ children }) => {
  const elementRef = useRef(); // reference to the HTML element
  const [isVisible, setIsVisible] = useState(false); // control visibility

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // show the element
      }
    });
    if(elementRef.current) observer.observe(elementRef.current); // observe the element

    return () => observer.disconnect(); // clean up
  }, []);

  return (
    <div
      ref={elementRef}
      className={`fade-in-right ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInRight;
