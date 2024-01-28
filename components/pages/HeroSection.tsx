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
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <span></span>
        <div className='flex gap-4 py-6'>
          <Button onClick={() => console.log('/about')}>Discover a talent</Button>
          <Button onClick={() => console.log('/projects')}>See projects</Button>
        </div>
      </div>
      <div className='p-10'>
        <Image src={Foto} alt="foto" width={470} height={470}/>
      </div>
    </div>
  )
}

export default HeroSection
