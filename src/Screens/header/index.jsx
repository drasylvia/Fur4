import React from 'react';

import AppContainer from '../../components/container';

import styles from './style.module.scss';

const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <AppContainer className={styles.container}>
        <div className={styles.logoSection}>
          <img className={styles.logo} src="/fur4Logo.png" />
          <span className={styles.brand}>deSheddingTool</span>
        </div>
        <button className={styles.hamburger}>
          <img src="./svg/hamburger.svg" alt="hamburger" />
        </button>
      </AppContainer>
    </nav>
  );
};

export default Header;
