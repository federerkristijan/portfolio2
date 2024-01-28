import { NavbarProps } from "@/types";
import { useState } from "react";
import Logo from "../../ui/Logo";
import NavigationItems from "./NavigationItems";

export function Navbar({ menuItems }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 py-6 transition-all xl:px-8 xl:shadow-lg xl:bg-background border-b border-blue-500 xl:border-none">
      <nav
        className="Navbar z-0 flex items-center justify-between "
        aria-label="Global"
      >
        <Logo setMobileMenuOpen={setMobileMenuOpen} />
        <NavigationItems />
      </nav>
    </div>
  );
}
