import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div style={{ color: `purple` }}>
      <Link to='/'>Home</Link>
      <Header text='Contact'/>
      <p>escape from escrambles egg island</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
};
export default Contact;