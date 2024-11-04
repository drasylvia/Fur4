import React from 'react';

import styles from './style.module.scss';

export default function Video() {
  return (
    <section className={styles.wrapper}>
      <video
        src="https://strapi.fur4.com//uploads/IMG_0406_cd26221fe8.mp4"
        autoPlay
        loop={true}
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}></video>
    </section>
  );
}
