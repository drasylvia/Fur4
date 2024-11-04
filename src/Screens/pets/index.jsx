import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import styles from './style.module.scss';

const Pets = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          delay: index * 0.25,
          duration: 0.3,
          ease: 'power1.out',
        },
      );
    });
  }, []);

  return (
    <section name="pets" className={styles.wrapper}>
      {['/pet1.png', '/pet3.png', '/pet2.png', '/pet4.png'].map(
        (src, index) => (
          <img
            key={index}
            src={src}
            alt={`pet image ${index + 1}`}
            ref={(el) => (imagesRef.current[index] = el)}
            style={{ width: '90px', height: '90px' }}
          />
        ),
      )}
    </section>
  );
};

export default Pets;
