import BannerImg1 from '@/assets/hero_img.jpg'
import Image from 'next/image';
export function Banner1() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-gray-100 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Books to freshen up your bookshelf
          </h1>
          <button className="px-6 py-3.5 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition">
            View The List
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-auto flex justify-center">
          {/* Ekhane apnar boi-er image URL ba import kora variable boshiye diben */}
          <Image src={BannerImg1} alt="Book Cover" className="w-64 md:w-80 shadow-2xl rounded-lg" />
        </div>

      </div>
    </div>
  );
}