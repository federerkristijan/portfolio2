import { NavbarProps } from "@/types";

export function Navbar({ menuItems }: NavbarProps) {

  return (
    <div className="">
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
