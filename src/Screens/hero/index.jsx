import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroBannerRef = useRef();
  const containerRef = useRef();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    if (heroBannerRef.current && containerRef.current) {
      setLoading(true);
    }
  }, [heroBannerRef.current, containerRef.current]);

  useEffect(() => {
    if (heroBannerRef.current && containerRef.current) {
      const container = containerRef.current;
      const containerHeigh = container.clientHeight;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top',
            end: `bottom`,
            pin: true,
            scrub: 1,
          },
        })
        .to(heroBannerRef.current, {
          y: '-=200',
          duration: 1,
        });
    }
  }, [loading]);

  return (
    <section ref={containerRef} className={styles.wrapper}>
      <div className={styles.content}>
        <img className={styles.logo} src="/fur4Logo.png" />
        <div
          ref={heroBannerRef}
          className={classNames('blueBg', styles.heading)}>
          de<span className="text-white">Shedding</span> Tool
        </div>
        <div className={styles.heroContent}>
          <img className={styles.logo} src="/logoFur4Patent.png" />
          <div className={styles.text}>
            <p>THE</p>
            <p className="text-5xl">SAFER,</p>
            <p className="text-5xl">GENTLER,</p>
            <p className="text-4xl">MORE EFFECTIVE</p>
            <p className="text-3xl">TOOL</p>
          </div>
          <img className={styles.brush} src="/frontView90.png" />
        </div>
        <p className={styles.description}>
          Designed to dramatically reduce shedding for dogs and cats
        </p>
      </div>
    </section>
  );
}
