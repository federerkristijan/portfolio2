import { HeroSectionPayload } from '@/types';
import Image from 'next/image';
import Foto from '@/assets/CV Foto Glasses 1 - Edited 1.png'
import { Button } from '../ui/Button';
import Moustache from '@/assets/moustache.png'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({
  title,
  subtitle,
  image,
  }: HeroSectionPayload) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // Rotate left and right slowly
        setRotation((prevRotation) => (prevRotation >= 0 ? -5 : 5));
      }, 500); // Set the duration for each half rotation to 0.5 seconds

      // After 45 seconds, clear the interval to pause the animation
      const pauseIntervalId = setInterval(() => {
        clearInterval(intervalId);
      }, 45000); // Set the pause duration to 45 seconds

      // Clear the pause interval when the component unmounts
      return () => {
        clearInterval(intervalId);
        clearInterval(pauseIntervalId);
      };
    }, []);

  return (
    <div className='flex justify-between px-6'>
      <div className='p-20 relative'>
        <div className=''>
          <motion.div
              // animate={{
              //   rotate: rotation,
              // }}
              // transition={{
              //   duration: 0.3, // One complete rotation in 45 seconds

              //   ease: 'linear',
              //   times: [0, 0.5, 1], // Keyframes for left rotation, default, and right rotation
              // }}

              animate={{ rotate: [rotation, 0, rotation], }}
              transition={{
                from: 60,
                duration: 0.5,
                ease: 'linear',
              }}
          >
            <Image
                src={Moustache}
                alt="animation"
                className='absolute top-[10%] left-[32%]'
              />
          </motion.div>
          <h1 className='text-7xl py-4'>{title}</h1>
        </div>
        <h2 className='text-5xl py-4'>{subtitle}</h2>
        <span className='text-3xl py-4'>I write clean code to create quality applications with intuitive user experience.</span>
        <div className='flex gap-8 py-12'>
          <Button
            className='bg-[#9B51E0] rounded-3xl text-white px-6 py-3 shadow-btn-primary w-full'
            onClick={() => console.log('/about')}
          >
            Discover a talent
          </Button>
          <Button
            className='border-2 border-[#9B51E0] rounded-3xl text-white px-6 py-3 shadow-btn-primary w-full'
            onClick={() => console.log('/projects')}
          >
            See projects
          </Button>
        </div>
      </div>
      <div className='px-10 py-20'>
        <Image src={Foto} alt="foto" width={600} height={600}/>
      </div>
    </div>
  )
}

export default HeroSection
function setRotation(arg0: (prevRotation: any) => any) {
  throw new Error('Function not implemented.');
}
