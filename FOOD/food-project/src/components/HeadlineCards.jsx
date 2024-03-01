import React from 'react';

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO'S Out</p>
              <p className='px-2'>Through 8/26</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-200px w-full object-cover rounded-xl ' 
            src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?b=1&s=612x612&w=0&k=20&c=O6f05DPG0yuRLpMxTRX5qTv4T8jZLrYMNT0ZePoYnuQ="
            alt="/"/>
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restuarents</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
          </div>
            <img className='max-h-[160px] md:max-h-200px w-full object-cover rounded-xl ' 
            src="https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?b=1&s=612x612&w=0&k=20&c=ENiwiKPJOCT7PhV9BlHBmVoyiOeGX3zaCRgjiKara5Q="
            alt="/"/>
        </div>

        {/* Card */}
          <div className='rounded-xl relative'>
          {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>We Deliver Deserts Too</p>
              <p className='px-2'>Tasty Treats</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-200px w-full object-cover rounded-xl ' 
            src="https://images.pexels.com/photos/10522941/pexels-photo-10522941.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="/"/>
        </div>
        
    </div>
  );
};
