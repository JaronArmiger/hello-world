import React from "react";
import Header from '../components/Header';

const About = () => {
  return (
    <div style={{ color: `purple` }}>
      <Header text='about'/>
      <p>escape from escrambles egg island</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
};
export default About;