import { NavbarProps } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Logo from "../ui/Logo";

export function Navbar({ menuItems }: NavbarProps) {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  return (
    <div className={clsx(
      'rounded-2xl px-6 py-6 transition-all xl:px-8'
        ? 'xl:bg-white xl:shadow-lg'
        : 'xl:bg-background'
    )}>
      <nav
        className="navbar z-0 flex items-center justify-between"
        aria-label="Global"
      >
       <Logo setMobileMenuOpen={setMobileMenuOpen} />
      </nav>
    </div>
  )
}
