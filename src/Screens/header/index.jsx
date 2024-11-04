import React from 'react';

import styles from './style.module.scss';

const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <img className={styles.logo} src="/fur4Logo.png" />
    </nav>
  );
};

export default Header;
