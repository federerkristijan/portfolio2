export interface LayoutProps {
  children: React.ReactNode;
  menuItems?: MenuItem[];
}

export interface LogoProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export interface MenuItem {
  text: string;
  url: string;
}

export interface NavbarProps {
  menuItems?: MenuItem[];
}
