// components/pages/HomePage.tsx
import React from 'react';
import { PageProps } from '@/types';
import HeroSection from './HeroSection';

export default function HomePage(props: PageProps) {
  const { page } = props;

  const section = {
    hero: page?.heroSection,
  };

  return (
    <div className='bg-[#11111111]'>
      hello
      <HeroSection page={page} section={section} />
    </div>
  );
}
