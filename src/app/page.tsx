import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
// import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h3>Home Pages</h3> 
      <Banner/>
      <Books></Books>
      
    </div>
  );
};

export default Home;