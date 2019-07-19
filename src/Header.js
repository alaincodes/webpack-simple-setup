const Header = () => {
  const Navbar = document.createElement("nav");
  const NavLinks = document.createElement("ul");
  let NavNames = ["Home", "Menu", "About", "Contact"];

  Navbar.style.height = "9vh";
  Navbar.style.background = "pink";
  Navbar.style.display = "flex";
  Navbar.style.justifyContent = "center";
  Navbar.style.alignItems = "center";
  Navbar.style.margin = "auto";

  NavLinks.style.listStyleType = "none";
  NavLinks.style.display = "flex";
  NavLinks.style.justifyContent = "center";
  NavLinks.style.alignItems = "center";
  NavLinks.style.margin = "auto";

  NavNames.forEach(name => {
    const NavLink = document.createElement("li");
    NavLink.style.paddingLeft = "5px";
    NavLink.textContent = name;
    NavLinks.appendChild(NavLink);
  });

  Navbar.appendChild(NavLinks);

  return Navbar;
};

export default Header;
