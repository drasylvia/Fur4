import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cylinder, Torus } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AppCanvas from '../../components/canvas';
import { Brush } from '../../Brush';

import styles from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ProductVersion2 = () => {
  const containerRef = useRef();
  const brushRef = useRef();

  useEffect(() => {
    const interVal = setInterval(() => {
      if (containerRef.current && brushRef.current) {
        clearInterval(interVal);

        const containerHeight = containerRef.current.clientHeight;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top',
              end: `+=${containerHeight * 6}`,
              pin: true,
              scrub: 1,
            },
          })
          //Screen 1
          .set(brushRef.current.rotation, { x: 0, z: 0.4 * Math.PI, y: 0 }, '>')
          .set(brushRef.current.scale, { x: 1, y: 1, z: 1 })
          .fromTo(brushRef.current.position, { y: -7, duration: 1 }, { y: 0 })
          .to(brushRef.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1 })
          .to(brushRef.current.rotation, { x: 0.1, y: `+=${2 * Math.PI}`, z: `-=${0.8 * Math.PI}`, duration: 1 }, '<')
          .to(brushRef.current.position, { y: 7, duration: 1 }, '>')
          //Screen 2
          .set(brushRef.current.rotation, { x: 0, z: 0.4 * Math.PI, y: 0 }, '>')
          .set(brushRef.current.scale, { x: 1, y: 1, z: 1 })
          .fromTo(brushRef.current.position, { y: -7, duration: 1 }, { y: 0 })
          .to(brushRef.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1 })
          .to(brushRef.current.rotation, { x: 0.1, y: `+=${2 * Math.PI}`, z: `-=${0.8 * Math.PI}`, duration: 1 }, '<')
          .to(brushRef.current.position, { y: 7, duration: 1 }, '>')
          //Screen 3
          .set(brushRef.current.rotation, { x: 0, z: 0.4 * Math.PI, y: 0 }, '>')
          .set(brushRef.current.scale, { x: 1, y: 1, z: 1 })
          .fromTo(brushRef.current.position, { y: -7, duration: 1 }, { y: 0 })
          .to(brushRef.current.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 1 })
          .to(brushRef.current.rotation, { x: 0.1, y: `+=${2 * Math.PI}`, z: `-=${0.8 * Math.PI}`, duration: 1 }, '<')
          .to(brushRef.current.position, { y: 7, duration: 1 }, '>');
      }
    }, 1000);

    return () => clearInterval(interVal);
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={styles.canvas}>
        <AppCanvas>
          <group ref={brushRef} position={[0, 0, 0]} rotation={[0, 0, 0]} dispose={null} scale={1}>
            <Brush gentlerMode={false} />
          </group>
        </AppCanvas>
      </div>
    </div>
  );
};

export default ProductVersion2;
