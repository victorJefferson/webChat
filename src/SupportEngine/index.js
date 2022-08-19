import { useRef, useEffect, useState } from 'react';
import Avatar from './Avatar';
import SupportWindow from './SupportWindow';
import { styles } from './styles';

const SupportEngine = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={styles.supportPositionBottomRight}
      />
    </div>
  );
};

export default SupportEngine;
