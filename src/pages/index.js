import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';

const Home = () => {
  return (
    <div style={{ color: `purple` }}>
      <Link to='/contact'>Contact</Link>
      <Header text='scooby doo'/>
      <p>escape from escrambles egg island</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
};
export default Home;