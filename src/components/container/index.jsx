import React from 'react';
import classNames from 'classnames';

const AppContainer = ({ children, className }) => {
  return (
    <div className={classNames('w-full max-w-7xl mx-auto px-5', className)}>
      {children}
    </div>
  );
};

export default AppContainer;
