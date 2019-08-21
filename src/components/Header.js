import "./Header.scss";

const Header = () => {
  const Navbar = document.createElement("nav");
  const NavLinks = document.createElement("ul");
  let NavNames = ["Home", "Menu", "About", "Contact"];

  NavNames.forEach(name => {
    const NavLink = document.createElement("li");
    NavLink.textContent = name;
    NavLinks.appendChild(NavLink);
  });

  Navbar.appendChild(NavLinks);

  return Navbar;
};

export default Header;
