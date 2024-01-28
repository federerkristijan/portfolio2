import { MenuItem, NavbarProps } from '@/types'
import Link from 'next/link';

const NavigationItems = ({ menuItems}: NavbarProps ) => {
  const navigation = menuItems?.map((menuItem) => {
    return {
      name: menuItem.title,
      href: menuItem.url,
    }
  });

  return (
    <div>
      {navigation?.map((item) => (
        <Link
          key={item.name}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default NavigationItems
