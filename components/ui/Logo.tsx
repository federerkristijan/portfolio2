import Image from "next/image";
// import logo from 'assets/logo.png';
import logo from '../../assets/logo.png';
import Link from "next/link";
import React from "react";
import { LogoProps } from "@/types";

const Logo = ({ setMobileMenuOpen }: LogoProps) => {
  return (
    <div>
      <Link
        href="/"
        className="-m-1.5 -mt-1 p-1.5"
        onClick={() => setMobileMenuOpen(false)}
      >
        <Image src={logo} alt="logo" width={45} height={45}/>
      </Link>
    </div>
  );
};

export default Logo;
