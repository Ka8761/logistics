import React, { useState, useEffect, useRef } from 'react';
//import Button from 'react-bootstrap/Button';

const Typewriter = () => {
    const fulltext = 'Testimonials';
    const [displayText, setDisplayText] = useState('');
    const [startTyping, setStartTyping] = useState(false);
   const elementRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{if (entry.isIntersecting){setStartTyping(true);observer.disconnect();}},
            {threshold: 0.5,}
        );

            if(elementRef.current){
                observer.observe(elementRef.current)
            }
            return () => observer.disconnect(); 
    },[])
    useEffect(()=>{
        if(!startTyping) return;
         let index= 0;
        const interval = setInterval(() => {
        setDisplayText(fulltext.slice(0, index + 1))
        index++;
         if (index === fulltext.length) clearInterval(interval);
        }, 500)
          return () => clearInterval(interval);
    },[startTyping])
  return (
    <div    ref={elementRef}>{displayText}</div>
  )
}

export default Typewriter