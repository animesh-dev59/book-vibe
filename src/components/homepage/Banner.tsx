// import Image from 'next/image';
// import React from 'react';
// import  bannerImg from '@/assets/hero_img.jpg'

// const Banner = () => {
//   return (
//     <section className='bg-slate-400 py-20'>    
//              <div className='grid grid-cols-2 gap-4 items-center container mx-auto'>
//       <div> 
//              <h3 className='font-bold text-3xl '> Books to freshen up <br /> your bookshelf</h3>
//              <button className='btn btn-success'>View The List</button>
//       </div>
//       <div>  
//          <Image src={bannerImg} alt='banner-img'/>
//       </div>
//     </div>
//     </section>
//   );  
// };

// export default Banner; 




import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="bg-slate-50 py-10 px-4 md:px-12">
      {/* Main Container with light gray/off-white rounded card background */}
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-3xl p-8 md:p-16 lg:p-20 shadow-sm">
        
        {/* Grid Layout: Mobile- e 1 column, Medium/Large screen-e 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center justify-between">
          
          {/* Left Content Side */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Books to freshen up <br className="hidden md:block" /> your bookshelf
            </h1>
            <div>
              <button className="bg-[#23BE0A] hover:bg-[#1b9a07] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all">
                View The List
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
              <Image 
                src={bannerImg} 
                alt="banner-img" 
                className="w-full h-auto object-contain drop-shadow-lg"
                priority 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;