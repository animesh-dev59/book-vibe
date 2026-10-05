import Banner from '@/components/homepage/Banner';
import { Banner1 } from '@/components/homepage/Banner1';
import Books from "@/components/homepage/Books";
import React from 'react';

const Home = () => {
  return (
    <div>
      <h3>Home Pages</h3>
      {/* <Banner></Banner>  */}
       <Banner1/>  
      <Books></Books>
    </div>
  );
};

export default Home;