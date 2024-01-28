import { NavbarProps } from "@/types";
import { useState } from "react";
import Logo from "../../ui/Logo";
import NavigationItems from "./NavigationItems";
import { menuItems } from "./menuItems";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 py-6 transition-all xl:px-8 xl:shadow-lg xl:bg-background border-b">
      <nav
        className="navbar z-0 flex items-center justify-between border-white"
        aria-label="Global"
      >
        <div className="border-red-200 ">
          <Logo setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        <NavigationItems menuItems={menuItems}/>
      </nav>
    </div>
  );
}
