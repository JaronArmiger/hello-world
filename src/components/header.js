import React from 'react';

const Header = ({ text }) => {
  return (
    <h1
      style={{
        color: 'green'
      }}
    >
      {text}
    </h1>
  );
};

export default Header;