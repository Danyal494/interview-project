import React from 'react';

const Slider = () => {
  const images = Array(12).fill('image 10.png');

  return (
    <div className='flex justify-center max-md:mt-25 items-center gap-20 p-4 overflow-hidden bg-[#121212]'>
      {images.map((src, index) => (
        <img className='size-[60px] mx-auto' key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Slider;