import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Lora } from 'next/font/google';
import Image from 'next/image';
 
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'], 
  display: 'swap',
});

const GoldRate = ({ id }: { id: string }) => { 

  const rate = [
     {
    name: '24k Gold',
    rate: 9990,
    unit: '10g',
    position: true, 
    value: 24,
  },
  {
    name: '22k Gold',
    rate: 9450,
    unit: 'kg',
    position: true,
    value: 24,
  },
  {
    name: 'Silver',
    rate: 720,
    unit: 'kg',
    position: false, // ⬇️
    value: 12,
  },
  ]

  return (
    <div id={id} className='py-7 flex flex-col items-center justify-center'>
      {/* heading */}
      <div className="flex flex-col items-center justify-center  mt-4 mb-2 px-4 
      text-black py-2">
        <span className='font-serif text-[40px]' >
          Live Gold & Silver Rate
        </span>
        <span className='sub-heading text-[18px] font-serif ml-2 text-gray-500'>
          Rates Including GST - Latest metal rates updated every minute
        </span>
      </div>
      
      {/* Gold Rate */}
       <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-36 mt-8">
      {rate.map((item, index) => (
        <div
          key={index}
          className=" border-gray-400 border-2 hover:border-blue-600 rounded-md h-[238px] w-[398px] flex flex-col items-center justify-center text-center"
        >
         <h2 className={`text-[32px] ${lora.className}`}>{item.name}</h2>
          <p className="text-2xl font-bold text-red-800 mt-2">₹{item.rate}</p>

          <div
            className={`flex items-center mt-2 text-sm font-medium ${
              item.position ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {item.position ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {item.position ? '+' : '-'}₹{item.value}
          </div>
        </div>
      ))}
    </div>

  <div className="flex justify-center items-center mt-20 bg-white px-4 py-8">
  {[
    { src: "/assets/images/Jewelry.png", label: "Chain & Pendent" },
    { src: "/assets/images/game-icons_intricate-necklace.png", label: "Necklace" },
    { src: "/assets/images/Diamond_Ring.png", label: "Rings" },
    { src: "/assets/images/Earrings.png", label: "Earring" },
    { src: "/assets/images/generate-an-icon-of-mangalsutra---in-outline-forma-removebg-preview 1.png", label: "Mangalsutra" },
  ].map((item, index, array) => (
    <div key={index} className="flex items-center">
      <div className="flex flex-col items-center text-center px-23"> {/* Increased from px-6 to px-10 */}
        <Image src={item.src} alt={item.label} width={80} height={80} className="mb-2" />
        <span className="text-gray-700 text-[16px] font-serif">{item.label}</span>
      </div>
      {index !== array.length - 1 && (
        <div className="h-20 border-r border-black mx-4"></div> 
      )}
    </div>
  ))}
</div>



    </div>
  );
}

export default GoldRate