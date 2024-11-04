import React from 'react';

import styles from './style.module.scss';

export default function Features() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <p>Advanced</p>
        <p className="text-[#00aeef]">
          PolyCarboMax<sup>TM</sup>
        </p>
        <p>material</p>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            A better deShedding design made possible using aninnovative new
            composite carbon fiber. This ground-breaking material is incredibly
            strong and curiously lightweight, enabling the innovative and
            patented FUR4 deshedding edges with eight SafetyNubs. The end result
            is a safer, gentler, and more effective deShedding experience for
            you and your pet.
          </p>
        </div>
        <img className={styles.image} src="/blades.png" alt="" />
      </div>
    </section>
  );
}
