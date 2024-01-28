import { HeroSectionPayload } from '@/types';
import Image from 'next/image';
import Foto from '@/assets/CV Foto Glasses 1 - Edited 1.png'
import { Button } from '../ui/Button';
import Moustache from '@/assets/moustache.png'
import { useEffect, useState } from 'react';

const HeroSection = ({
  title,
  subtitle,
  image,
  }: HeroSectionPayload) => {
    const [isRattling, setIsRattling] = useState(false);

    useEffect(() => {
      const rattlingInterval = setInterval(() => {
        setIsRattling(true);
        setTimeout(() => setIsRattling(false), 500); // Adjust the duration of the rattle effect
      }, 15000); // Set the interval for every 15 seconds

      return () => clearInterval(rattlingInterval);
    }, []);

  return (
    <div className='flex justify-between px-6'>
      <div className='p-20 relative'>
        {/* {isRattling && (<div
          className='moustache-container absolute top-[12%] left-[44%]'
        >
          <Image
            src={Moustache}
            alt="animation"
          />
        </div>)} */}
        <Image
            src={Moustache}
            alt="animation"
            className='absolute top-[12%] left-[44%]'
          />
        <h1 className='text-7xl py-4'>{title}</h1>
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
