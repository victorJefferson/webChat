import React, { useState } from 'react';
import { styles } from './styles';

const Avatar = ({ style, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={style}>
      <div
        className='transition-3'
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? '1' : '0' },
        }}
      >
        Hey it's Victor!
      </div>
      <div
        className='transition-3'
        onClick={() => onClick && onClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' },
        }}
      />
    </div>
  );
};

export default Avatar;
