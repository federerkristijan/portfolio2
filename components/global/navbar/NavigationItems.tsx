import { NavbarProps } from '@/types'
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const iconMap: Record<string, JSX.Element> = {
  'Mail': <FiMail />,
  'LinkedIn': <FiLinkedin />,
  'GitHub': <FiGithub />,
};

const NavigationItems = ({ menuItems}: NavbarProps ) => {
  const navigation = menuItems?.map((menuItem) => {
    return {
      name: menuItem.title,
      href: menuItem.url,
    }
  });

  console.log(navigation, 'look at me')

  return (
    <div className='flex flex-row gap-24 text-2xl justify-between'>
      {navigation?.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className='text-white'
        >
          {iconMap[item.name]}
        </Link>
      ))}
    </div>
  )
}

export default NavigationItems
