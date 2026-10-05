import React from 'react';
import BannerImg from '@/assets/hero_img.jpg'
import Image from 'next/image';

const Banner = () => {
  return (

     <section className=''>  
       <div className=' p-7 px-4 rounded-3xl bg-slate-300 container mx-auto grid grid-cols-2 gap-4 items-center '>
        <div> 
         <h2 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h2>
         <button className='btn btn-success mt-3'>View The List</button>

       </div> 
       <Image className='rounded-3xl' src={BannerImg} alt='banner-img-book'></Image>

    </div> 
     <br /><br /><br /><br /><br /><br /><br />
     </section> 

  );
};

export default Banner;