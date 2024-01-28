import { HeroSectionPayload } from '@/types';
import Image from 'next/image';
import Foto from '@/assets/CV Foto Glasses 1 - Edited 1.png'
import { Button } from '../ui/Button';

const HeroSection = ({
  title,
  subtitle,
  image,
  }: HeroSectionPayload) => {
  return (
    <div className='flex justify-between px-6'>
      <div className='p-20'>
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
