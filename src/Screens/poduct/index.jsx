import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { Canvas } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cylinder, Torus } from '@react-three/drei';

import { Brush } from '../../Brush';

import styles from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ProductView = () => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const modelRef = useRef();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  const warnImageRef = useRef();
  const nubsRef = useRef();
  const buttonRef = useRef();
  const gentlerRef = useRef();
  const safetyRef = useRef();

  useEffect(() => {
    let animation;

    const interVal = setInterval(() => {
      if (
        containerRef.current &&
        canvasRef.current &&
        modelRef.current &&
        section1.current &&
        section2.current &&
        section3.current &&
        warnImageRef.current &&
        nubsRef.current &&
        buttonRef.current &&
        gentlerRef.current &&
        safetyRef.current
      ) {
        clearInterval(interVal);

        const gentlerMaterials = gentlerRef.current.children.map(
          (item) => item.material,
        );
        const safetyMaterials = safetyRef.current.children
          .map((item) => item.children.map((chi) => chi.material))
          .flat();

        const container = containerRef.current;
        const containerHeight = container.clientHeight;

        animation = gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top',
              end: `+=${containerHeight * 7}`,
              scrub: 1,
              pin: true,
            },
          })
          .to(modelRef.current.scale, {
            x: 0.47,
            y: 0.47,
            z: 0.47,
            duration: 1.2,
          })
          .to(
            modelRef.current.rotation,
            {
              y: `-=${Math.PI}`,
              duration: 1.2,
              ease: 'power4.inOut',
            },
            '<',
          )
          .to(
            section1.current,
            {
              opacity: 1,
              duration: 0.5,
              ease: 'power4.inOut',
            },
            '<+.7',
          )
          .to(
            section1.current,
            {
              opacity: 0,
              duration: 0.2,
              ease: 'power4.inOut',
            },
            '>.8',
          )
          .to(
            modelRef.current.rotation,
            {
              y: `-=${1.5 * Math.PI}`,
              duration: 1.2,
              ease: 'power4.inOut',
            },
            '<',
          )
          .to(
            section2.current,
            {
              opacity: 1,
              duration: 0.4,
              ease: 'power4.inOut',
            },
            '<.8',
          )
          .to(
            modelRef.current.rotation,
            {
              z: -0.6,
              y: `+=${1.3 * Math.PI}`,
              duration: 1.2,
              ease: 'power4.inOut',
            },
            '>',
          )
          .to(
            warnImageRef.current,
            {
              y: '+=200',
              duration: 0.3,
            },
            '<.5',
          )
          .to(
            buttonRef.current,
            {
              opacity: 0,
            },
            '<-.3',
          )
          .to(
            safetyMaterials,
            {
              opacity: 0.9,
              duration: 1,
              ease: 'power4.inOut',
            },
            '>-.2',
          )
          .to(
            nubsRef.current,
            {
              opacity: 1,
              duration: 1,
              y: '+=20',
            },
            '>-.5',
          )
          .to(
            section2.current,
            {
              opacity: 0,
              duration: 0.3,
              ease: 'power4.inOut',
            },
            '>',
          )
          .to(
            safetyMaterials,
            {
              opacity: 0,
              duration: 1,
              ease: 'power4.inOut',
            },
            '<',
          )
          .to(
            modelRef.current.rotation,
            {
              y: `-=${2.1 * Math.PI}`,
              duration: 1.2,
              ease: 'power4.inOut',
            },
            '<',
          )
          .to(
            section3.current,
            {
              opacity: 1,
              duration: 0.3,
              ease: 'power4.inOut',
            },
            '<.5',
          )
          .to(
            gentlerMaterials,
            {
              opacity: 0.9,
              duration: 0.5,
            },
            '<',
          )
          .to(
            modelRef.current.rotation,
            {
              z: 0,
              y: -Math.PI,
              duration: 1.2,
              ease: 'power4.inOut',
            },
            '<.3',
          )
          .to(
            section3.current,
            {
              opacity: 0,
              duration: 0.3,
              ease: 'power4.inOut',
            },
            '<.8',
          )
          .to(
            gentlerMaterials,
            {
              opacity: 0,
              duration: 0.3,
            },
            '<',
          );
      }
    }, 100);

    return () => {
      clearInterval(interVal);
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div ref={canvasRef} className={styles.canvas}>
        <div className={styles.canvasContent}>
          <Canvas
            style={{
              width: '100%',
              height: '100%',
              top: 0,
            }}>
            <ambientLight />
            <directionalLight position={[0, 2, 3]} />
            <pointLight
              position={[2, 1.5, 1]}
              intensity={3}
              distance={5}
              decay={0}
            />
            <group
              ref={modelRef}
              position={[0, 0, 0]}
              rotation={[0, Math.PI, 0]}
              dispose={null}
              scale={0.6}>
              <Brush gentlerMode={false} />
              <group position={[0, 0.3, 0]} ref={gentlerRef}>
                {[
                  [0, 5.5, 1.8],
                  [0, 4.1, 1.8],
                  [0, 2.7, 1.8],
                  [0, 1.3, 1.8],
                ].map((pos, idx) => (
                  <Cylinder
                    key={idx}
                    args={[0.1, 0.1, 3.5]}
                    position={pos}
                    rotation={[0, 0, Math.PI / 2]}>
                    <meshStandardMaterial
                      color="orange"
                      transparent
                      opacity={0}
                    />
                  </Cylinder>
                ))}
              </group>
              <group position={[0, 0.3, 0]} ref={safetyRef}>
                {[
                  [0, 5.54, 1.9],
                  [0, 4.14, 1.9],
                  [0, 2.75, 1.9],
                  [0, 1.36, 1.9],
                ].map((pos, idx) => (
                  <group key={idx}>
                    <Torus
                      args={[0.28, 0.02, 128, 128]}
                      position={[pos[0] - 1.75, pos[1], pos[2]]}
                      rotation={[0, 0, Math.PI / 2]}>
                      <meshStandardMaterial
                        color="orange"
                        transparent
                        opacity={0}
                      />
                    </Torus>
                    <Torus
                      args={[0.28, 0.02, 128, 128]}
                      position={[pos[0] + 1.95, pos[1], pos[2]]}
                      rotation={[0, 0, Math.PI / 2]}>
                      <meshStandardMaterial
                        color="orange"
                        transparent
                        opacity={0}
                      />
                    </Torus>
                  </group>
                ))}
              </group>
            </group>
          </Canvas>
        </div>
        <div className={styles.content}>
          <div className={styles.sectionArea}>
            <div ref={section1} className={styles.section}>
              <h2 className={styles.heading}>FUR 4</h2>
              <p className={styles.description}>
                Designed to dramatically reduce shedding for dogs and cats
              </p>
              <p className={styles.description}>Patented Technology</p>
            </div>
            <div ref={section2} className={styles.section}>
              <h2 className={styles.heading}>Safer</h2>
              <div ref={warnImageRef} className={styles.warnImage}>
                <img className={styles.image} src="/noHarshBlades.png" alt="" />
                <h2 className={styles.warnHeading}>NO HARSH</h2>
                <h2 className={styles.warnHeading}>METAL BLADES</h2>
              </div>
              <div ref={nubsRef} className={styles.nubs}>
                <h3 className={styles.nubsHeading}>
                  EIGHT
                  <span className={styles.highlight}>
                    SafetyNubs<sup className={styles.sup}>TM</sup>
                  </span>
                </h3>
                <p className={styles.nubDescription}>
                  to prevent scrapping and irritation
                </p>
                <div className={styles.arrow}>
                  <img
                    src="/arrow.svg"
                    alt="img"
                    className={styles.arrowImage}
                  />
                </div>
              </div>
              <button ref={buttonRef} className={styles.button}>
                Learn More
              </button>
            </div>
            <div
              ref={section3}
              className={classNames(styles.section, styles.section3)}>
              <h2 className={styles.heading}>Gentler</h2>
              <p className={styles.description}>
                Four deSheding edges spread out pressure for a comforable
                grooming experience without damaging your dog s topcoat.
              </p>
              <p className={styles.description}>
                Gently removes loose hair and undercoat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
