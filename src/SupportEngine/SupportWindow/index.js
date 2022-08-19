import React from 'react';
import { styles } from '../styles';
import EmailForm from './EmailForm';

const SupportWindow = ({ visible }) => {
  return (
    <div
      className='transition-5'
      style={{
        ...styles.supportWindow,
        ...{ opacity: visible ? '1' : '0' },
      }}
    >
      <EmailForm />
    </div>
  );
};

export default SupportWindow;
