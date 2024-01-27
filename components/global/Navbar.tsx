import { NavbarProps } from "@/types";
import clsx from "clsx";

export function Navbar({ menuItems }: NavbarProps) {

  return (
    <div className={clsx(
      'rounded-2xl px-6 py-6 transition-all xl:px-8',
      useScrollPosition() > 0
        ? 'xl:bg-white xl:shadow-lg'
        : 'xl:bg-background'
    )}>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <a href="/" className="navbar__logo-link">
              Logo comes here
            </a>
          </div>
          <div className="navbar__links">
            <ul className="navbar__links-list">
              <li className="navbar__links-item">
                <a href="/" className="navbar__links-link">Home</a>
              </li>
              <li className="navbar__links-item">
                <a href="/about" className="navbar__links-link">About</a>
              </li>
              <li className="navbar__links-item">
                <a href="/projects" className="navbar__links-link">Projects</a>
              </li>
              <li className="navbar__links-item">
                <a href="/contact" className="navbar__links-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
