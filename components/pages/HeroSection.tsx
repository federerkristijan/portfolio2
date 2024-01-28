import { HeroSectionPayload } from '@/types';

const HeroSection = ({
  title,
  subtitle,
  image,
  }: HeroSectionPayload) => {
  return (
    <div>
      <div>

      </div>
      <div>
        here comes the image
        {/* <Image src={hero.image.url} alt={hero.image.alt} /> */}
      </div>
    </div>
  )
}

export default HeroSection
