import { useState } from 'react';
import { styles } from '../styles';
import { LoadingOutlined } from '@ant-design/icons';
import Avatar from '../Avatar';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const getOrCreateUser = (callback) => {
    axios
      .put(
        'https://api.chatengine.io/users/',
        {
          username: email,
          email: email,
          secret: email,
        },
        {
          headers: {
            'Private-key': process.env.REACT_APP_CE_PRIVATE_KEY,
          },
        }
      )
      .then((r) => callback(r.data));
  };
  const getOrCreateChat = (callback) => {
    axios
      .put(
        'https://api.chatengine.io/chats/',
        {
          usernames: ['Victor Jefferson', email],
          is_direct_chat: true,
        },
        {
          headers: {
            'Private-key': process.env.REACT_APP_CE_PRIVATE_KEY,
          },
        }
      )
      .then((r) => callback(r.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Sending email', email);
    getOrCreateUser((user) => {
      getOrCreateChat((chat) => console.log('success', chat));
    });
  };

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: '100%',
          opacity: '1',
        },
      }}
    >
      <div style={{ height: '0px' }}>
        <div style={styles.stripe} />
      </div>
      <div
        className='transition-5'
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? '10' : '-1',
            opacity: loading ? '0.33' : '0',
          },
        }}
      />
      <LoadingOutlined
        className='transition-5'
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? '10' : '-1',
            opacity: loading ? '1' : '0',
            fontSize: '82px',
            top: 'calc(50% - 41px)',
            left: 'calc(50% - 41px)',
          },
        }}
      />
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Avatar
          style={{
            position: 'relative',
            left: 'calc(50% - 44px)',
            top: 'calc(10%)',
          }}
        />
        <div style={styles.topText}>
          Welcome to my <br /> support 👋
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: 'relative', width: '100%', top: '19.75%' }}
        >
          <input
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
          />
        </form>
        <div style={styles.bottomText}>
          Enter your email <br /> to get started.
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
