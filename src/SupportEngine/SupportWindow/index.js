import React from 'react';
import { styles } from '../styles';

const SupportWindow = ({ visible }) => {
  return (
    <div
      className='transition-5'
      style={{
        ...styles.supportWindow,
        ...{ opacity: visible ? '1' : '0' },
      }}
    ></div>
  );
};

export default SupportWindow;
