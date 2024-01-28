export interface HomePagePayload {
  title: string;
  content: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  menuItems?: MenuItem[];
}

export interface LogoProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export interface MenuItem {
  title: string;
  url: string;

}

export interface NavbarProps {
  menuItems?: MenuItem[];
}

export interface PageProps {
  page: HomePagePayload;
}
